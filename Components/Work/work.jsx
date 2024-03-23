import React, { Fragment } from 'react'
import { FaEye, FaGithub } from 'react-icons/fa'
import { ImLinkedin } from 'react-icons/im'

const Work = () => {

  let data = [{
    Title:"Relect Skin Clinic",
    Image:"https://firebasestorage.googleapis.com/v0/b/jeevanthamportfolio.appspot.com/o/Screenshot%202024-03-12%20133317.png?alt=media&token=3514200f-accf-4937-a88a-ab58a8dd565b",
    Link:"https://thereflectclinic.com/reflect",
    Git:"",
    Type:"Business Website",
    Description:"Reflect Skin Clinic website, built with React.js, Firebase, and Tailwind CSS, offers a sleek interface showcasing skincare treatments, blogs, and contact information. Engaging design, informative content, and seamless functionality provide users with a dynamic and trustworthy platform for exploring skincare solutions and contacting the clinic.",
    techStack:['Reactjs','Firebase',"Tailwind css",,"Git and GitHub"] 
  },
   {
     Title:"TheHWorld",
     Image:"https://firebasestorage.googleapis.com/v0/b/jeevanthamportfolio.appspot.com/o/Screenshot%202024-03-12%20133444.png?alt=media&token=dd680be4-dd4f-4630-99b2-651b86a7098c",
     Link:"https://thehworld.in/",
     Type:"E-commerce",
     Git:"",
     techStack:["Reactjs","css","Firebase","Nodejs","Expressjs","MongoDB","Netlify","Render","Git and GitHub"],
     Description:"TheH World is an innovative e-commerce platform designed with React.js, Node.js, Express.js, MongoDB, Firebase, and CSS. Featuring a dynamic homepage, intuitive shop page, personalized profile page, seamless cart management, and efficient order tracking system, it offers a comprehensive and user-friendly shopping experience. Explore products, manage orders, and track shipments effortlessly on this cutting-edge platform."
    },
    {
     Title:"Rabto",
     Image:"https://firebasestorage.googleapis.com/v0/b/jeevanthamportfolio.appspot.com/o/Screenshot%202024-03-12%20133550.png?alt=media&token=94974e78-ef9a-4aa7-85ae-33cf7407f376",
     Link:"https://www.rabto.in/",
     Type:"SASS",
     Git:"",
     techStack:["Reactjs","Tailwind css","Firebase","Nodejs","Expressjs","MongoDB","Netlify","Render","Git and GitHub"],
     Description:"Rabto is a dynamic e-profile sharing platform meticulously crafted using React.js, CSS, Tailwind CSS, Firebase, Node.js, Express.js, and MongoDB. With a sleek interface and robust backend architecture, Rabto offers users a versatile platform to share diverse profiles effortlessly. Whether showcasing portfolios, resumes, or creative works, Rabto provides a seamless and engaging experience. Explore the variety of profiles, connect with like-minded individuals, and unlock endless possibilities on Rabto."
    },
   {
     Title:"Royal Furnitures",
     Image:"https://firebasestorage.googleapis.com/v0/b/jeevanthamportfolio.appspot.com/o/Screenshot%202024-03-12%20133359.png?alt=media&token=94d700d8-6015-44c3-8357-c9fc94dd0883",
     Link:"",
     Git:"",
     Type:"Business Website",
     techStack:["Reactjs","Tailwind css","Firebase","Nodejs","Expressjs","MongoDB","Netlify","Render","Git and GitHub"],
     Description:"Royal Furniture is a sophisticated furniture showroom website, meticulously crafted with React.js, Node.js, MongoDB, Express.js, Firebase, and Tailwind CSS. This showcase website offers a seamless user experience with its dynamic homepage, informative blogs, versatile module pages, interactive contact page, and detailed showroom information. With full functionality seamlessly integrated, Royal Furniture provides a comprehensive platform for users to explore, connect, and engage with the brand effortlessly."
    },             
    {
     Title:"Yanilanka",
     Image:"https://firebasestorage.googleapis.com/v0/b/jeevanthamportfolio.appspot.com/o/Screenshot%202024-03-12%20133519.png?alt=media&token=ba71ca82-6989-468c-aca5-65c122b9be95",
     Link:"",
     Git:"",
     Type:"Inventory Management",
     techStack:["Reactjs","Tailwind css","Firebase","Nodejs","Expressjs","MongoDB","Netlify","Render","Git and GitHub"],
     Description:"Yanilanka is a robust inventory management software, meticulously crafted with React.js, Tailwind CSS, Node.js, MongoDB, Express.js, and various npm packages. Seamlessly integrating modern technologies, Yanilanka offers comprehensive inventory management solutions with intuitive user interfaces, efficient data handling, and seamless communication between frontend and backend systems. Empowering businesses to streamline inventory processes, track stock levels, manage orders, and optimize operations, Yanilanka sets a new standard in inventory management software"
    },
    {
     Title:"Angadi",
     Image:"https://firebasestorage.googleapis.com/v0/b/jeevanthamportfolio.appspot.com/o/Screenshot%202024-03-12%20162951.png?alt=media&token=e39a8c4b-8b9f-4772-8fca-74e2f67d15b4",
     Link:"https://sairun.onrender.com/",
     Type:"Ecommerce ",
     Git:"",
     techStack:["Reactjs","CSS","Bootstrap","Nodejs","Expressjs","MongoDB","Render","Git and GitHub"],

     Description:"Angadi is an e-commerce platform where sellers can list and sell their products. While it may not be a widely recognized term, it likely refers to an online marketplace that enables individuals or businesses to showcase and sell their products to a broader audience."
    },
    {
     Title:"Thira",
     Image:"https://firebasestorage.googleapis.com/v0/b/jeevanthamportfolio.appspot.com/o/Screenshot%202024-03-12%20162907.png?alt=media&token=06066ee7-c62f-47a9-9275-9e28632a78bb",
     Link:"https://thira.onrender.com/",
     Type:"Content Creator Platform",
     Git:"",
     techStack:["Reactjs","Tailwind css","Firebase","Git and GitHub"],
     Description:"Thira is a dynamic content sharing platform built with React.js, Firebase, and Tailwind CSS. With its intuitive interface and robust backend infrastructure, Thira empowers users to share and discover a wide range of content effortlessly. Whether it's articles, images, videos, or discussions, Thira provides a seamless platform for creators and consumers alike to engage with diverse content. Explore, share, and connect with the community on Thira, where creativity knows no bounds."
    },
    {
     Title:"Netflix Static Responsive Homepage",
     Image:"https://firebasestorage.googleapis.com/v0/b/jeevanthamportfolio.appspot.com/o/Screenshot%20(225).png?alt=media&token=1f6f7d19-4146-414b-8d5a-f35ccf6a266d",
     Link:"https://netflix.netlify.app/",
     Type:"Static Site - HTML/CSS, Boostrap",
     Git:"https://github.com/jeevaphysicist/netflix1",
     techStack:["HTML","CSS","Bootstrap","Git and GitHub"],
     Description:"This project is a static homepage replica of Netflix, built using HTML, CSS, and Bootstrap. It showcases my introductory web development skills, emphasizing static responsiveness for various screen sizes. The homepage design mimics Netflix's layout, featuring a responsive navigation bar, hero section with movie thumbnails, and sections for trending movies and TV shows. Through this project, I honed my HTML/CSS skills, learned to utilize Bootstrap for responsive design, and gained a foundational understanding of web development principles."
    }
   ]


  return (
   <Fragment>
        <div className='mt-[150px] px-5 pb-20 md:px-10 lg:px-20'>
           <div className='flex item-center justify-start mb-5 text-[20px] lg:text-[48px] font-bold'>Live Projects</div>
           <div className='flex items-center flex-col justify-center w-[100%] gap-10 '>
             {
              data.map(item=>
              <div className='flex flex-col lg:flex-row items-center p-5 md:p-10 xl:p-20 justify-center w-auto gap-5 border shadow-lg '>
                  <div className='w-[100%] lg:w-[100%] xl:w-[500px]'>
                    <img src={item.Image} alt="" className='w-100%] lg:w-[100%] xl:w-[500px]' />
                  </div>
                  <div className='flex flex-col gap-5'>
                    <h3 className="text-[30px] lg:text-[48px]  font-extrabold">{item.Title}</h3>
                    <div>{item.Description}</div>
                    <div className='flex flex-wrap items-center justify-start gap-3'>
                      {
                        item.techStack.map(tech=>
                       <div className='bg-black text-white p-2 rounded-[3px]'>{tech}</div>
                       )
                      }

                    </div>
                    <div className='flex mt-3 items-center justify-start gap-5 text-[18px]'>
                     {item.Link ?<a href={item.Link} target='_blank' className='flex items-center gap-3 font-semibold text-white rounded-[3px] px-3 py-2  bg-[#66cdaa]'><FaEye />Live Demo</a> : null }
                     {item.Git ? <a href='https://github.com/jeevaphysicist' target='_blank' className='flex items-center gap-3 font-semibold text-white rounded-[3px] px-3 py-2  bg-[#1e2327]'><FaGithub />Git Hub</a> : null }
            </div>
                  </div>
                  
              </div>)
             }
             
           
           </div>
        </div>
   </Fragment>
  )
}

export default Work