import BlogPage from '@Components/Blog/BlogPage'
import Head from 'next/head';
import React, { Fragment } from 'react'

export const metadata = {
  title: "Blogs | Jeevanantham S",
  description: "Jeevanantham Digital Profile",
};

const page = () => {
  
  return (
    <Fragment>
      <Head>
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />
    </Head>
       <BlogPage/>
    </Fragment>
  )
}

export default page