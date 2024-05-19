import BlogSinglePage from '@Components/Blog/BlogsinglePage'

import React, { Fragment } from 'react';

export async function generateMetadata({ params }, parent) {
    const id = params.id;
  
  try {
    const response = await fetch(`https://jeevananthamdev.netlify.app/api/blog/getsingleblog/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product data');
    }
    const blog = await response.json();

    const parentMetadata = await parent;
    const previousImages = parentMetadata.openGraph?.images || [];
    return {
      title: blog.title || 'Jeevanantham',
      description: blog.description || 'Jeevanantham Portfolio', 
      openGraph: {
        title: blog.title || 'Jeevanantham',
        description: blog.description || 'Jeevanantham Portfolio',
        images: [blog.coverimage, ...previousImages],
        url: `https://jeevananthamdev.netlify.app/blog/${id}`, 
        type: 'article',
      },
      
    };
  } catch (error) {    
    return {
      title: 'Jeevanantham S Portfolio',
      description: 'Jeevanantham Digital Portfolio',
      openGraph: {
        title: 'Jeevanantham S Portfolio',
        description: 'Jeevanantham Digital Portfolio',
        images: ['https://rabtoise.org/assets/work.webp'],
        type: 'article',
      },
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