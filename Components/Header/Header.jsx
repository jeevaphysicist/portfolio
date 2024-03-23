"use client"
import React, { Fragment, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CgMenuMotion } from 'react-icons/cg';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Index = ({bgcolor}) => {
  const [scrolled, setScrolled] = useState(false);
  const [bgColor, setBgColor] = useState(bgcolor ? bgcolor : "");
  const [scrolled100, setScrolled100] = useState(false);
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const pathname = usePathname();
  
  const currentPathname = pathname;
  const currenttab = currentPathname.replace(/\//g, '');
  console.log("current pathname" ,currenttab);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      setScrolled(currentScroll > lastScrollTop && currentScroll > 80); // Hide header when scrolling down and > 80px
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        const eightyPercentViewport = viewportHeight * 0.8;
  
        if (scrollPosition > eightyPercentViewport) {
          setScrolled100(true);
        } else {
          setScrolled100(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  const handleAside = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  return (
    <Fragment>
      <motion.div
        className={`fixed transition-all duration-500 ${scrolled ? 'top-[-100px]' : 'top-0 '} ${scrolled100 ? 'bg-[black]' : ' '} ${bgColor ? bgColor :''} px-5 rounded-b-[20px] lg:px-10 left-0 right-0  text-[50px] text-[white] w-full z-50`}
        initial={{ top: 0 }}
        animate={{ top: scrolled ? '-100px' : 0 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <img src={`/assets/logo.webp`} alt="logo" className="h-[100px]" />
          </div>
          <div className="flex items-center justify-center gap-5 text-[20px]">
          <Link href="/" className={`hidden md:block cursor-pointer px-4 py-2 ${currenttab === "" ? "text-[#333333] bg-white font-bold rounded-[7px] " : ""}`} >Home</Link>
            <Link href="/works" className={`hidden md:block cursor-pointer px-4 py-2 ${currenttab === "works" ? "text-[#333333] bg-white font-bold rounded-[7px] " : ""}`}>Works</Link>
            <Link href="/about" className={`hidden md:block cursor-pointer px-4 py-2 ${currenttab === "about" ? "text-[#333333] bg-white font-bold rounded-[7px] " : ""}`}>About</Link>
            {/* <Link href="/contact" className={`hidden md:block cursor-pointer px-4 py-2 ${currenttab === "contact" ? "text-[#333333] bg-white font-bold rounded-[7px] " : ""}`}>Contact</Link> */}
            <Link href="/blog" className={`hidden md:block cursor-pointer px-4 py-2 ${currenttab === "blog"? "text-[#333333] bg-white font-bold rounded-[7px] " : ""}`}>Blog</Link>
            <div className={`block md:hidden cursor-pointer px-4 py-2 `}><CgMenuMotion className='text-[35px]' onClick={handleAside} /></div>
          </div>
        </div>
      </motion.div>

      <div
        className={`fixed transition-all duration-500 ${
          isAsideOpen ? 'w-[100%]' : ''
        } opacity-30 z-50 top-0 bg-black bottom-0 right-0 text-[50px] text-[white]`}
        onClick={handleAside}
      ></div>

      <motion.div
        className={`fixed transition-all duration-500 ${
          isAsideOpen ? 'mr-0 rounded-l-[20px]' : '-mr-[300px]'
        } w-[250px] z-50 top-0 py-10 bg-[#5074af] bottom-0 right-0 text-[50px] text-[white]`}
      >
        <div className="flex items-center justify-start w-[100%] gap-10 flex-col text-[18px]">
            <Link href='/'><div className={` cursor-pointer px-4 py-2 ${currenttab === "" ? "text-[#5074af] bg-white font-bold rounded-[7px] " : ""}`} >Home</div></Link>
            <Link href='/works'><div className={` cursor-pointer px-4 py-2 ${currenttab === "works" ? "text-[#5074af] bg-white font-bold rounded-[7px] " : ""}`}>Works</div></Link>
            <Link href='/about'><div className={` cursor-pointer px-4 py-2 ${currenttab === "about" ? "text-[#5074af] bg-white font-bold rounded-[7px] " : ""}`}>About</div></Link>
            {/* <div className={` cursor-pointer px-4 py-2 ${false ? "text-[#5074af] bg-white font-bold rounded-[7px] " : ""}`}>Contact</div> */}
            <Link href='/blog'> <div className={` cursor-pointer px-4 py-2 ${currenttab === "blog" ? "text-[#5074af] bg-white font-bold rounded-[7px] " : ""}`}>Blog</div></Link>
        </div>
      </motion.div>
    </Fragment>
  );
};

export default Index;
