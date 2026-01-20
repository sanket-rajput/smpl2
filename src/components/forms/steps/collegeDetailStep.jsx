import { useEffect, useState } from "react";
import { Select } from "../../ui/select";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import FormButton from "../FormButton";

import { yearOptions, localityOptions, yesNoOptions, modeOptions, yearOptionsNova } from '../constants'
import { RadioButton } from "../../ui/RadioButton";
import { validate_isEmpty, validateCollegeDetails } from "../utils"
import { useDispatch, useSelector } from "react-redux";
import { submit_step3 } from "../../../app/features/form/formSlice";
import { toast } from "react-toastify";
import { useStepThreeMutation } from "../../../app/services/formAPI";
import scrollToTop from "../../../utils/scrollToTop";

const pictState = {
  isPICT: "1",
  college: "Pune Institute Of Computer Technology",
  country: "India",
  state: "Maharashtra",
  city: "Pune",
  district: "Pune",
  locality: "1",
  mode: "1",
  reason_of_mode: "",
  isInternational: "0",
  year: "",
  referral: "",
}

const initialState = {
  isPICT: "0",
  college: "",
  country: "",
  state: "",
  city: "",
  district: "",
  locality: "1",
  mode: "1",
  reason_of_mode: "",
  isInternational: "0",
  year: "",
  referral: "",
}

// const restrictedColleges = [
//   "sctrs pune institute of computer technology",
//   "sctr pune institute of computer technology",
//   "pune institute of computer technology",
//   "sctrs pict",
//   "sctr pict",
//   "pict",
// ];

