import { useEffect, useState } from 'react'
import FormButton from '../forms/FormButton'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate, useParams } from 'react-router-dom';
import ProjectDetailsModal from './modals/ProjectDetailsModal';
import TeamDetailsModal from './modals/TeamDetailsModal';
import CollegeDetailsModal from './modals/CollegeDetailsModal';
import { useGetIncompleteRegistrationsQuery, } from '../../app/services/adminAPI';
import { toast } from 'react-toastify';

const AdminIncomplete = () => {
  const { event_name } = useParams();
  const [rows, setRows] = useState([]);
  const { isFetching, isSuccess, data, error, isError } = useGetIncompleteRegistrationsQuery(event_name);
  const navigate = useNavigate();

  useEffect(() => {
    if(isSuccess){
      const tempRows = data.map((row, index) => ({
        id: index + 1,
        ticket: row?.ticket,
        projectDetails: row?.step_1,
        teamDetails: Array.isArray(row?.step_2) ? row?.step_2 : [],
        collegeDetails: row?.step_3,
        date: new Date(row?.date).toLocaleDateString('en-IN'),
      }))
      setRows(tempRows);
    }
    else if(isError){
      console.error(error);
      toast.error(error?.data?.message || error?.message || 'Failed to fetch.');
    }
  }, [isSuccess, data, error, isError])

  return (
    <section className='w-full max-w-7xl mx-auto flex flex-col gap-6'>
      <div className='flex items-center justify-center gap-4'>
        <FormButton className={`w-auto h-auto px-4 py-2`} text={`Impetus`} onClick={() => {navigate('/admin/incomplete-registrations/impetus')}}/>
        <FormButton className={`w-auto h-auto px-4 py-2`} text={`Concepts`} onClick={() => {navigate('/admin/incomplete-registrations/concepts')}}/>
        <FormButton className={`w-auto h-auto px-4 py-2`} text={`Pradnya`} onClick={() => {navigate('/admin/incomplete-registrations/pradnya')}}/>
      </div>
      <h2 className='font-bold text-3xl'>Incomplete {event_name[0].toUpperCase() + event_name.slice(1)} Registrations.</h2>
      <div style={{ height: '500px', width: '100%' }}>
        <DataGrid rows={rows} columns={columns} loading={isFetching} slots={{ toolbar: GridToolbar, noRowsOverlay: CustomNoResultsOverlay }} initialState={{pagination: { paginationModel: { pageSize: 25 }}}} pageSizeOptions={[25, 50, 100, { value: -1, label: 'All' }]} disableRowSelectionOnClick />
      </div>
    </section>
  )
}

export default AdminIncomplete

const columns = [
  { field: 'ticket', headerName: 'Ticket', minWidth: 150, flex: 1 },
  {
    field: 'date', 
    headerName: 'Date', 
    minWidth: 150,
    flex: 1 
  },
  { 
    field: 'projectDetails', 
    headerName: 'Project Details', 
    minWidth: 150, 
    flex: 1,
    sortable: false,
    renderCell: (params) => (
      <ProjectDetailsModal data={params?.row?.projectDetails} />
    ),
    valueGetter: (params) => {
      return `${JSON.stringify(params)}`;
    },
  },
  { 
    field: 'teamDetails', 
    headerName: 'Team Details', 
    minWidth: 150, 
    flex: 1,
    sortable: false,
    renderCell: (params) => (
      <TeamDetailsModal data={params?.row?.teamDetails} />
    ),
    valueGetter: (params) => {
      return `${JSON.stringify(params)}`;
    },
  },
  { 
    field: 'collegeDetails', 
    headerName: 'College Details', 
    minWidth: 150, 
    flex: 1,
    sortable: false,
    renderCell: (params) => (
      <CollegeDetailsModal data={params?.row?.collegeDetails} />
    ),
    valueGetter: (params) => {
      return `${JSON.stringify(params)}`;
    },
  },
];

const CustomNoResultsOverlay = () => {
  return <p className='h-full flex justify-center items-center text-secondary'>No rows or Click on another Event to load data.</p>
}