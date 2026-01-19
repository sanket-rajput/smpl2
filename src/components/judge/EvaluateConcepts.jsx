import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { validate_isEmpty } from '../forms/utils';
import { Label } from '../ui/label';
import { Select } from '../ui/select';
import { generateOptions } from '../forms/utils';
import FormButton from '../forms/FormButton';
import { toast } from 'react-toastify';
import { useEvaluateProjectMutation } from '../../app/services/judgeAPI';


const initialState = {
  innovation: "1",
  approachToIdeas: "1",
  approachToImplementation: "1",
  principles: "1",
  presentation: "1",
}

const EvaluateConcepts = () => {

  const judge_data = JSON.parse(window.sessionStorage.getItem("judge_data"));
  const [conceptsResult, setConceptsResult] = useState(initialState);
  const { pid } = useParams();
  const [evaluateProject, { isLoading, isError, error }] = useEvaluateProjectMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await evaluateProject({data: {...conceptsResult, pid, jid: judge_data?.jid}, event_name: 'concepts'}).unwrap();
      if(isError){
        throw error;
      }
      else{
        toast.success("Evaluation Completed!")
        setConceptsResult(initialState);
        navigate('/judge/evaluate');
      }
    }
    catch(error){
      console.error(error);
      toast.error(error?.data?.message || error?.message || 'Something went wrong');
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConceptsResult({
      ...conceptsResult,
      [name] : value,
    });
  };

  const renderSelect = (label, options, value, id) => {
    return (
      <div>
        <Label htmlFor={id} className={`max-sm:text-lg`} required>{label}</Label>
        <Select
          options={options}
          value={value}
          onChange={handleChange}
          validate={validate_isEmpty.bool}
          errorMessage={validate_isEmpty.message()}
          id={id}
          name={id}
        />
      </div>
    )
  }

  return (
    <div className='w-full max-w-7xl px-2 sm:mx-auto flex flex-col gap-6'>
      <div className={"relative p-px"}>
        <span className="absolute inset-0 bg-gradient-to-r from-dark-blue via-light-blue to-orange-100"></span>
        <div className="w-full sm:px-6 sm:py-4 max-sm:px-2 p-4 flex flex-col sm:flex-row max-sm:items-center gap-6 sm:gap-8 bg-tertiary relative">
          <div className="flex max-sm:flex-col justify-between max-sm:gap-4 w-full">
            <div className='flex flex-col items-center sm:items-start justify-center gap-2 sm:flex-[0.8]'>
              <h1 className="font-bold sm:text-2xl text-xl">{`Evaluating for Concepts -  ${pid}`}</h1>
            </div>
          </div>
        </div>	
      </div>

      <div className="bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 p-px">
    <form
      className="w-full bg-tertiary p-4 sm:p-10 flex flex-col gap-4"
      onSubmit={handleSubmit}
    > 
      {renderSelect('Significance/Originality/Innovative ideas - (1-10)', generateOptions(1, 10), conceptsResult.innovation, "innovation")}
      {renderSelect('Overall Design & Methodology - (1-10)', generateOptions(1, 10), conceptsResult.approachToIdeas, "approachToIdeas")}
      {renderSelect('Implementation (5) & Demonstration (5) - (1-10)', generateOptions(1, 10), conceptsResult.approachToImplementation, "approachToImplementation")}
      {renderSelect('Result & Contribution - (1-10)', generateOptions(1, 10), conceptsResult.principles, "principles")}
      {renderSelect('Presentation and Q & A - (1-10)', generateOptions(1, 10), conceptsResult.presentation, "presentation")}

      {/* Submit Button */}
      <div className="pt-4">
        <FormButton loading={isLoading} className={`w-fit px-4`} onClick={handleSubmit} text={'Submit Score'}></FormButton>
      </div>
    </form>
    </div>
    </div>
  )
}

export default EvaluateConcepts