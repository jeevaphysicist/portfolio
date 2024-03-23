"use client"
import React, { Fragment } from 'react';
import { RiMapPin2Fill } from "react-icons/ri";

import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";

const Profile = () => {
  return (
   <Fragment>
       <div className='w-[100%] flex items-center justify-center  relative '>
         <div className='flex flex-col items-center justify-center  w-[100%] px-2 md:px-10  bg-[#EAEFF7]' style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
            <div className=' relative z-10 h-[150px] w-[150px] rounded-full -top-20' style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                <img src={`/assets/image.png`} alt="" className=' h-[150px] w-[150px] rounded-full object-cover  ' style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} />
            </div>
            <div className='flex items-center gap-5 justify-center flex-col  relative -top-[80px]'>
                <div className='text-[30px] text-[#444444] font-bold'>Jeevanantham S</div>
                <div className='text-[16px] font-medium text-center lg:px-40'>Experienced Full Stack Developer adeptly handles solo projects
independently. Proficient in diverse backend and frontend programming
tools, excels in all development phases, fosters team collaboration, and
demonstrates strong technical prowess and innovative problem-solving.
</div>
                <div className='text-[15px] font-normal text-center flex items-center justify-center gap-2'><RiMapPin2Fill className='text-[red]' /> Tiruchirappalli, Tamil Nadu, India</div>
                <div className='flex items-center justify-center gap-5 text-[30px] md:text-[30px]'>
                     <a href='https://www.linkedin.com/in/jeevanantham-s-4595b4251/' target='_blank'><ImLinkedin /></a>
                     <a href='https://github.com/jeevaphysicist' target='_blank'><FaGithub /></a>
            </div>
            </div>
            

         </div>
      </div>
   </Fragment>
  )
}

export default Profile