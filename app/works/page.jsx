import React, { Fragment } from 'react'
import Header from "../../Components/Header/Header"
import Works from '@Components/Work/work';
import Footer from '@Components/Footer/Footer';
import Head from 'next/head';

export const metadata = {
  title: "Works | Jeevanantham S",
  description: "Jeevanantham Digital Profile",
  openGraph: {
    images: 'https://firebasestorage.googleapis.com/v0/b/jeevanthamportfolio.appspot.com/o/Screenshot%202024-03-12%20133317.png?alt=media&token=3514200f-accf-4937-a88a-ab58a8dd565b',
  },
};

const page = () => {
     
  
  return (
    <Fragment>
     
    <Header bgcolor="bg-[black]  " />
      <Works/>
      <Footer/>
    </Fragment>
    
  )
}

export default page