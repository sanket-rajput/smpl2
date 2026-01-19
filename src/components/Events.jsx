import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect.jsx";

import { events } from "../constants/index.js";

import { styles } from '../styles.js'
import SectionWrapper from "../hoc/SectionWrapper.jsx";
import MobileContext from "../hooks/MobileContext.js";
import SwipeCards from "./ui/SwipeCards.jsx";
import { cn } from "../lib/utils.js";

function dateToWords(dateStr) {
  const [day, month, year] = dateStr.split('-');
  const date = new Date(`${year}-${month}-${day}`);

  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function Events(){

  const isMobile = useContext(MobileContext);

  return (
    <>
    <div className='w-full flex flex-col items-center justify-evenly'>
      <div>
        <h2 className={`${styles.sectionHeadText}`}>Events.</h2>
      </div>
      {isMobile ? <SwipeCards events={events} /> : <EventCards />}
    </div>
    </>
  )
}

function EventCards() {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    if(id === 'techfiesta'){
      window.open('https://techfiesta.pict.edu', '_blank');
      return;
    }
    navigate(`/events/${id}`);
  };

  return (
    <div className="py-20 px-4 w-full max-w-[85rem] grid grid-cols-6 grid-rows-3 gap-1"
    >
      {events.map((event, index) => (
        <Card 
          key={event.id}
          index={index}
          title={event.title} 
          details={{
            id: event._id,
            logo: event.logo,
            description: event.description,
            team_size: event.team_size,
            type: event.type,
            date: event.date
          }}
          handleViewDetails={handleViewDetails}
          className={`
            ${index === 0 ? 'col-span-2 row-span-2 bg-dark-blue' : ''} 
            ${index === 1 ? 'col-span-2 row-span-2 bg-gradient-to-r from-dark-blue to-orange-100' : ''} 
            ${index === 2 ? 'col-span-2 row-span-2 bg-orange-100' : ''} 
            ${index === 3 ? 'col-start-1 col-end-4 bg-gradient-to-r from-dark-blue to-dark-blue/60 h-[13rem]' : ''} 
            ${index === 4 ? 'col-start-4 col-end-7 bg-gradient-to-r from-orange-100/60 to-orange-100 h-[13rem]' : ''}
          `}
        >
          <CanvasRevealEffect animationSpeed={5.0} containerClassName={event.color} />
        </Card>
      ))}
    </div>
  );
}

const Card = ({
  title,
  children,
  details,
  index,
  handleViewDetails,
  className
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    className={cn(`transition duration-300 group/canvas-card flex flex-col items-center justify-between mx-auto w-full p-px relative cursor-pointer`, className)}
    onClick={() => handleViewDetails(details.id)}
    >
      <AnimatePresence>
        {(hovered) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`h-full w-full flex flex-col items-center justify-center bg-primary p-6`}>
        <div className={`absolute group-hover/canvas-card:opacity-0 z-10 
        group-hover/canvas-card:translate-y-8 translate-y-0 opacity-100 transition-all duration-300 w-full h-full flex p-6 ${(index === 3 || index === 4) ? 'flex-row' : 'flex-col'}`}>
          <div className="w-full h-full flex flex-col justify-center items-center space-y-8">
            <img loading='lazy'  src={details.logo} alt={`${title} logo`} className="w-16 h-16 rounded-full" />
            <h2 className="text-2xl font-bold text-white-100">{title}</h2>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center space-y-6">
            <div className="flex flex-row space-x-2">
              <p className="text-sm font-medium bg-tertiary rounded-lg px-2 py-1 text-slate-400">{details.type}</p>
              <p className="text-sm font-medium bg-tertiary rounded-lg px-2 py-1 text-slate-400">{details.team_size}</p>
            </div>
            <p className="text-white-100/90 text-md text-center">{details.description}</p>
            <span className={`${details.date.includes("Closed") ? 'text-red-500' : 'text-secondary'} text-sm font-medium`}>{dateToWords(details.date) === "Invalid Date" ? details.date : dateToWords(details.date)}</span>
          </div>
        </div>
        
        <div className={`relative inset-0 w-full h-full flex justify-evenly items-center transition-opacity duration-300 ${
          (hovered) ? 'opacity-100' : 'opacity-0'
        } ${(index === 3 || index === 4) ? '' : 'flex-col'}`}>
          <img loading='lazy'  src={details.logo} alt={`${title} logo`} className="w-24 h-24 rounded-full" />
          <h2 className={`text-white-100 text-2xl font-bold`}>
            {title}
          </h2>
          <button
            className="relative inline-block p-px font-semibold leading-6 text-white-100 bg-tertiary shadow-2xl cursor-pointer shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 z-10"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 p-[2px] opacity-0 transition-opacity duration-500 group-hover/canvas-card:opacity-100"></span>

            <span className="relative z-10 block px-4 py-2 bg-gray-950">
              <div className="relative z-10 flex items-center space-x-2">
                <span className="transition-all duration-500 group-hover/canvas-card:translate-x-1">View Details</span>
                <svg
                  className="w-6 h-6 transition-transform duration-500 group-hover/canvas-card:translate-x-1"
                  data-slot="icon"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </span>
          </button>
          
        </div>
      </div>
    </motion.div>
  );
};


export default SectionWrapper(Events, 'events')