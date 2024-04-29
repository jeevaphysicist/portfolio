import { getSingleBlog } from '@API/Api';
import BlogSinglePage from '@Components/Blog/BlogsinglePage'

import SEO from '@Components/SEO/SEO';
import Head from 'next/head';
import React, { Fragment } from 'react';

export async function generateMetadata({ params }) {
  const blogId = params.id; 
  try {
     let data = await getSingleBlog(blogId);
     console.log("data",data);
    return {
      title: data.title, 
     
    };
  } catch (error) {
    console.error('Error fetching blog data:', error.message);
    // Handle error or return default metadata
    return {
      title: 'Default Title',
      // Add other default metadata properties
    };
  }
}



const page = ({params}) => {
    return (
   <Fragment>    
       <BlogSinglePage params={params}  />
   </Fragment>
  )
}
export default page