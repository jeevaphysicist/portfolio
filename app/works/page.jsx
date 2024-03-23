import React, { Fragment } from 'react'
import Header from "../../Components/Header/Header"
import Works from '@Components/Work/work';
import Footer from '@Components/Footer/Footer';

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