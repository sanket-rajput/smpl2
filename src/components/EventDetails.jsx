import { useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Tabs } from "./ui/tabs";

import { eventsData, ruleBookLinks } from '../constants';

import InfiniteLoopSlider from './ui/infinite-loop-slider';
import { IconCalendarFilled, IconCheckupList, IconCurrencyDollar, IconDiamondsFilled, IconDownload, IconFileDescription, IconTrophy, IconUserCheck, IconUserEdit, IconUsersGroup } from '@tabler/icons-react'
import { Accordion, AccordionHeader, AccordionItem, AccordionPanel } from './ui/accordian';
import scrollToTop from '../utils/scrollToTop'
import { cn } from '../lib/utils';

function TabsDemo() {

  const { id } = useParams()
  const divRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(800);

  useEffect(() => {
    scrollToTop()
  }, [id])

  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.height = "auto";
      setContainerHeight(divRef.current.scrollHeight + 300)
    }
  }, [id])

  const tabs = [
    {
      title: "Impetus",
      value: "impetus",
      content: (
        <div
          className={cn('w-full overflow-hidden relative p-px bg-tertiary', ``)}>
          <span className='absolute inset-0 bg-gradient-to-r from-dark-blue via-light-blue to-orange-100'></span>
          <EventDetails data={eventsData.impetus} />
        </div>
      ),
    },
    {
      title: "Concepts",
      value: "concepts",
      content: (
        <div
          className={cn('w-full overflow-hidden relative p-px bg-tertiary', ``)}>
          <span className='absolute inset-0 bg-gradient-to-r from-dark-blue via-light-blue to-orange-100'></span>
          <EventDetails data={eventsData.concepts}/>
        </div>
      ),
    },
    {
      title: "Pradnya",
      value: "pradnya",
      content: (
        <div
          ref={divRef}
          className={cn('w-full overflow-hidden relative p-px bg-tertiary', ``)}>
          <span className='absolute inset-0 bg-gradient-to-r from-dark-blue via-light-blue to-orange-100'></span>
          <EventDetails data={eventsData.pradnya}/>
        </div>
      ),
    },
  ];

  // Check if the requested event exists
  const isValidEvent = id && (id === 'impetus' || id === 'concepts' || id === 'pradnya');

  if (!isValidEvent) {
    return <Navigate to={'/page-not-found'} replace />;
  }

  return (
    <div
      ref={divRef}
      style={{
        minHeight: `${containerHeight}px`
      }}
      className={`pt-24 max-sm:px-2 max-w-[90rem] w-full mx-auto`}>
      <Tabs tabs={tabs} activeId={id}/>
    </div>
  );
}

export default TabsDemo; 

