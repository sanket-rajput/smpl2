import { useEffect } from 'react'
import { useGetJudgeQuery } from '../../app/services/judgeAPI'
import { logo } from '../../assets'
import { useNavigate } from 'react-router-dom'

const JudgeDashboard = () => {
  const judge_data = JSON.parse(window.sessionStorage.getItem("judge_data"))
  const { data, isSuccess } = useGetJudgeQuery(judge_data.jid);
  
  useEffect(() => {

  }, [isSuccess, data])

  return (
    <section className='max-w-7xl mx-auto pt-5'>
      <div className='bg-gradient-to-br p-px max-sm:mx-2 from-dark-blue via-light-blue to-orange-100'>
        <JudgeWelcome judgeData={data} logo={logo} />
      </div>
    </section>
  )
}

export default JudgeDashboard

const JudgeWelcome = ({ judgeData, logo }) => {


  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center text-center p-4 sm:py-10 bg-tertiary shadow-lg">
      {/* Logo */}
      <div className='flex max-sm:flex-col items-center justify-between sm:w-[80%]'>
        <img src={logo} alt="InC Logo" className="w-40 mb-4" />
        
        {/* Welcome Message */}
        <h2 className="font-bold text-orange-100 mb-2 sm:flex flex-col items-start max-sm:text-2xl"><span className='text-2xl'>✨Welcome,</span> <span className='sm:text-[50px] font-extrabold'>{judgeData?.name}!</span></h2>
      </div>

      {/* Description */}
      <p className="text-lg sm:w-[80%] text-white-100 leading-relaxed text-justify">
        We extend our heartfelt gratitude for your presence as a judge in the
        <span className="font-semibold"> Impetus and Concepts (InC) 2026 </span> project competition.
        Your expertise and feedback play a pivotal role in recognizing and rewarding innovation on this esteemed platform. As a judge, your primary responsibility is to thoroughly assess project submissions based on predefined criteria
        and provide valuable feedback to participants.
        <br /><br />
        Kindly use the button below to navigate to your allocated projects. 🔍
      </p>
      
      {/* Navigation Button */}
      <div className='mt-6'>
        <button
          onClick={() => navigate(`/judge/evaluate`)}
          className={`group/button relative inline-block p-px font-semibold leading-6 text-white-100 shadow-2xl cursor-pointer shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 z-10 border-[1px] border-slate-700`}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 p-[2px] opacity-0 transition-opacity duration-500 group-hover/button:opacity-100"></span>

          <span className="relative z-10 block px-6 py-2 bg-black-100">
            <div className="relative z-10 flex items-center space-x-2">
              <span className="transition-all duration-500 group-hover/button:translate-x-1 tracking-wide">
                {'View Allocated Projects'}
              </span>
            </div>
          </span>
        </button>
      </div>
    </div>
  );
};
