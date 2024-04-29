"use client"
import React, { Fragment , useEffect , useState } from 'react';
import Blog from "@Components/Blog/Index";
import Header from "../Header/Header";
import Footer from '@Components/Footer/Footer';

const BlogPage = () => {
  const [blogs,setBlogs] = useState([]);

  useEffect(()=>{
    GetAllBlogs()
},[])

const GetAllBlogs = async ()=>{
let response = await fetch("/api/blog/new");
const data = await response.json();
setBlogs(data);
// console.log("data",data);
}
  return (
    <Fragment>
        <Header bgcolor="bg-black"/>
         <Blog blogs={blogs}/>
         <Footer/>
    </Fragment>
  )
}

export default BlogPage;