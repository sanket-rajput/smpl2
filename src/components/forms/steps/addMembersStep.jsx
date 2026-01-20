import { useEffect, useState } from "react";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import FormButton from "../FormButton";

import { formatPhoneNumber, validate_email, validate_isEmpty, validate_phone, } from "../utils"; 
import { Select } from "../../ui/select";
import { FileUpload } from '../../ui/file-upload'
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { submit_step2 } from "../../../app/features/form/formSlice";
import { useAddMemberMutation, useAddTechfiestaMembersMutation, useLazyGetMembersQuery, useLazyGetTechfiestaMembersQuery, useRemoveMemberMutation } from "../../../app/services/formAPI";
import scrollToTop from "../../../utils/scrollToTop";
import Loader from "../../ui/Loader";

const initialState = {
  id: "",
  name: "",
  email: "",
  phone: "",
  gender: "",
  member_id: "",
  codechef_id: ""
}

const AddMemberStep = ({ event, prevStep, nextStep, isPradnya }) => {
  
  const ename = window.localStorage.getItem('event_name');
  const form = JSON.parse(window.sessionStorage.getItem('form'));
  const ticket = window.localStorage.getItem('ticket') || '';
  const [minMembers, setMinMembers] = useState(2);
  const [maxMembers, setMaxMembers] = useState(5);
  const [ getMembers, { data, isSuccess, isFetching: isGetMemsLoading } ] = useLazyGetMembersQuery();
  const [ getTechfiestaMembers, { data: techfiestaMems, isSuccess: isTechfiestaSuccess, isLoading: isTechfiestaLoading, error: techerr, isError: isTechfiestaError } ] = useLazyGetTechfiestaMembersQuery();
  const [ addMember, { isLoading } ] = useAddMemberMutation()
  const [ removeMember, { isLoading: isRemoveLoading } ] = useRemoveMemberMutation();
  const [ addTechfiestaMembers, { isLoading: isAddTechLoading } ] = useAddTechfiestaMembersMutation();
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState(initialState);
  const dispatch = useDispatch()
  const [phone, setPhone] = useState("")
  
  useEffect(() => {
    scrollToTop()
    try {
      if(event === ename && form?.step1?.techfiesta === "1"){
        getTechfiestaMembers({team_id: form?.step1?.team_id, event});
      }
      else if(event === ename){
        getMembers(ticket);
      }
    } catch (error) {
      toast.error(error?.data?.message || error?.message || 'Failed to get Members')
    }
    if(event === "pradnya"){
      setMinMembers(1);
      setMaxMembers(2);
    }
    if(form?.step1?.domain === "DE"){
      setMinMembers(1);
      setMaxMembers(3);
    }
  }, []);

  useEffect(() => {
    if (isSuccess || isTechfiestaSuccess) {
      if (techfiestaMems?.team_json?.length > 0) {
        const mems = techfiestaMems.team_json.filter((mem) => {
          return mem.name || mem.email || mem.gender || mem.phone;
        })
        setMembers([...mems]);
      }
      else if(data?.step_2 && Array.isArray(data?.step_2)){
        setMembers([...data.step_2]);
      }
      else{
        // setMembers([...step2])
      }
    }
    else if(isTechfiestaError){
      toast.error(techerr?.data?.message || 'Failed to fetch Team Members');
      prevStep();
    }
  }, [data, isSuccess, techfiestaMems, isTechfiestaSuccess, isTechfiestaError]); 
  
  const handleAddMember = async () => {
    // if(validateMember(newMember)){
    //   toast.error('Fill all the required details correctly!')
    //   return
    // }
    newMember.id = Date.now();
    try{
      const memberFormData = new FormData();
      memberFormData.append("member_id", newMember.member_id);
      const tempMemberDetails = { ...newMember };
      delete tempMemberDetails.member_id;
      memberFormData.append("body", JSON.stringify(tempMemberDetails));
      const storedTicket = window.localStorage.getItem("ticket") || "";
const tempTicket = (event === ename) ? storedTicket : "";

      const response = await addMember({ event_name: event, ticket: tempTicket, data: memberFormData }).unwrap()
      window.localStorage.setItem('ticket', response.ticket);
      window.localStorage.setItem('event_name', event)
      const clg_id_name = newMember.member_id?.name;
      delete newMember.member_id;
      newMember.member_id = clg_id_name

      setMembers([...members, { ...newMember }])
      toast.success('Added Successfully')
      setNewMember(initialState);
      setPhone("");
    }
    catch(error){
      if(error?.status === 'FETCH_ERROR') toast.error('Invalid File Input');
      else toast.error(error?.data?.message || error?.message || 'Failed to Add Member')
    }

  };

  const handleDeleteMember = async (id, index=0) => {
    try{
      if(form?.step1?.techfiesta === "0" || !form){
        await removeMember({ index, ticket }).unwrap()
      }
      setMembers((prev) => prev.filter((member) => member.id !== id));
      toast.success('Removed Successfully')
    }
    catch(error){
      // console.log(error)
      toast.error(error?.data?.message || error?.message  || 'Failed to Delete Member')
    }
  };

  const handleSubmit = async () => {
    if (members.length < minMembers) {
      toast.info('Min Members must be ' + minMembers)
      return;
    }
    else if (members.length > maxMembers) {
      toast.info('Max allowed Members are ' + maxMembers)
      return;
    }
    else{
      dispatch(submit_step2(members))
      toast.success('Members Saved')
      nextStep()
    } 
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    if(form?.step1?.techfiesta === "1"){
      try {
        await addTechfiestaMembers({ ticket, data: members }).unwrap();
        toast.success('Added Successfully')
        setNewMember(initialState);
        setPhone("");
        handleSubmit();
      } catch (error) {
        console.error(error);
        toast.error(error?.data?.message || error?.message  || 'Failed to Add Members')
      }
    }
    else{
      handleSubmit();
    }
  }

  return (
    <>
    {isTechfiestaLoading ?
      <div className="fixed inset-0 z-50 backdrop-blur-sm">
        <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] flex flex-col items-center gap-8">
          <Loader size={150} />
          <h2 className="sm:text-2xl text-white text-center">Fetching Techfiesta Team...</h2>
        </div>
      </div>
    :
    <form
      className="w-full bg-tertiary p-4 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-6"
      onSubmit={handleSubmit}
    > 
      <h2 className="text-xl font-bold text-white-100">Add Team Members</h2>
      <div className="text-gray-400 text-sm">
        <strong>Note:</strong> 
        <ul className="list-disc list-inside">
          <li>The first member added will be the&nbsp;<span className="text-blue-500 font-bold">Team Leader</span>.</li>
          {isTechfiestaSuccess && <li>Techfiesta Participants cannot add new members.</li>}
        </ul>
      </div>
      {/* Add New Member Form */}
      <div className="space-y-8">
        <div>
          <Label htmlFor="name" required>Name</Label>
          <Input
            disabled={isLoading}
            name="name"
            id="name"
            value={newMember.name}
            onChange={(e) =>
              setNewMember({ ...newMember, name: e.target.value })
            }
            validate={validate_isEmpty.bool}
            errorMessage={validate_isEmpty.message()}
            placeholder="Enter member's name"
          />
        </div>

        <div>
          <Label htmlFor="email" required>Email</Label>
          <Input
            disabled={isLoading}
            id="email"
            name="email"
            value={newMember.email}
            onChange={(e) =>
              setNewMember({ ...newMember, email: e.target.value })
            }
            validate={validate_email.bool}
            errorMessage={validate_email.message()}
            placeholder="Enter member's email"
          />
        </div>

        {/* Phone and Gender Side by Side */}
        <div className="sm:flex gap-4 max-sm:space-y-8">
          <div className="flex-1">
            <Label htmlFor="phone" required>Phone</Label>
            <Input
              disabled={isLoading}
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => {
                const { value } = e.target;
                const {formatted, numbersOnly} = formatPhoneNumber(value);
                setPhone(formatted)
                setNewMember({ ...newMember, phone: numbersOnly })
              }}
              validate={validate_phone.bool}
              errorMessage={validate_phone.message()}
              placeholder="Phone number"
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="gender" required>Gender</Label>
            <Select
              id="gender"
              name="gender"
              disabled={isLoading}
              value={newMember.gender}
              onChange={(e) =>
                setNewMember({ ...newMember, gender: e.target.value })
              }
              options={[
                { value: "", label: "Select Gender" },
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "other", label: "Other" },
              ]}
              validate={validate_isEmpty.bool}
              errorMessage={validate_isEmpty.message()}
            />
          </div>
        </div>

        <div className={!isPradnya ? 'hidden' : 'block'}>
          <Label htmlFor="codechef_id">Codechef ID</Label>
          <Input
            disabled={isLoading}
            id="codechef_id"
            name="codechef_id"
            value={newMember.codechef_id}
            onChange={(e) =>
              setNewMember({ ...newMember, codechef_id: e.target.value })
            }
            placeholder="Enter member's Codechef ID"
          />
        </div>

        {/* ID Card Photo Upload */}
        <div className="relative">
          <Label htmlFor="member_id" required>College ID Card</Label>
          <FileUpload 
          id="member_id"
          value={newMember.member_id}
          disabled={isLoading}
          onChange={
            (files) => {
              setNewMember({...newMember, member_id: files[0]})
            }
          }
          />
          {/* <div className="mt-2 flex items-center gap-1 text-sm text-cyan-500">
            <IconInfoCircleFilled />
            <p>{`Mandatory for International Candidates`}</p>
          </div> */}
        </div>

        <button
          type="button"
          onClick={handleAddMember}
          disabled={members.length === maxMembers || isLoading || isTechfiestaSuccess}
          className="bg-black-100 text-white border-[1px] border-secondary px-4 py-2 disabled:opacity-50"
        >
          { isLoading ? 'Adding...' : 'Add Member' }
        </button>
      </div>

      {/* Added Members Section */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-white">
          Team Members ({members.length}/{maxMembers})
        </h3>
        {isGetMemsLoading && <p>Fetching...</p>} 
        {members.sort((a, b) => new Date(a.id) - new Date(b.id)).map((member, index) => (
          <div
            key={member.phone}
            className={`relative flex items-center justify-between bg-slate-800 p-4 text-white group ${
              index === 0 ? "border-l-4 border-secondary" : ""
            }`}
          >
            <span className={`text-lg ${index === 0 ? "font-bold" : ""}`}>
              {member.name}
              {index === 0 && (
                <span className="ml-2 text-orange-100">(Team Leader)</span>
              )}
            </span>

            {/* Hover Details Card */}
            <div className="absolute top-full left-0 mt-2 w-[280px] p-4 bg-black-100 text-gray-300 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
              <p className="font-semibold text-white mb-2">
                Member Details
              </p>
              <p className="font-bold text-sm">
                Name:
                <span className="font-normal">&nbsp;{member.name}</span>
              </p>
              <p className="font-bold text-sm">
                Email:
                <span className="font-normal">&nbsp;{member.email}</span>
              </p>
              <p className="font-bold text-sm">
                Gender:
                <span className="font-normal">&nbsp;{member.gender || 'saved'}</span>
              </p>
              <p className="font-bold text-sm">
                Phone:
                <span className="font-normal">&nbsp;{member.phone}</span> 
              </p>
              <p className={`font-bold text-sm ${!isPradnya && 'hidden'}`}>
                CodeChef ID:
                <span className="font-normal">&nbsp;{member.codechef_id}</span> 
              </p>
              <p className="font-bold text-sm">
                College ID:
                <span className="font-normal">&nbsp;{member.member_id || 'uploaded'}</span>
              </p>
            </div>
            <button
              onClick={() => handleDeleteMember(member.id, index)}
              disabled={ isRemoveLoading }
              className="text-red-600 hover:scale-110 transform transition duration-200 disabled:text-red-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 30 30"
                fill="currentColor"
              >
                <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className={`sm:col-span-2 ${isPradnya ? 'justify-self-end' : 'flex items-center justify-between'}`}>
        {!isPradnya && <FormButton loading={false} className={``} isPrev onClick={() => prevStep()} />}
        <FormButton loading={isAddTechLoading} className={``} onClick={handleFinalSubmit} />
      </div>
      </form>
    }
    </>
  );
};

export default AddMemberStep;