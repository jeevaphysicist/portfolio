import Image from "next/image";
import { Fragment } from "react";
import Homepage from "@Components/Home/Home"
import { Header } from "@Animaations/ScrollAnimation/ScrollAnimation";
import Footer from "@Components/Footer/Footer";
import Head from "next/head";

export const metadata = {
  title: "Jeevanantham S",
  description: "Jeevanantham Digital Profile",
};

export default function Home() {
 
  return (
    <Fragment>    
      <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
     </Head>
        <Homepage/>
        <Footer/>
    </Fragment>   
  );
}
