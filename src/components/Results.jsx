import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { results } from '../constants';
import { cn } from "../lib/utils";
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import scrollToTop from '../utils/scrollToTop';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import confetti from 'canvas-confetti';

const Results = () => {
	const [activeResult, setActiveResult] = useState('impetus');
	const navigate = useNavigate();
	const { event_name } = useParams();

	useEffect(() => {     
    scrollToTop();     
    setActiveResult(event_name);
  }, [event_name]);

  useEffect(() => {
    const burst = (originX, originY) => {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { x: originX, y: originY },
        colors: ["#ff4500", "#ffcc00", "#0000FF"],
      });
    };

    const timeoutRef = setTimeout(() => {         
      burst(0, 0.5);       
      burst(1, 0.5);       
      burst(0.5, 0.2);       
      burst(0.5, 0.8);     
    }, 700);    

    return () => clearTimeout(timeoutRef);
  }, []);


	const words = [
		{
			text: "Winners ",
		},
		{
			text: "of ",
		},
		{
			text: "InC ",
		},
		{
			text: "2025. ",
		},
	];

	return (
		(event_name === 'impetus' || event_name === 'concepts' || event_name === 'pradnya') ?
		<section className="py-24 relative bg-primary w-full flex flex-col items-center">
			
			<motion.div
				initial={{ y: 100, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ ease: "easeInOut", duration: 0.75 }}
			>
				<h2 className={`${styles.sectionHeadText} flex flex-col sm:-space-y-2 text-white-100 pb-4 px-2 items-center`}>
					<span className='sm:text-[50px] xs:text-[40px] text-[25px] sm:hidden'>
						Winners of InC 2025.
					</span>
					<TypewriterEffectSmooth words={words} className={'max-sm:hidden'} />
				</h2>
			</motion.div>



			<div className="flex max-sm:flex-wrap max-sm:justify-center items-center gap-4 sm:gap-8 mt-4 mb-14 w-full bg-primary">
				<span className='bg-gradient-to-l from-dark-blue via-light-blue to-orange-100 w-full h-1'></span>
				{Object.keys(results).map((result) => (
					<button
						key={result}
						onClick={() => navigate(`/results/${result}`)}
						className={`group/button relative inline-block p-px font-semibold leading-6 text-white-100 shadow-2xl cursor-pointer shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 z-10
							${activeResult === result ? 'bg-tertiary' : 'bg-gray-800'}`}
					>
						<span className="absolute inset-0 bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 p-[2px] opacity-0 transition-opacity duration-500 group-hover/button:opacity-100"></span>

						<span className="relative z-10 block px-6 py-2 bg-tertiary">
							<div className="relative z-10 flex items-center space-x-2">
								<span className="transition-all duration-500 group-hover/button:translate-x-1 tracking-wide">
									{result.toUpperCase()}
								</span>
								<svg
									className="w-6 h-6 transition-transform duration-500 group-hover/button:translate-x-1"
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
				))}
				<span className='bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 w-full h-1'></span>
			</div>

			<h3 className='text-3xl capitalize font-bold mb-16'>
				{activeResult}&nbsp; Winners
			</h3>

			<div className='w-full max-w-[90rem] max-sm:px-2'>
        {activeResult === 'impetus' && <DisplayResult data={results[activeResult]} />}
        {activeResult === 'concepts' && <DisplayResult data={results[activeResult]} />}
        {activeResult === 'pradnya' && <DisplayResult data={results[activeResult]} />}
			</div>
		</section>
		:
		<Navigate to={'/page-not-found'} />
	);
};

export default Results;

const DisplayResult = ({ data }) => {
	return (
		<div className='flex flex-col items-center w-full gap-[4rem]'>
			{data.map(domain => (
				<div className='flex flex-col items-center gap-10 bg-tertiary w-full p-px bg-gradient-to-r from-dark-blue via-light-blue to-orange-100' key={domain.dname}>
					<div className='bg-tertiary py-14 w-full relative'>
					<h3 className='font-semibold absolute left-[50%] translate-x-[-50%] -top-5 bg-black-100 border-[1px] border-white-100 px-4 py-1 text-xl text-center max-sm:hidden'>{domain.dname}</h3>
          <h3 className='font-semibold absolute left-[50%] translate-x-[-50%] -top-5 bg-black-100 border-[1px] border-white-100 w-[290px] px-4 py-1 text-xl text-center sm:hidden'>{domain.dname.lastIndexOf('(') > 0 ? domain.dname.slice(domain.dname.lastIndexOf('(')+1, domain.dname.lastIndexOf(')')) : domain.dname}</h3>
					<div className='flex flex-wrap w-full justify-center items-stretch gap-10'>
            {domain.values.map(m => (
                <BackgroundGradient key={m.team_id} className="sm:w-[350px] w-[290px] p-4 bg-black-100 flex flex-col items-center gap-2 h-full">
                  <p className='font-semibold text-secondary text-center'>{m.position}</p>
                  <div className='flex flex-col items-start w-full gap-2'>
                    <h4 className='text-xl text-white-100 flex justify-between w-full gap-4'><span className='font-bold text-nowrap'>{m.team_id}</span><span className='text-sm text-secondary break-all'>{m.institute}</span></h4>
                    <p className='font-semibold'>{m.title} </p>
                  </div>
                  <ul className='list-disc'>
                    {m.names.map((n, i) => <li className='text-sm' key={i}>{n}</li>)}
                  </ul>
                </BackgroundGradient>
            ))}
          </div>
					</div>
				</div>
			))}
		</div>
	)
}

const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
  };
  
  return (
    <div className={cn("relative p-[1px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "200% 200%" : undefined,
        }}
        className={cn(
          "absolute inset-0 z-[1] opacity-30 group-hover:opacity-100 blur-md transition duration-500",
          "bg-[linear-gradient(90deg,#1746A2,#5F9DF7,#d4621c,#5F9DF7,#1746A2)]"
        )}
      />
      
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "200% 200%" : undefined,
        }}
        className={cn(
          "absolute inset-0 z-[1]",
          "bg-[linear-gradient(90deg,#1746A2,#5F9DF7,#d4621c,#5F9DF7,#1746A2)]"
        )}
      />
      
      <div className={cn("relative z-10", className)}>
        {children}
      </div>
    </div>
  );
};
