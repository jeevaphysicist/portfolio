import React, { Fragment } from 'react'
import Header from "../../Components/Header/Header"
import About from '@Components/About/About'
import Works from '@Components/MiniComponents/Works'
import Contact from '@Components/MiniComponents/Contact'
import Footer from '@Components/Footer/Footer'

const page = () => {
  return (
    <Fragment>
        <Header bgcolor="bg-[black] "/>
        <About/>
        
        <Works/>
        <Footer/>
    </Fragment>
  )
}

export default page