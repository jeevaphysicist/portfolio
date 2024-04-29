import BlogSinglePage from '@Components/Blog/BlogsinglePage'
import Head from 'next/head';
import React, { Fragment } from 'react'

export const metadata = {
  title: "Single Blogs | Jeevanantham S",
  description: "Jeevanantham Digital Profile",
};

const page = ({params}) => {
  
  return (
   <Fragment>
    <Head>
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />
    </Head>
       <BlogSinglePage params={params}  />
   </Fragment>
  )
}

export default page