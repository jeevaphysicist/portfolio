'use client'

import React, { Fragment, useEffect, useState } from 'react'
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import 'quill/dist/quill.bubble.css'
import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import Header from "@/Components/Header/Header"
import Footer from '@Components/Footer/Footer';
import SEO from '@Components/SEO/SEO'
const variants = ['h1', 'h3', 'body1', 'caption'];

const ReactQuill = dynamic(() => import('react-quill'), { // Dynamically import ReactQuill
  ssr: false, // Disable server-side rendering
});



function TypographyDemo(props) {
  const { loading = false } = props;

  return (
    <div>
      {variants.map((variant) => (
        <Typography component="div" key={variant} variant={variant}>
           <Skeleton /> 
        </Typography>
      ))}
    </div>
  );
}

TypographyDemo.propTypes = {
  loading: PropTypes.bool,
};


const BlogSinglePage = ({params  }) => {
    const [blog,setBlog] = useState('');
    const searchParams = useSearchParams()
 
    const blogid = params.id ;
    // console.log("Blogid",blogid);

  

    useEffect(()=>{
         GetBlogData()
    },[blogid]);

    const GetBlogData = async ()=>{
        let response = await fetch(`/api/blog/getsingleblog/${blogid}`);
        const data = await response.json();
        setBlog(data);
      
    }

   
  
    var formats = [
      "header", "height", "bold", "italic",
      "underline", "strike", "blockquote",
      "list", "color", "bullet", "indent",
      "link", "image", "align", "size","video","code-block","font","clean"
    ];

    const formatTime = (time)=>{
        const dateObject = new Date(time);
        const monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];
        
        // Extract the day, month, and year
        const day = dateObject.getUTCDate();
        const monthIndex = dateObject.getUTCMonth();
        const year = dateObject.getUTCFullYear();
        return `${day} ${monthNames[monthIndex]} ${year}`;
      }


  return (
   <Suspense>
    <SEO title={"something"}/>
    <Header bgcolor="bg-[black] "/>
    {
        blog ? 
        <div className='w-[100%] mt-[150px] px-5 flex flex-col items-center justify-center'>
        
        <div className='w-[100%] md:w-[700px] flex gap-5 flex-col mb-20 lg:w-[800px]'>
        <div className='flex items-center justify-start gap-5 w-[100%]'>
          <img src="/assets/image.png" className='h-[80px] w-[80px] rounded-full' alt="" />
          <div className='flex flex-col gap-3 items-center'>
            <span className='font-semibold text-[20px]'>Jeevanantham S <br/> <span className='font-medium text-[14px]'> {formatTime(blog?.createdAt)} </span></span>
          </div>
        </div>
        <h1 className='text-[30px] md:text-[50px] font-bold'>{blog.title}</h1>
        <img src={blog.coverimage} alt="coverimage..." />
        <ReactQuill
        value={blog.blogdata}
        readOnly={true}
        theme="bubble"
       
        formats={formats}
        modules={{ toolbar: false }}
        />
      </div>
        
      </div>
     
      :
      <div className='w-[100%] flex  flex-col items-center justify-center'>
      <Grid container xs={{width:"300px"}} spacing={4}>
        <Grid item xs></Grid>
      <Grid item xs>
        <TypographyDemo loading />
      </Grid>
      <Grid item xs>
        {/* <TypographyDemo /> */}
      </Grid>
    </Grid>
    <Grid container xs={{width:"300px"}} spacing={4}>
        <Grid item xs></Grid>
      <Grid item xs>
        <TypographyDemo loading />
      </Grid>
      <Grid item xs>
        {/* <TypographyDemo /> */}
      </Grid>
    </Grid>
    <Grid container xs={{width:"300px"}} spacing={4}>
        <Grid item xs></Grid>
      <Grid item xs>
        <TypographyDemo loading />
      </Grid>
      <Grid item xs>
        {/* <TypographyDemo /> */}
      </Grid>
    </Grid>
    </div>
    }
    <Footer/>
   </Suspense>
  )
}

export default BlogSinglePage