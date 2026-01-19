import { useEffect, useState } from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {useGetResultFromTableNameQuery, } from '../../app/services/judgeAPI';
import Loader from '../ui/Loader';
import { Label } from '../ui/label';
import { Select } from '../ui/select';
import { useSelector } from 'react-redux';
import { IconKeyOff } from '@tabler/icons-react';

const AdminResults = () => {
  const { table_name } = useParams();
  const isAuthenticated = useSelector(state => state.auth.roles).includes('WEB_MASTER');
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const { data, isFetching, isSuccess, isError, error} = useGetResultFromTableNameQuery(table_name);
  const navigate = useNavigate();

  const getColObject = (columnName) => {
    return { 
      field: columnName, 
      headerName: columnName?.toUpperCase()|| 'No Header', 
      minWidth: 100, 
      flex: 1 
    };
  }

  useEffect(() => {
    if(isSuccess && isAuthenticated){
      if(data[0]){
        const columnNames = Object.keys(data[0]);
        setColumns(columnNames.map(columnName => getColObject(columnName)));
        const temprows = data.map((item, index) => ({id: index, ...item}));
        setRows(temprows);
      }
    }
    else if(isError){
      console.error(error);
      toast.error(error?.data?.message || error?.message || 'Failed to fetch.');
    }
  }, [isSuccess, data, isError, error])

  return (
    isAuthenticated ? 
    <section className='w-full max-w-7xl mx-auto flex flex-col gap-6'>
      <div className='flex justify-between items-end pt-10'>
      <h2 className='font-bold text-3xl'>Showing Result - <span className='text-slate-400'>{table_name}</span></h2>
      <form className='flex flex-col'>
          <Label htmlFor="result_type">Result Type</Label>
          <Select
            options={[
              { "value": "", "label": "Select Option" },
              { "value": "imp_project_score", "label": "Impetus Project Score" },
              { "value": "imp_percentile_project_to_judge", "label": "Impetus Percentile Project To Judge" },
              { "value": "judges_max_per_para_concepts", "label": "Judges Max Per Para Concepts" },
              { "value": "judges_max_per_para_impetus", "label": "Judges Max Per Para Impetus" },
              { "value": "percentile_project_to_judge", "label": "Percentile Project To Judge" },
              { "value": "project_score", "label": "Concepts Project Score" }
            ]}
            value={table_name}
            onChange={(e) => {navigate(`/admin/results/${e.target.value}`)}}
            id="result_type"
            name="result_type"
          />
      </form>
      </div>
      {isFetching ? <div className='w-full flex justify-center my-8'><Loader size={100}/></div> : 
      <div style={{ height: '500px', width: '100%' }}>
        <DataGrid rows={rows} columns={columns} slots={{ toolbar: GridToolbar, noRowsOverlay: CustomNoResultsOverlay }} initialState={{pagination: { paginationModel: { pageSize: 25 }}}} pageSizeOptions={[25, 50, 100, { value: -1, label: 'All' }]} disableRowSelectionOnClick />
      </div>
      }
    </section>
    :
    <div className="bg-tertiary max-w-7xl mx-auto p-6 border flex flex-col gap-4 my-24 items-center border-blue-500/30">
      <IconKeyOff color="#e31b40" size={80}/>
      <h3 className="text-xl font-bold text-center text-red-500">
        Not Authorized to Access this Page <br />
      </h3>
    </div>
  )
}

export default AdminResults;

const CustomNoResultsOverlay = () => {
  return <p className='h-full flex justify-center items-center text-secondary'>No rows or Click on another Event to load data.</p>
}
