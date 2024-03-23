"use client"
import React, { Fragment } from 'react'
import Header  from '../Header/Header';
import Card from './Card';




const Index = ({blogs}) => {
   

  return (
    <Fragment>
        <div className='mt-[120px]'>
            <div className='text-[30px] font-bold px-5 lg:px-10'>MY BLOGS</div>
            <div className='my-10 px-5 lg:px-10'>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
              blogs.length > 0 && blogs.map(blog=><Card key={blog._id} blog={blog} />)
            }
            
            </div>
            </div>
        </div>
         
    </Fragment>
  )
}

export default Index