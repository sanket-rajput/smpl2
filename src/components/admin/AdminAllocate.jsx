import { useEffect, useState } from 'react'
import { useGetJudgeRegistrationsQuery } from '../../app/services/judgeAPI'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetVerifiedRegistrationsQuery, } from '../../app/services/adminAPI';
import { toast } from 'react-toastify';
import { DataGrid, GridToolbar, useGridApiRef } from '@mui/x-data-grid';
import FormButton from '../forms/FormButton';
import { useAllocateJudgeMutation } from '../../app/services/allocationAPI';

const AdminAllocate = () => {

  const { event_name } = useParams(); 
  const judgeApiRef = useGridApiRef();
  const teamsApiRef = useGridApiRef();
  const { data, isFetching: isLoadingJudges, isSuccess, isError, error } = useGetJudgeRegistrationsQuery(event_name);
  const { isFetching: isLoadingTeams, isSuccess: isVerifiedSuccess, data: verifiedData, isError: isVerifiedError, error: verifiedError } = useGetVerifiedRegistrationsQuery(event_name);
  const [ allocateJudge, { isLoading: isAllocatingJudge, } ] = useAllocateJudgeMutation();
  const [judgesData, setJudgesData] = useState([]);
  const [verifiedRegistrations, setVerifiedRegistrations] = useState([]);
  const [jid, setJid] = useState([]);
  const [pid, setPid] = useState([]);
  const navigate = useNavigate();

  const handleAllocate = async () => {
    if(jid.length === 0 || pid.length === 0){
      toast.info('No judge or project selected');
      return;
    }
    try {
      const data = { pids: pid, jids: jid, slots: judgesData.find(judge => judge.jid === jid[0]).slots };
      await allocateJudge({data, event_name}).unwrap();
      toast.success('Allocation Success!')
      judgeApiRef.current.setRowSelectionModel([]);
      teamsApiRef.current.setRowSelectionModel([]);
      setJid([]);
      setPid([]);
    } catch (error) {
      console.error(error);
      toast.error(error?.data?.message || error?.message || "Failed to allocate.");
    }
  }

  useEffect(() => {
    if(isVerifiedSuccess){
      setVerifiedRegistrations(verifiedData);
    }
    else if(isVerifiedError){
      console.error(verifiedError);
      toast.error(verifiedError?.data?.message || verifiedError?.message || "Failed to fetch judges.");
    }
  }, [isVerifiedSuccess, verifiedData, isVerifiedError, verifiedError]);

  useEffect(() => {
    if(isSuccess){
      setJudgesData(data?.map((judge, index) => {
        return { ...judge, id: index };
      }));
    }
    else if(isError){
      console.error(error);
      toast.error(error?.data?.message || error?.message || "Failed to fetch judges.");
    }
  }, [isSuccess, data, isError, error]);  

  return (
    <section className='max-w-[90rem] mx-auto flex flex-col gap-6'>
      <div className='flex items-center justify-center gap-4'>
        <FormButton className={`w-auto h-auto px-4 py-2`} text={`Impetus`} onClick={() => {navigate('/admin/allocate/impetus')}}/>
        <FormButton className={`w-auto h-auto px-4 py-2`} text={`Concepts`} onClick={() => {navigate('/admin/allocate/concepts')}}/>
      </div>
      <h2 className='font-bold text-3xl'>Allocate Judge to Projects - <span className='text-slate-400'>{event_name}</span></h2>
      <div className='flex justify-between'>
        <div style={{ height: '500px', width: '70%' }}>
          <DataGrid apiRef={judgeApiRef} rows={judgesData} columns={judgeColumns} loading={isLoadingJudges} initialState={{pagination: { paginationModel: { pageSize: 25 }}}} pageSizeOptions={[25, 50, 100, { value: -1, label: 'All' }]} slots={{ noRowsOverlay: CustomNoResultsOverlay, toolbar: GridToolbar, }} disableRowSelectionOnClick checkboxSelection keepNonExistentRowsSelected disableMultipleRowSelection onRowSelectionModelChange={(rowId) => {
            const allocated_projects = judgesData[rowId]?.allocated_projects?.split(',');
            const filteredResult = allocated_projects ? verifiedData.filter((team) => !allocated_projects.includes(team?.pid)) : verifiedData;
            setVerifiedRegistrations(filteredResult);
            setJid(() => [judgesData[rowId[0]]?.jid]);
          }}/>
        </div>
        <div style={{ height: '500px', width: '26%' }}>
          <DataGrid apiRef={teamsApiRef} rows={verifiedRegistrations} columns={teamColumns} loading={isLoadingTeams} initialState={{pagination: { paginationModel: { pageSize: 25 }}}} pageSizeOptions={[25, 50, 100, { value: -1, label: 'All' }]} slots={{ noRowsOverlay: CustomNoResultsOverlay }} disableRowSelectionOnClick checkboxSelection keepNonExistentRowsSelected 
          onRowSelectionModelChange={(rowIds) => {
            const newPids = rowIds.map(rowId => verifiedRegistrations[rowId]?.pid);
            setPid(newPids);
          }}/>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-y-4 bg-tertiary p-6'>
        <div className='flex flex-col gap-4'>
          <p className='font-bold text-lg border-b-2 border-orange-100'>Selected Judges</p>
          <div className='flex flex-wrap items-center gap-2'>{jid.map(j => (<span key={j} className='bg-slate-700 rounded-sm px-2 font-semibold'>{j}</span>))}</div>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='font-bold text-lg border-b-2 border-orange-100'>Selected Teams</p>
          <div className='flex flex-wrap items-center gap-2'>{pid.map(p => (<span key={p} className='bg-slate-700 rounded-sm px-2 font-semibold'>{p}</span>))}</div>
        </div>
        <br />
        <FormButton loading={isAllocatingJudge} text={`Allocate`} className={`justify-self-start`} onClick={handleAllocate}/>
      </div>
    </section>
  )
}