const CollegeDetailsStep = ({ event, prevStep, nextStep }) => {
  const step3 = useSelector(state => state.form.step3)
  const [formData, setFormData] = useState({...step3});
  const dispatch = useDispatch()
  const [isPICT, setIsPICT] = useState(formData.isPICT === "1");
  const [ stepThree, { isLoading } ] = useStepThreeMutation();

  useEffect(() => {
    scrollToTop();
    if(formData.isPICT === "1"){
      document.querySelectorAll('#isPICT')[0].checked = true
      document.querySelectorAll('#isInternational')[1].checked = true;
    }
    else if(formData.isPICT === "0"){
      document.querySelectorAll('#isPICT')[1].checked = true
      if(formData.isInternational === "1"){
        document.querySelectorAll('#isInternational')[0].checked = true;
      }
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const normalizeInput = (input) => {
  //   return input
  //     .toLowerCase()
  //     .replace(/[^a-z0-9 ]/g, "")
  //     .trim();
  // };

  // const checkForPICTConcepts = (inputValue) => {
  //   if(event === "concepts" && (formData.isPICT === "1" || restrictedColleges.some((name) => normalizeInput(inputValue).startsWith(normalizeInput(name))))){
  //     return true;
  //   }
  //   return false;
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if(checkForPICTConcepts(formData.college)){
    //   toast.info("Registrations closed for PICT.")
    //   return;
    // }
    if(event === "concepts"){
      setFormData((prev) => ({...prev, year: "BE"}));
    }
    if(validateCollegeDetails(event, formData)){
      toast.error("Fill all the required details correctly!")
      return;
    }
    try{
      const ticket = window.localStorage.getItem('ticket') || '';
      await stepThree({ event_name: event, ticket, data: formData }).unwrap()
      toast.success('College Details Saved')
      dispatch(submit_step3(formData))
      nextStep()
    }
    catch(error){
      // console.log(error)
      toast.error(error?.data?.message || error?.message  || 'Failed to Save College Details')
    }
  };


  return (
    <form
      className="w-full bg-tertiary p-4 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-8"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-bold text-white-100 sm:col-span-2">College Details</h2>

      {/* Are you from PICT? */}
      <div className="">
        <Label htmlFor="isPICT" required>Are you from PICT?</Label>
        <RadioButton
          id="isPICT"
          name="isPICT"
          options={yesNoOptions}
          errorMessage={formData.isPICT === null && "Field is Required"}
          onChange={(e) => {
            const value = e.target.value
            const isInternational = formData.isInternational
            // console.log(value)
            setIsPICT(value === "1" ? true : false)
            // console.log(isPICT)
            if (value === "1") {
              setFormData((prev) => ({ ...prev, ...pictState, }))
              document.querySelectorAll('#isInternational')[1].checked = true;
            }
            else {
              setFormData((prev) => ({ ...prev, ...initialState, isInternational, }))
            }
          }}
          className=""
        />
      </div>

      {/* If Yes, ask only for Year */}
      <div className="">
        <Label htmlFor="year" required>Which year are you in (Team Leader)?</Label>
        <Select
          name="year"
          id="year"
          value={event === "concepts" ? "BE" : formData.year}
          options={
              event === "concepts"
              ? [{ value: "BE", label: "Final Year" }]
              : event === "impetus"
              ? yearOptions
              : yearOptionsNova
          }
          onChange={handleInputChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          className=""
        />
      </div>

      {/* College Details for Non-PICT Users */}
      <div>
        <Label htmlFor="college" required>Which College?</Label>
        <Input
          type="text"
          id="college"
          name="college"
          disabled={isPICT}
          value={formData.college}
          onChange={handleInputChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          className=""
          placeholder="Enter college name"
        />
      </div>
      <div>
        <Label htmlFor="country" required>Country</Label>
        <Input
          type="text"
          id="country"
          name="country"
          disabled={isPICT}
          value={formData.country}
          onChange={handleInputChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          className=""
          placeholder="Enter country"
        />
      </div>
      <div>
        <Label htmlFor="state" required>State</Label>
        <Input
          type="text"
          id="state"
          name="state"
          disabled={isPICT}
          value={formData.state}
          onChange={handleInputChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          className=""
          placeholder="Enter state"
        />
      </div>
      <div>
        <Label htmlFor="city" required>City</Label>
        <Input
          type="text"
          id="city"
          name="city"
          disabled={isPICT}
          value={formData.city}
          onChange={handleInputChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          className=""
          placeholder="Enter city"
        />
      </div>
      <div>
        <Label htmlFor="district" required>District</Label>
        <Input
          type="text"
          name="district"
          id="district"
          disabled={isPICT}
          value={formData.district}
          onChange={handleInputChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          className=""
          placeholder="Enter district"
        />
      </div>
      <div>
        <Label htmlFor="locality" required>Locality</Label>
        <Select
          name="locality"
          id="locality"
          disabled={isPICT}
          value={formData.locality}
          options={localityOptions}
          onChange={handleInputChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          className=""
        />
      </div>

      {/* Mode of Study */}
      <div className="">
        <Label htmlFor="mode" required>Mode of Study</Label>
        <Select
          name="mode"
          id="mode"
          value={formData.mode}
          options={modeOptions}
          onChange={(e) => {
            handleInputChange(e)
          }}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          className=""
        />
      </div>

      <div className="">
        <Label htmlFor="reason_of_mode" required>Reason for Online Mode</Label>
        <Input
          type="text"
          name="reason_of_mode"
          id="reason_of_mode"
          disabled={(formData.mode === '1')}
          value={formData.reason_of_mode}
          onChange={handleInputChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          className=""
          placeholder="Enter reason for online mode"
        />
      </div>

      {/* International Student */}
      <div className="">
        <Label htmlFor="isInternational" required>Are you International Student?</Label>
        <RadioButton
          id="isInternational"
          name="isInternational"
          errorMessage={formData.isInternational === null && "Field is Required"}
          options={yesNoOptions}
          disabled={isPICT}
          onChange={(e) => {
            const value = e.target.value
            setFormData((prev) => ({...prev, isInternational: (value === "1" ? "1" : "0")}))
          }}
          className=""
        />
      </div>

      {/* Submit Button */}
      <div className="sm:col-span-2 flex justify-between">
        <FormButton loading={false} isPrev onClick={() => prevStep()}></FormButton>
        <FormButton loading={isLoading} className={``} onClick={handleSubmit}></FormButton>
      </div>
    </form>
  );
};

export default CollegeDetailsStep;