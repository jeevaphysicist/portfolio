import BlogSinglePage from '@Components/Blog/BlogsinglePage'

import SEO from '@Components/SEO/SEO';
import Head from 'next/head';
import React, { Fragment } from 'react';

export async function generateMetadata({ params }) {
  const blogId = params.id; 
  try {
    const response = await fetch(`https://jeevananthamdev.netlify.app/api/blog/getsingleblog/${blogId}`,{ method: "GET" })
    console.log(response)
    if (!response.ok) {
      throw new Error('Failed to fetch blog data');
    }
    const data = await response.json();
    console.log(data);
    return {
      title: data.title, // Assuming 'data' contains a 'title' field
      // Add other metadata properties as needed
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