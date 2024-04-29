import React, { Fragment } from 'react'
import Header from "../../Components/Header/Header"
import About from '@Components/About/About'
import Works from '@Components/MiniComponents/Works'
import Contact from '@Components/MiniComponents/Contact'
import Footer from '@Components/Footer/Footer'
import Head from 'next/head'

export const metadata = {
  title: "About | Jeevanantham S",
  description: "Jeevanantham Digital Profile",
};

const page = () => {
  return (
    <Fragment>
        <Head>
          <title>{metadata.title}</title>
           <meta name="description" content={metadata.description} />
       </Head>
        <Header bgcolor="bg-[black] "/>
        <About/>
        
        <Works/>
        <Footer/>
    </Fragment>
  )
}

export default page