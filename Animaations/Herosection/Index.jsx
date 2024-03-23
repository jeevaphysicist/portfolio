"use client"
import { Fragment } from "react";
import Herosection from "./Herosection";
import { motion } from "framer-motion";
import BaseText from "./BaseText";
import Header from "../../Components/Header/Header";



const Index = () => {
    // const images = [
    //     "https://firebasestorage.googleapis.com/v0/b/jeevanthamportfolio.appspot.com/o/programming-background-with-person-working-with-codes-computer.webp?alt=media&token=dc8f71a1-0b96-4cce-90cf-cc612dc0f905",
    //     "https://firebasestorage.googleapis.com/v0/b/jeevanthamportfolio.appspot.com/o/Ondev%20Apps%20(1).webp?alt=media&token=c3e127b3-c344-42bc-b921-c3e4199d41c3",
    //     "https://firebasestorage.googleapis.com/v0/b/jeevanthamportfolio.appspot.com/o/social-media-marketing-concept-marketing-with-applications.webp?alt=media&token=060a3b6e-78c9-41a9-a04c-61e0ed6bcc4a",
    //   ];
      const images = [
        "/assets/coverimage.png",
        "/assets/coverimage2.png",
        "/assets/coverimage3.png",
      ];


  return (
    <Fragment>
    <div className=" h-[40rem]">
       <Herosection className="h-[40rem]" images={images}>
      

      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
       <BaseText/>
      </motion.div>
    </Herosection>
    </div>
   </Fragment>
  )
}

export default Index