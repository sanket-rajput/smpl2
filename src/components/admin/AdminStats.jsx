import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import FormButton from '../forms/FormButton';
import { useGetEvaluationStatsQuery } from '../../app/services/allocationAPI';
import { IconRefresh } from '@tabler/icons-react';
import { Button } from '@mui/material';

const AdminStats = () => {

  const { event_name } = useParams();

  const { data, refetch, isFetching: isLoadingStats, isSuccess, isError, error } = useGetEvaluationStatsQuery(event_name);
  const [stats, setStats] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if(isSuccess){
      setStats(data.map((team, index) => ({...team, id: index})));
    }
    else if(isError){
      console.error(error);
      toast.error(error?.data?.message || error?.message || "Failed to fetch stats.");
    }
  }, [isSuccess, data]);  

  return (
    <section className='max-w-[90rem] mx-auto flex flex-col gap-6'>

      <div className='flex items-center justify-center gap-4'>
        <FormButton className={`w-auto h-auto px-4 py-2`} text={`Impetus`} onClick={() => {navigate('/admin/stats/impetus')}}/>
        <FormButton className={`w-auto h-auto px-4 py-2`} text={`Concepts`} onClick={() => {navigate('/admin/stats/concepts')}}/>
      </div>
      
      <div className='flex items-center justify-between'>
        <h2 className='font-bold text-3xl'>Evaluation Stats - <span className='text-slate-400'>{event_name}</span></h2>
        <Button variant='outlined' sx={{borderRadius: 0, width: 'fit-content', '&.Mui-disabled': {color: 'rgba(255, 255, 255, 0.7)', borderColor: 'rgba(255, 255, 255, 0.7)',}}} onClick={() => {refetch()}} disabled={isLoadingStats}> <IconRefresh /> </Button> 
      </div>

      <div style={{ height: '500px', width: '100%' }}>
        <DataGrid rows={stats} columns={statColumns} loading={isLoadingStats} initialState={{pagination: { paginationModel: { pageSize: 25 }}}} pageSizeOptions={[25, 50, 100, { value: -1, label: 'All' }]} slots={{ toolbar: GridToolbar, noRowsOverlay: CustomNoResultsOverlay }} disableRowSelectionOnClick />
      </div>

    </section>
  )
}

export default AdminStats

const statColumns = [
  { field: 'pid', headerName: 'Team ID', minWidth: 150, flex: 1 },
  { 
    field: 'allocated', 
    headerName: 'Allocated Judges', 
    minWidth: 150, 
    flex: 1 
  },
  {
    field: 'evaluated', 
    headerName: 'Evaluated', 
    minWidth: 150,
    flex: 1 
  },
];

const CustomNoResultsOverlay = () => {
  return <p className='h-full flex justify-center items-center text-secondary'>No rows or Click on another Event to load data.</p>
}