export default AdminAllocate

const teamColumns = [
  { field: 'pid', headerName: 'Team ID', minWidth: 150, flex: 1 },
  {
    field: 'judges_count', 
    headerName: 'Allocated', 
    minWidth: 150,
    flex: 1 
  },
];

const judgeColumns = [
  { field: 'jid', headerName: 'Judge ID', minWidth: 120, flex: 1 },
  { 
    field: 'name', 
    headerName: 'Name', 
    minWidth: 150, 
    flex: 1 
  },
  {
    field: 'phone', 
    headerName: 'Mobile No.', 
    minWidth: 125,
    flex: 1,
    sortable: false,
  },
  {
    field: 'email', 
    headerName: 'Email', 
    minWidth: 150,
    flex: 1,
    sortable: false, 
  },
  {
    field: 'date',
    headerName: 'DOR',
    minWidth: 100,
    flex: 1,
    valueGetter: (params) => {
      return new Date(params).toLocaleDateString('en-IN');
    }
  },
  { 
    field: 'allocated_projects', 
    headerName: 'Allocated', 
    minWidth: 50,
    flex: 1, 
    valueGetter: (params) => {
      return params ? params.split(',').length : 0;
    },
  },
  {
    field: 'total_judged', 
    headerName: 'Total Judged', 
    minWidth: 50,
    flex: 1, 
    valueGetter: (params) => {
      return params ? params.split(',').length : 0;
    },
  },
  { 
    field: 'slots', 
    headerName: 'Slots', 
    minWidth: 50,
    flex: 1, 
    sortable: false,
    valueGetter: (params) => {
      return `${JSON.stringify(params)}`;
    },
  },
  { 
    field: 'domains', 
    headerName: 'Domains', 
    minWidth: 150, 
    flex: 1,
    sortable: false,
    valueGetter: (params) => {
      return `${JSON.stringify(params)}`;
    },
  },
  { 
    field: 'exp', 
    headerName: 'Experience', 
    minWidth: 50, 
    flex: 1,
  },
  { 
    field: 'residential_address', 
    headerName: 'Residence City', 
    minWidth: 150, 
    flex: 1,
    sortable: false,
  },
  { 
    field: 'isPICT', 
    headerName: 'is Alumni', 
    minWidth: 50, 
    flex: 1,
    sortable: false,
  },
  { 
    field: 'min_projects', 
    headerName: 'Min Projects', 
    minWidth: 50, 
    flex: 1,
  },
];

const CustomNoResultsOverlay = () => {
  return <p className='h-full flex justify-center items-center text-secondary'>No rows or Click on another Event to load data.</p>
}
