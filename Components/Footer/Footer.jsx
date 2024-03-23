import React from 'react'
import { CiMobile4 } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { ImLinkedin } from 'react-icons/im'
import { IoMailOpenOutline } from 'react-icons/io5'
import { TbAddressBook } from 'react-icons/tb'

const Footer = () => {
  return (
    <div className='px-5 md:px-10 lg:px-20 py-10 bg-[#EAEFF7]'>
    <div className='flex flex-col md:flex-row items-center justify-center gap-0 md:gap-10 w-[100%]'>
    <div className="flex items-center gap-3 font-semibold text-[#333333]">
  <a href="mailto:jeevaphysicist@gmail.com" className="flex items-center gap-3 rounded-[3px] px-3 py-2">
    <IoMailOpenOutline />
    jeevaphysicist@gmail.com
  </a>
</div>

<div className="flex items-center gap-3 font-semibold text-[#333333]">
  <a href="tel:+916385229170" className="flex items-center gap-3 rounded-[3px] px-3 py-2">
    <CiMobile4 />
    6385229170
  </a>
</div>

         <div className='flex  items-center gap-3 font-semibold text-[#333333]   '><span className='flex items-center gap-3 rounded-[3px] px-3 py-2 '> <TbAddressBook />Tiruchirappalli , Tamil Nadu , India</span></div>
                    
    </div>
    <div className='flex mt-5 gap-10 items-center justify-center w-[100%]'>
    <a href='https://www.linkedin.com/in/jeevanantham--s' target='_blank' className='flex items-center gap-3 font-semibold text-white rounded-[3px] px-3 py-2   bg-[#0077B5]'><ImLinkedin />LinkedIn</a>
     <a href='https://github.com/jeevaphysicist' target='_blank' className='flex items-center gap-3 font-semibold text-white rounded-[3px] px-3 py-2  bg-[#1e2327]'><FaGithub />Git Hub</a>
    </div>
    <div className="flex mt-10 gap-10 items-center justify-center w-full">
         &copy; Copyright reserved by Jeevanatham S
    </div>

    </div>
  )
}

export default Footer