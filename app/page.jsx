import Image from "next/image";
import { Fragment } from "react";
import Homepage from "@Components/Home/Home"
import { Header } from "@Animaations/ScrollAnimation/ScrollAnimation";
import Footer from "@Components/Footer/Footer";

export default function Home() {
  return (
    <Fragment>    
        <Homepage/>
        <Footer/>
    </Fragment>   
  );
}
