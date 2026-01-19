import { useNavigate } from 'react-router-dom'
import { logo } from '../assets'
import { IconCopyright, IconMinusVertical } from '@tabler/icons-react'


const Footer = () => {

  const navigate = useNavigate();

  return (
    <footer className='sm:p-10 pt-10 p-6 w-full bg-tertiary'>
      <div className='w-full max-w-7xl mx-auto items-start flex max-sm:flex-col justify-between pb-10 border-b-2 border-slate-800 max-sm:gap-10'>
        <div className='sm:flex-[0.5]'>
          <h5 className='text-lg font-semibold'>Address</h5>
          <p className='text-sm'>Pune Institute of Computer Technology, Sr. No 27, Near Trimurti Chowk, Dhankawadi, Pune, Maharashtra, 411043.</p>
        </div>
        <div>
          <h5 className='text-lg font-semibold'>Email</h5>
          <a href='mailto:inc@pict.edu' className='text-sm'>inc@pict.edu</a>
        </div>
        <div className='flex items-center gap-1 cursor-pointer' onClick={() => navigate('/')}>
          <img loading='lazy'  src={logo} alt="inc-logo" className='h-[70px] w-[70px]'/>
          <p className='text-slate-400 max-sm:text-sm flex flex-col'><span className='text-xl block text-white-100'>InC</span><span className='block'>Impetus and Concepts</span></p>
        </div>
      </div>
      <div className='w-full max-w-7xl mx-auto flex max-sm:flex-wrap text-slate-600 text-sm items-center sm:pt-10 pt-6 justify-center'>
        <IconCopyright />&nbsp;PICT InC 2026 All Rights Reserved&nbsp;<IconMinusVertical />&nbsp;Made by InC WEB TEAM
      </div>
    </footer>
  )
}

export default Footer