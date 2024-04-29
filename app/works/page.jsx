import React, { Fragment } from 'react'
import Header from "../../Components/Header/Header"
import Works from '@Components/Work/work';
import Footer from '@Components/Footer/Footer';
import Head from 'next/head';

export const metadata = {
  title: "Works | Jeevanantham S",
  description: "Jeevanantham Digital Profile",
};

const page = () => {
     <Head>
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />
    </Head>
  
  return (
    <Fragment>
     
    <Header bgcolor="bg-[black]  " />
      <Works/>
      <Footer/>
    </Fragment>
    
  )
}

export default page