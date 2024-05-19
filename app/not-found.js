// app/404.js

import React, { Fragment } from 'react';
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer';

const Custom404 = () => {
  return (
    <Fragment>
    <Header bgcolor="bg-[black]  "/>
    <div className="flex items-center justify-center w-[100%] h-[60vh] text-[23px] font-bold">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for does not exist.</p>
      {/* You can add more content or styling as needed */}
    </div>
    <Footer/>
    </Fragment>
  );
};

export default Custom404;
