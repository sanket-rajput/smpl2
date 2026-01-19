import { useLazyGetSynopsisQuery } from '../app/services/adminAPI'
import { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { validate_isEmpty } from './forms/utils';
import FormButton from './forms/FormButton';
import { useNavigate, useParams } from 'react-router-dom';
import { Select } from './ui/select';
import { toast } from 'react-toastify';
import Loader from './ui/Loader';
import { IconNotebook } from '@tabler/icons-react';

const GenerateSynopsis = () => {
  const [getSynopsis, { isFetching }] = useLazyGetSynopsisQuery();
  const [ team_ids, setTeam_ids] = useState('');
  const { event_name } = useParams();
  const navigate = useNavigate();

  const handleGetSynopsis = async (value) => {
    let pdfUrl = '';
    if(value === 1){
      if(!team_ids.trim()){
        toast.info("Enter Team ID to continue");
        return;
      }
      pdfUrl = await getSynopsis({event_name, team_ids})
      .unwrap()
      .catch((error) => {
        toast.error(error?.data?.message || error?.message || "Failed to fetch.");
      });
    }
    else if(value === 2){
      pdfUrl = await getSynopsis({event_name, team_ids: ''})
      .unwrap()
      .catch((error) => {
        toast.error(error?.data?.message || error?.message || "Failed to fetch.");
      })
    }
    if(pdfUrl) {
      const a = document.createElement("a");
      a.href = pdfUrl;
      a.download = `${event_name}_synopsis.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    else{
      toast.error("Failed to download PDF.");
    }
  }

  return (
    <div className='max-w-7xl mx-auto h-full flex max-sm:flex-col justify-center sm:justify-evenly items-center pt-24 pb-28'
    > 
      <div className='flex flex-col gap-4 justify-center sm:pt-10 items-center px-2'>
        <IconNotebook className='text-orange-100 size-16 sm:size-[150px]'/>
        <h1 className='text-3xl sm:text-[50px] text-center font-bold text-white-100'>Generate Synopsis</h1>
      </div>
      <form className='flex flex-col gap-8 px-2' onSubmit={(e) => {e.preventDefault()}}>
        <div className='h-6 flex justify-center'>{isFetching && <Loader size={80} />}</div>
        <div>
          <Label htmlFor="event_name" required>Event Name</Label>
          <Select
            options={[
              { "value": "impetus", "label": "Impetus" },
              { "value": "concepts", "label": "Concepts" },
            ]}
            value={event_name}
            onChange={(e) => {navigate(`/generate-synopsis/${e.target.value}`)}}
            validate={validate_isEmpty.bool}
            errorMessage={validate_isEmpty.message()}
            id="event_name"
            name="event_name"
          />
        </div>
        <div>
          <Label htmlFor="team_ids">Enter Team ID&apos;s (comma seperated)</Label>
          <Input
            disabled={isFetching}
            name="team_ids"
            id="team_ids"
            value={team_ids}
            validate={validate_isEmpty.bool}
            errorMessage={validate_isEmpty.message()}
            onChange={(e) => setTeam_ids(e.target.value)}
            placeholder="Eg. IM-AD0001, IM-ML0001"
          />
        </div>
        <div className='flex items-center justify-between'>
        <FormButton onClick={() => handleGetSynopsis(1)} text={`Get Synopsis`} className={`w-fit h-fit px-4 py-2`} isDisabled={isFetching}></FormButton>
        <FormButton onClick={() => handleGetSynopsis(2)} text={`Download All`} className={`w-fit h-fit px-4 py-2`} isDisabled={isFetching}></FormButton>
        </div>
      </form>
    </div>  
  )
}

export default GenerateSynopsis