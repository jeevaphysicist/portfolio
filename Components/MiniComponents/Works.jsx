"use client"

import React, { Fragment } from 'react';
import { InfiniteMovingCardsDemo }from "../../Animaations/InfiniteMovingCard/Index"

const Works = () => {
  let data = [{
             Title:"Relect Skin Clinic",
             Image:"https://firebasestorage.googleapis.com/v0/b/jeevanthamportfolio.appspot.com/o/Screenshot%202024-03-12%20133317.png?alt=media&token=3514200f-accf-4937-a88a-ab58a8dd565b",
             Link:"https://thereflectclinic.com/reflect",
             Type:"Business Website"
            },
            {
              Title:"TheHWorld",
              Image:"https://firebasestorage.googleapis.com/v0/b/jeevanthamportfolio.appspot.com/o/Screenshot%202024-03-12%20133444.png?alt=media&token=dd680be4-dd4f-4630-99b2-651b86a7098c",
              Link:"https://thehworld.in/",
              Type:"E-commerce"
             },
             {
              Title:"Rabto",
              Image:"https://firebasestorage.googleapis.com/v0/b/jeevanthamportfolio.appspot.com/o/Screenshot%202024-03-12%20133550.png?alt=media&token=94974e78-ef9a-4aa7-85ae-33cf7407f376",
              Link:"https://www.rabto.in/",
              Type:"SASS"
             },
            {
              Title:"Royal Furnitures",
              Image:"https://firebasestorage.googleapis.com/v0/b/jeevanthamportfolio.appspot.com/o/Screenshot%202024-03-12%20133359.png?alt=media&token=94d700d8-6015-44c3-8357-c9fc94dd0883",
              Link:"",
              Type:"Business Website"
             },             
             {
              Title:"Yanilanka",
              Image:"https://firebasestorage.googleapis.com/v0/b/jeevanthamportfolio.appspot.com/o/Screenshot%202024-03-12%20133519.png?alt=media&token=ba71ca82-6989-468c-aca5-65c122b9be95",
              Link:"",
              Type:"Inventory Management"
             },
             {
              Title:"Angadi",
              Image:"https://firebasestorage.googleapis.com/v0/b/jeevanthamportfolio.appspot.com/o/Screenshot%202024-03-12%20162951.png?alt=media&token=e39a8c4b-8b9f-4772-8fca-74e2f67d15b4",
              Link:"https://sairun.onrender.com/",
              Type:"Ecommerce "
             },
             {
              Title:"Thira",
              Image:"https://firebasestorage.googleapis.com/v0/b/jeevanthamportfolio.appspot.com/o/Screenshot%202024-03-12%20162907.png?alt=media&token=06066ee7-c62f-47a9-9275-9e28632a78bb",
              Link:"https://thira.onrender.com/",
              Type:"Content Creator Platform"
             },
             {
              Title:"Netflix Static Responsive Homepage",
              Image:"https://firebasestorage.googleapis.com/v0/b/jeevanthamportfolio.appspot.com/o/Screenshot%20(225).png?alt=media&token=1f6f7d19-4146-414b-8d5a-f35ccf6a266d",
              Link:"https://netflix.netlify.app/",
              Type:"Static Site - HTML/CSS, Boostrap"
             }
            ]
  return (
    <Fragment>
         <div className='py-10 lg:px-10'>
            <div className='flex items-center  justify-center w-[100%] text-[30px] lg:text-[50px] font-bold'>Projects</div>
            <div className='flex items-center  justify-center w-[100%] text-[18px] lg:text-[30px] font-medium text-[#1e1e1e]'>Innovating Tomorrow, One Project at a Time.</div>
            <InfiniteMovingCardsDemo data={data} />
         </div>
    </Fragment>
  )
}

export default Works