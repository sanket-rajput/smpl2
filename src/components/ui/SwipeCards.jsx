import React from "react";
import { motion } from "framer-motion";
import move from "lodash-move";

import { events } from "../../constants";
import { useNavigate } from "react-router-dom";

const CARD_OFFSET = 20;
const SCALE_FACTOR = 0.06;
const size = events.length

function dateToWords(dateStr) {
  const [day, month, year] = dateStr.split('-');
  const date = new Date(`${year}-${month}-${day}`);

  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

const CardStack = () => {

  const navigate = useNavigate()

  const [cards, setCards] = React.useState(events);
  const moveToEnd = (from) => {
    setCards(move(cards, from, cards.length - 1));
  };

	const handleViewDetails = (id) => {
    // console.log(id)
    if(id === "techfiesta"){
      window.open('https://techfiesta.pict.edu/', '_blank');
    }
    else{
      navigate(`/events/${id}`);
    }
  };

  return (
    <div className="relative w-full h-[500px] flex flex-col items-center justify-center overflow-hidden">
      <ul className="relative h-[400px] w-[300px] right-[2.5%]">
        {cards.map((details, index) => {
          const canDrag = index === 0;
					// console.log(details)
          return (
            <motion.li
              key={`${details._id}_${details.title}`}
              style={{
                cursor: canDrag ? "grab" : "auto",
              }}
              animate={{
                left: index * CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: size - index,
              }}
              drag={canDrag ? "x" : false} 
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              onDragEnd={(e, info) => {
                if(Math.abs(info.offset.x) > 75){
                  moveToEnd(index)
                }
              }}
							className={`absolute w-[300px] h-[400px] origin-center list-none bg-gradient-to-br from-dark-blue via-light-blue to-orange-100 p-px`}
            >
							<div className="bg-primary h-full w-full flex flex-col px-3 py-2 overflow-hidden justify-center items-center">
							<img loading='lazy'  src={details.logo} alt={`${details.title} logo`} className="w-16 h-16 mb-4 rounded-full" />
							<h2 className="text-2xl font-bold text-white-100 mb-2">{details.title}</h2>
							<div className="flex flex-row space-x-2 mb-8">
								<p className="text-sm font-medium bg-tertiary rounded-lg px-2 py-1 text-slate-400">{details.type}</p>
								<p className="text-sm font-medium bg-tertiary rounded-lg px-2 py-1 text-slate-400">{details.team_size}</p>
							</div>
							<p className="text-white-100/90 text-md text-center mb-4">{details.description}</p>
							<span className={`text-sm font-medium mb-4 ${details.date.includes("Closed") ? 'text-red-500' : 'text-secondary'}`}>{dateToWords(details.date) === "Invalid Date" ? details.date : dateToWords(details.date)}</span>

							<button
								className="relative group inline-block p-px font-semibold leading-6 text-white-100 bg-tertiary shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
								onClick={() => handleViewDetails(details._id)}
							>
								<span className="absolute inset-0 bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

								<span className="relative z-10 block px-4 py-2 bg-gray-950">
									<div className="relative z-10 flex items-center space-x-2">
										<span className="transition-all duration-500 group-hover:translate-x-1">View Details</span>
										<svg
											className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
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
						</motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardStack;

/*
const wrapperStyle = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
	padding: '1px',
};

const cardWrapStyle = {
  position: "relative",
  width: "220px",
  height: "350px",
};

const cardStyle = {
  position: "absolute",
  width: "300px",
  height: "400px",
  borderRadius: "8px",
  transformOrigin: "center center",
  listStyle: "none",
};
*/
