import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { ImLinkedin } from 'react-icons/im'
import { IoMailOpenOutline } from "react-icons/io5";
import { TbAddressBook } from "react-icons/tb";
import { CiMobile4 } from "react-icons/ci";

const Contact = () => {
  return (
    <div className=' px-10'>
        <div className='flex  items-center w-[100%] justify-start text-[30px] font-semibold'>Contact</div>
        <div className='flex items-center flex-wrap gap-5'>
         <div className='flex mt-3 items-center gap-3 font-semibold text-white   '><span className='flex items-center gap-3 rounded-[3px] px-3 py-2 bg-[#ff5733]'> <IoMailOpenOutline />jeevaphysicist@gmail.com</span></div>
         <div className='flex mt-3 items-center gap-3 font-semibold text-white   '><span className='flex items-center gap-3 rounded-[3px] px-3 py-2 bg-[#007bff]'> <CiMobile4 />6385229170</span></div>
         <div className='flex mt-3 items-center gap-3 font-semibold text-white   '><span className='flex items-center gap-3 rounded-[3px] px-3 py-2 bg-[#28a745]'> <TbAddressBook />Tiruchirappalli , Tamil Nadu , India</span></div>
         

         <div className='flex mt-3 items-center justify-start gap-5 text-[18px]'>
                     <a href='https://www.linkedin.com/in/jeevanantham--s' target='_blank' className='flex items-center gap-3 font-semibold text-white rounded-[3px] px-3 py-2  bg-[#0077B5]'><ImLinkedin />LinkedIn</a>
                     <a href='https://github.com/jeevaphysicist' target='_blank' className='flex items-center gap-3 font-semibold text-white rounded-[3px] px-3 py-2  bg-[#1e2327]'><FaGithub />Git Hub</a>
            </div>
            </div>
          



    </div>
  )
}

export default Contact