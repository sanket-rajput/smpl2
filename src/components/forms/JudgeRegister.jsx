import { useEffect, useState, useCallback } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import FormButton from "./FormButton";

import { impetus, concepts } from "../../assets";

import { validate_isEmpty, validate_email, validate_phone, validateJudgeForm } from "./utils";
import { impetus_domains, getJudgingSlots, yesNoOptions } from "./constants";
import { toast } from "react-toastify";

import scrollToTop from "../../utils/scrollToTop";
import { formatPhoneNumber } from "./utils";
import { RadioButton } from "../ui/RadioButton";
import { useProcessJudgeRegisterMutation } from "../../app/services/judgeAPI";
import { IconCircleCheck } from "@tabler/icons-react";
import { useParams, useSearchParams } from "react-router-dom";
import { eventsData } from "../../constants";

const initialState = {
  'events': 'impetus',
  'name': '',
  'email': '',
  'phone': '',
  'company': '',
  'commercial_address': 'N/A',
  'residential_address': '',
  'exp': '3',
  'domains': [],
  'slots': [],
  'min_projects': '5',
  'isPICT': null,
  'referral': ''
}

const JudgeRegister = () => {

  const [ formData, setFormData ] = useState(initialState)
  const [searchParams] = useSearchParams();
  const { event_name } = useParams();
  const [phone, setPhone] = useState("");
  const [ processJudgeRegister, { isLoading, isSuccess } ] = useProcessJudgeRegisterMutation();

  useEffect(() => {
    scrollToTop()
    if(!searchParams.get('URLAccessCode')){
      toast.info('URL Access Code missing in query param');
    }
    setFormData({
      ...formData,
      events: event_name,
    });
  }, [])
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === "phone"){
      const {formatted, numbersOnly} = formatPhoneNumber(value);
      setPhone(formatted)
      setFormData({
        ...formData,
        [name]: numbersOnly,
      });
      return;
    }
    setFormData({
      ...formData,
      [name] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(validateJudgeForm(formData)){
      toast.error('Fill all the required details correctly!');
      return;
    }
    else if(formData.domains.length < 2){
      toast.info('Select aleast 2 domains for judging.');
      return;
    }
    else if(Number(formData.min_projects) < 5){
      toast.info('Select atleast 5 projects for judging.')
      return;
    }
    try{
      const tempData = { ...formData, accessCode: searchParams.get('URLAccessCode') };
      const data = await processJudgeRegister(tempData).unwrap();
      if(data?.success){
        scrollToTop();
        toast.success('Registered Successfully');
      }
      else toast.info('Unable to register');
    }
    catch(error){
      console.error(error);
      toast.error(error?.data?.message || error?.message || 'Something went wrong');
    }
  };

  return (
    <section className="py-24 h-full flex flex-col gap-y-8 p-2">
    <div className={"w-full max-w-7xl mx-auto relative p-px"}
		>
			<span className="absolute inset-0 bg-gradient-to-r from-dark-blue via-light-blue to-orange-100"></span>

			<div className="w-full sm:px-6 p-4 flex flex-col sm:flex-row max-sm:items-center gap-6 sm:gap-8 bg-tertiary relative">
				<div className="flex max-sm:flex-col justify-between max-sm:gap-4 w-full">
				<div className='flex max-sm:flex-col items-center gap-8 sm:flex-[0.8]'>
          <img src={event_name === 'impetus' ? impetus : concepts} alt="event logo" className="w-[120px] sm:w-[180px] sm:pr-8 sm:border-r-[1px]" />
					<div className="flex flex-col gap-2">
            <h1 className="font-bold text-2xl sm:text-3xl">{`Registering as a Judge for ${formData.events[0]?.toUpperCase() + formData.events?.slice(1)}`}</h1>
            <p className="text-secondary max-sm:text-sm">{eventsData[event_name]?.short_desc}</p>
          </div>
				</div>
				</div>
			</div>
		</div>
    <div className="bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 w-full max-w-7xl mx-auto p-px">
    {isSuccess ? 
    <div className="bg-tertiary p-6 border flex flex-col items-center border-blue-500/30">
      <IconCircleCheck color="#22c55e" size={80}/>
      <h3 className="text-xl font-semibold text-center text-green-500">
        Thank You for Registering <br />
        <span className="text-secondary">Credentials will be sent to you via email.</span>
      </h3>
    </div>
    :
    <form
      className="w-full bg-tertiary p-4 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-8"
      onSubmit={handleSubmit}
    > 
      {/* Name */}
      <div className="">
        <Label htmlFor="name" required>Full Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          placeholder="Enter name"
        />
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email" required>Email</Label>
        <Input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          validate={validate_email.bool}
          errorMessage={validate_email.message()}
          placeholder="Enter email"
        />
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone" required>Mobile No.</Label>
        <Input
          id="phone"
          name="phone"
          value={phone}
          onChange={handleChange}
          validate={validate_phone.bool}
          errorMessage={validate_phone.message()} 
          placeholder="Enter mobile number"
        />
      </div>

      {/* Company/Organization */}
      <div className="sm:col-span-2">
        <Label htmlFor="company" required>Company/Organization</Label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          placeholder="Enter company or organization name"
        />
      </div>

      {/* Company/Organization Address */}
      {/* <div className="sm:col-span-2">
        <Label htmlFor="commercial_address" required>Company/Organization Address</Label>
        <Input
          id="commercial_address"
          name="commercial_address"
          value={formData.commercial_address}
          onChange={handleChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          placeholder="Enter company or organization address"
        />
      </div> */}

      {/* Residential Address */}
      <div className="sm:col-span-2">
        <Label htmlFor="residential_address" required>City of Residence</Label>
        <Input
          id="residential_address"
          name="residential_address"
          value={formData.residential_address}
          onChange={handleChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          placeholder="Enter your residence city name"
        />
      </div>

      {/* Experience */}
      <div className="">
        <Label htmlFor="exp" required>Industry Experience (in years)</Label>
        <Input
          id="exp"
          name="exp"
          value={formData.exp}
          onChange={handleChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          placeholder="Enter industry experience in years"
        />
      </div>

      {/* Min Projects */}
      <div className="">
        <Label htmlFor="min_projects" required>Minimum No. of Projects to Judge</Label>
        <Input
          id="min_projects"
          name="min_projects"
          min="5"
          type='number'
          value={formData.min_projects}
          onChange={handleChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          placeholder="Enter minimum number of projects you wish to judge"
        />
      </div>

      {/* Select Domains for Judging */}
      <div className="sm:col-span-2">
        <Label htmlFor="min_projects" required>Select Domain(s) for Judging</Label>
        <Checkboxes label='Select Domain(s) for Judging' name='domains' state={formData} setState={setFormData} options={impetus_domains} error={initialState.domains} required />
      </div>

      {/* Select Slot(s) for Judging */}
      <div className="sm:col-span-2">
        <Label htmlFor="min_projects" required>Select Slot(s) for Judging</Label>
        <Checkboxes label='Select Slot(s) for Judging' name='slots' state={formData} setState={setFormData} options={getJudgingSlots(event_name)} error={initialState.domains} required />
      </div>

      {/* Are you a PICT Alumini? */}
      <div className="">
        <Label htmlFor="isPICT" required>Are you a PICT Alumini?</Label>
        <RadioButton
          id="isPICT"
          name="isPICT"
          options={yesNoOptions}
          errorMessage={formData.isPICT === null && "Field is Required"}
          onChange={handleChange}
          className=""
        />
      </div>

      {/* Referral */}
      <div className="">
        <Label htmlFor="referral">Referred by</Label>
        <Input
          id="referral"
          name="referral"
          value={formData.referral}
          onChange={handleChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          placeholder="Enter referral's name"
        />
      </div>

      {/* Submit Button */}
      <div className="sm:col-span-2 justify-self-end">
        <FormButton loading={isLoading} className={``} onClick={handleSubmit} text={'Register'}></FormButton>
      </div>
    </form>}
    </div>
    </section>
  );
};

export default JudgeRegister;

function Checkboxes({ options, name, state, setState }) {
    const handleCheckboxChange = useCallback((e) => {
        const { value } = e.target
        setState(prevState => {
            let newState = { ...prevState }
            if (!newState[name].includes(value)) {
                newState[name] = [...newState[name], value]
            } else {
                newState[name] = newState[name].filter(item => item !== value)
            }
            return newState
        })
    }, [setState, state])

    return (
      <div className='w-full pt-2 relative'>
        <div className='grid gird-cols-1 sm:grid-cols-2 gap-4'>
          {options.map(option => {
            return (
              option.value && 
              <div className='flex gap-2 items-center' key={option?.value + '_' + name}>
                <input type='checkbox' name={name} id={option?.value + '_' + name} value={option?.value} checked={state[name].includes(option?.value)} onChange={handleCheckboxChange} required={option?.required ? 'required' : ''} className='' />
                <label htmlFor={option?.value + '_' + name} className={``}>{option?.label}</label>
              </div>
            )
          })}
        </div>
      </div>
    )
}