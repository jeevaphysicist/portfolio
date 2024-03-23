"use client"
import React, { Fragment } from 'react'
import Header  from '../Header/Header';
import Card from './Card';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
const variants = ['h1', 'h3', 'body1', 'caption'];
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




const Index = ({blogs}) => {
   

  return (
    <Fragment>
        <div className='mt-[120px]'>
            <div className='text-[30px] font-bold px-5 lg:px-10'>MY BLOGS</div>
            
            {blogs.length > 0 ?
              <div className='my-10 px-5 lg:px-10'>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
              blogs.length > 0 ? blogs.map(blog=><Card key={blog._id} blog={blog} />) 
              :
             null
    
            }

            
            
            </div>
            </div>
            :

            <div className='my-10 px-5 lg:px-10'>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            
                <div className='flex items-center justify-center w-[100%]'>
              <Grid container spacing={4}>
        
      <Grid item xs>
        <TypographyDemo loading />
      </Grid>
      
              </Grid>
              
              </div>
            
            
            </div>
            </div>

        
        
              
          }
          </div>
    </Fragment>
  )
}

export default Index