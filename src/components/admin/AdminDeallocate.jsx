import { useEffect, useState } from 'react'
import { useGetJudgeRegistrationsQuery, useLazyGetAllocatedProjectsQuery } from '../../app/services/judgeAPI'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import FormButton from '../forms/FormButton';
import { useDeallocateJudgeMutation } from '../../app/services/allocationAPI';

const AdminDeallocate = () => {

  const { event_name } = useParams(); 
  const judgeApiRef = useGridApiRef();
  const teamsApiRef = useGridApiRef();

  const { data, isFetching: isLoadingJudges, isSuccess, isError, error } = useGetJudgeRegistrationsQuery(event_name);
  const [ getAllocatedProjects, { isFetching: isFetchingAllocatedProjects, isSuccess: isAllocatedProjectsSuccess, data: allocatedProjects } ] = useLazyGetAllocatedProjectsQuery();

  const [ deallocateJudge, { isLoading: isDeallocatingJudge } ] = useDeallocateJudgeMutation();
  
  const [judgesData, setJudgesData] = useState([]);
  const [teams, setTeams] = useState([]);

  const [jid, setJid] = useState([]);
  const [pid, setPid] = useState([]);

  const navigate = useNavigate();

  const handleDeallocate = async () => {
    if(jid.length === 0 || pid.length === 0){
      toast.info('No judge or project selected');
      return;
    }
    try {
      const data = { pids: pid, jids: jid };
      await deallocateJudge({data, event_name}).unwrap();
      toast.success('Deallocation Success!')
      judgeApiRef.current.setRowSelectionModel([]);
      teamsApiRef.current.setRowSelectionModel([]);
      setJid([]);
      setPid([]);
    } catch (error) {
      console.error(error);
      toast.error(error?.data?.message || error?.message || "Failed to deallocate.");
    }
  }

  useEffect(() => {
    if(isAllocatedProjectsSuccess){
      const data = allocatedProjects[event_name]?.map((project, index) => ({...project, id: index}));
      setTeams(data);
    }
  }, [isAllocatedProjectsSuccess, allocatedProjects]);

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
  }, [isSuccess, data]);  

  return (
    <section className='max-w-[90rem] mx-auto flex flex-col gap-6'>
      <div className='flex items-center justify-center gap-4'>
        <FormButton className={`w-auto h-auto px-4 py-2`} text={`Impetus`} onClick={() => {navigate('/admin/deallocate/impetus')}}/>
        <FormButton className={`w-auto h-auto px-4 py-2`} text={`Concepts`} onClick={() => {navigate('/admin/deallocate/concepts')}}/>
      </div>
      <h2 className='font-bold text-3xl'>Deallocate Judge for Projects - <span className='text-slate-400'>{event_name}</span></h2>
      <div className='flex justify-between'>
        <div style={{ height: '500px', width: '70%' }}>
          <DataGrid apiRef={judgeApiRef} rows={judgesData} columns={judgeColumns} loading={isLoadingJudges} initialState={{pagination: { paginationModel: { pageSize: 25 }}}} pageSizeOptions={[25, 50, 100, { value: -1, label: 'All' }]} slots={{ noRowsOverlay: CustomNoResultsOverlay }} disableRowSelectionOnClick checkboxSelection keepNonExistentRowsSelected disableMultipleRowSelection onRowSelectionModelChange={(rowId) => {
            const selectedJid = judgesData[rowId[0]]?.jid;
            setJid(() => [selectedJid]);
            if(selectedJid) getAllocatedProjects(selectedJid);
            else{ 
              setTeams([]);
            }
          }}/>
        </div>
        <div style={{ height: '500px', width: '26%' }}>
          <DataGrid apiRef={teamsApiRef} rows={teams} columns={teamColumns} loading={isFetchingAllocatedProjects} initialState={{pagination: { paginationModel: { pageSize: 25 }}}} pageSizeOptions={[25, 50, 100, { value: -1, label: 'All' }]} slots={{ noRowsOverlay: CustomNoResultsOverlay }} disableRowSelectionOnClick checkboxSelection keepNonExistentRowsSelected 
          onRowSelectionModelChange={(rowIds) => {
            const newPids = rowIds.map(rowId => teams[rowId]?.pid);
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
        <FormButton loading={isDeallocatingJudge} text={`Deallocate`} className={`w-fit px-4`} onClick={handleDeallocate}/>
      </div>
    </section>
  )
}

export default AdminDeallocate

const teamColumns = [
  { field: 'pid', headerName: 'Team ID', minWidth: 150, flex: 1 },
  {
    field: 'title', 
    headerName: 'Project Title', 
    minWidth: 150,
    flex: 1 
  },
];

const judgeColumns = [
  { field: 'jid', headerName: 'Judge ID', minWidth: 150, flex: 1 },
  { 
    field: 'name', 
    headerName: 'Name', 
    minWidth: 150, 
    flex: 1 
  },
  {
    field: 'phone', 
    headerName: 'Mobile No.', 
    minWidth: 150,
    flex: 1 
  },
  { 
    field: 'allocated_projects', 
    headerName: 'Allocated', 
    minWidth: 150, 
    flex: 1,
    valueGetter: (params) => {
      return params ? params.split(',').length : 0;
    },
  },
  {
    field: 'total_judged', 
    headerName: 'Total Judged', 
    minWidth: 150, 
    flex: 1,
    valueGetter: (params) => {
      return params ? params.split(',').length : 0;
    },
  },
  { 
    field: 'slots', 
    headerName: 'Slots', 
    minWidth: 150, 
    flex: 1,
    sortable: false,
    valueGetter: (params) => {
      return `${JSON.stringify(params)}`;
    },
  },
];

const CustomNoResultsOverlay = () => {
  return <p className='h-full flex justify-center items-center text-secondary'>No rows or Click on another Event to load data.</p>
}