const EventDetails = ({ data }) => {
  const navigate = useNavigate()
  
  return (
    <div
    className='flex flex-col w-full justify-between items-center p-4 sm:p-8 gap-3 bg-tertiary relative'
    >
      <div className='flex flex-col sm:flex-row sm:justify-start items-center justify-center w-full border-b-[1px] max-sm:gap-3'>
        <div className='flex flex-col items-center sm:border-r-[1px] border-white-100 sm:w-[43%] sm:mr-10 gap-3'>
          <img loading='lazy'  src={data.logo} alt={`${data.id}_logo`} className='sm:w-[180px] sm:h-[180px] w-[140px] h-[140px] rounded-full'/>
          <h2 className='text-3xl font-bold text-orange-100'>{data.name}</h2>
          <p className='font-bold text-xl sm:max-w-[70%] text-center'>{data.short_desc}</p>
          <div className='flex w-full justify-center items-center gap-4 mb-2'>
            <p className='px-2 py-1 text-sm bg-slate-800 font-semibold rounded-md flex items-center gap-2'><IconCalendarFilled /> {data.schedule}</p>
            <p className='px-2 py-1 text-sm bg-slate-800 font-semibold rounded-md flex items-center gap-2'><IconUsersGroup /> {data.registrations.min_team_size}-{data.registrations.max_team_size} members</p>
          </div>
        </div>
        <div className={`sm:w-1/2 flex flex-col items-start ${data.id === 'pradnya' ? 'gap-2' : 'gap-3'}`}>
        <div className='flex flex-col gap-1 items-start'>
          <h3 className='font-semibold text-orange-100 text-xl flex items-center gap-2'><IconUserCheck /> Eligibility</h3>
          <ul className='list-disc list-inside space-y-2'>
            {data.criteria.split('#$').map(c => (
              <li key={c.slice(0, 10)} className='font-medium'>{c}</li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col items-start gap-1'>
          <h3 className='font-semibold text-orange-100 text-xl flex items-center gap-2'><IconCurrencyDollar /> Fees</h3>
          <ul className='flex sm:gap-8 gap-1'>
            <li className='bg-slate-800 text-green-400 font-semibold px-1 sm:px-2 py-1 rounded-md'>National: <span dangerouslySetInnerHTML={{__html: data.registrations.fees.national}}></span></li>
            <li className='bg-slate-800 text-green-400 font-semibold px-1 sm:px-2 py-1 rounded-md'>International: {data.registrations.fees.international}</li>
          </ul>
        </div>
        <h4 className='flex gap-2 text-xl text-yellow-400'><IconTrophy /> <span dangerouslySetInnerHTML={{__html: data.prize}}></span></h4>
          <div className='flex max-sm:w-full max-sm:justify-between sm:gap-7 mb-2'>
            <Button onClick={() => {navigate(`/register/${data.id}`)}}>
            <><IconUserEdit /> Register</>
            </Button>
            <Button onClick={() => {window.open(ruleBookLinks.get(data.id), "_blank")}}>
              <><IconDownload /> Rule Book</>
            </Button>
          </div>
        </div>
      </div>
      <div>
      </div>
      
      <div className='flex flex-col items-start justify-start gap-2'>
        <h3 className='font-semibold text-orange-100 text-xl flex items-center gap-2'><IconFileDescription /> About the Event</h3>
        <ul className='[&>*:first-child]:list-disc list-inside space-y-2'>
          <li key={data.description[0].slice(0, 19)}>{data.description[0]}</li>
        </ul>
      </div>

     {data.domains && <div className='flex flex-col items-start w-full overflow-hidden'>
        <h3 className='font-semibold text-orange-100 text-xl'>Domains</h3>
        <InfiniteLoopSlider
        duration={20000}
        >
          {
            data.domains?.map(domain => (
              <li key={domain} className='text-sm text-nowrap whitespace-nowrap flex-nowrap mr-2 w-fit bg-slate-800 px-2 py-1 rounded-md flex items-end gap-1 uppercase'><IconDiamondsFilled className='text-orange-100'/> {domain}</li>
            ))
          }
        </InfiniteLoopSlider>
      </div>}

      {data.rounds && <div className='flex flex-col items-start w-full gap-2'>
        <h3 className='font-semibold text-orange-100 text-xl'>Rounds</h3>
        <Accordion>
          {
            data.rounds?.map(round => (
            <AccordionItem key={round.name}>
              <AccordionHeader>{round.name}</AccordionHeader>
              <AccordionPanel>
                {round.details}
              </AccordionPanel>
            </AccordionItem>
            ))
          }
        </Accordion>
      </div>}

      {data.additional ? 
      <div className='flex flex-col items-start w-full gap-2'>
        <h3 className='font-semibold text-orange-100 text-xl flex items-center gap-2'><IconCheckupList /> Additional Details</h3>
        <Accordion>
          {
            data.additional?.map(add => (
            <AccordionItem key={add.domain}>
              <AccordionHeader>{add.domain}</AccordionHeader>
              <AccordionPanel>
              <ul className='list-inside list-disc'>
                {
                  add.details?.map(rule => (
                    <li className='' key={rule}>{rule}</li>
                  ))
                }
              </ul>
              </AccordionPanel>
            </AccordionItem>
            ))
          }
        </Accordion>
      </div>
      :
      <div className='flex flex-col items-start w-full gap-2'>
        <h3 className='font-semibold text-orange-100 text-xl flex items-center gap-2'><IconCheckupList /> Rules</h3>
        <ul className='list-inside list-disc'>
          {
            data.rules?.map(rule => (
              <li className='' key={rule}>{rule}</li>
            ))
          }
        </ul>
      </div>}
    </div>
  );
};


const Button = ({children, ...props}) => {
  return (
    <button {...props} className='bg-gradient-to-br from-dark-blue via-light-blue to-orange-100 p-px hover:scale-105 duration-300'>
      <span className='py-3 px-3 sm:px-6 sm:text-xl bg-black-100 flex gap-2 h-full'>{children}</span>
    </button>
  )
}