import { useEffect, useState } from 'react'
import FormButton from '../forms/FormButton'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useGetRegistrationsCountQuery, } from '../../app/services/adminAPI';
import Loader from '../ui/Loader';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

ChartJS.register(ArcElement, Tooltip, Legend);

const AdminDashboard = () => {
  const [impetus, setImpetus] = useState(0);
  const [impetusPending, setImpetusPending] = useState(0);
  const [impetusIncomplete, setImpetusIncomplete] = useState(0);
  const [concepts, setConcepts] = useState(0);
  const [conceptsPending, setConceptsPending] = useState(0);
  const [conceptsIncomplete, setConceptsIncomplete] = useState(0);
  const [pradnya, setPradnya] = useState(0);
  const [pradnyaPending, setPradnyaPending] = useState(0);
  const [pradnyaIncomplete, setPradnyaIncomplete] = useState(0);
  const [totalRegs, setTotalRegs] = useState(0);

  const { data, isFetching, isSuccess, isError, error } = useGetRegistrationsCountQuery();

  useEffect(() => {
    if(isSuccess){
      setImpetus(data.impetus_verified);
      setImpetusPending(data.impetus_pending);
      setImpetusIncomplete(data.impetus_incomplete);
      setConcepts(data.concepts_verified);
      setConceptsPending(data.concepts_pending)
      setConceptsIncomplete(data.concepts_incomplete)
      setPradnya(data.pradnya_verified);
      setPradnyaPending(data.pradnya_pending)
      setPradnyaIncomplete(data.pradnya_incomplete)
      setTotalRegs(data.impetus_verified + data.impetus_pending + data.concepts_verified + data.concepts_pending + data.pradnya_verified + data.pradnya_pending)
    }
    else if(isError){
      console.error(error);
      toast.error(error?.data?.message || error?.message || 'Failed to fetch.');
    }
  }, [isSuccess, isError, error, data])

  return (
    <section className='w-full max-w-7xl mx-auto flex flex-col gap-8'>
      <div className='font-bold text-3xl'>Total Registrations: {totalRegs}</div>
      <div className='flex items-center justify-between'>
        <DashboardCard event_name={'Impetus'} verified={impetus} pending={impetusPending} incomplete={impetusIncomplete} isLoading={isFetching} />
        <DashboardCard event_name={'Concepts'} verified={concepts} pending={conceptsPending} incomplete={conceptsIncomplete} isLoading={isFetching} />
        <DashboardCard event_name={'Pradnya'} verified={pradnya} pending={pradnyaPending} incomplete={pradnyaIncomplete} isLoading={isFetching} />
      </div>
    </section>
  )
}

export default AdminDashboard

const DashboardCard = ({ event_name, verified, pending, incomplete, isLoading }) => {
  const navigate = useNavigate();

  const data = {
    labels: ["Verified", "Pending", "Incomplete"],
    datasets: [
      {
        data: [verified, pending, incomplete],
        backgroundColor: [
          '#4bf542',
          '#42ddf5',
          '#f5ec42',
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className='bg-tertiary border-secondary border-[1px] h-[450px] w-[400px] p-10 flex flex-col items-center justify-between'>
      <h3 className='font-bold text-2xl'>{event_name}</h3>
      {isLoading ? <Loader /> : 
      <div className='w-[300px] h-[250px]'>
        <Doughnut 
          data={data} 
          options={{ maintainAspectRatio: false, aspectRatio: 1 }}
        />
      </div>}
      <FormButton text={`Verify Now`} className={`w-auto h-auto px-4 py-2 hover:scale-105 duration-300 border-secondary`} onClick={() => navigate(`/admin/verify/${event_name.toLowerCase()}`)} />
    </div>
  )
}