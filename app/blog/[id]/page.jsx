import BlogSinglePage from '@Components/Blog/BlogsinglePage'

import React, { Fragment } from 'react';

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  
  try {
    // Fetch the product data
    const response = await fetch(`http://localhost:3000/api/blog/getsingleblog/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product data');
    }
    const product = await response.json();

    // Access and extend parent metadata
    const parentMetadata = await parent;
    const previousImages = parentMetadata.openGraph?.images || [];

    return {
      title: product.title || 'Jeevanantham',
      description: product.description || 'Jeevanantham Portfolio', // Assuming 'product' contains a 'description' field
      openGraph: {
        title: product.title || 'Jeevanantham',
        description: product.description || 'Jeevanantham Portfolio',
        images: ['/some-specific-page-image.jpg', ...previousImages],
        url: `https://yourwebsite.com/products/${id}`, // Assuming the URL structure
        type: 'article', // Adjust the type as needed
      },
      // Add other metadata properties as needed
    };
  } catch (error) {
    console.error('Error fetching product data:', error.message);
    return {
      title: 'Default Title',
      description: 'Default description',
      openGraph: {
        title: 'Default Title',
        description: 'Default description',
        images: ['/default-image.jpg'],
        url: 'https://yourwebsite.com/products/default',
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