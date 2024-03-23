"use client"
import React, { Fragment , useEffect , useState } from 'react';
import Blog from "@Components/Blog/Index";
import Header from "../../Components/Header/Header";

const page = () => {
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
        <Header bgcolor="bg-[grey] border "/>
         <Blog blogs={blogs}/>
    </Fragment>
  )
}

export default page