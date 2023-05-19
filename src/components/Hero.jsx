/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from "react";
import main from "../assets/Images/main.png";
import hero1 from "../assets/Images/hero1.png";
import hero2 from "../assets/Images/hero2.png";
import hero3 from "../assets/Images/hero3.png";
import beauty from "../assets/Images/beauty.png";
import HeroImg from "./HeroImg";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import Footer from "./Footer";
function Hero() {
  const textData = [
    "Zero Fees",
    "Free Wires",
    "Unlimited Rewards",
    "No Credit Check",
  ];
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count=== 3 ?  0 : (count % 3) + 1);
    }, 3000); // update index three every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-[#fff] lg:px-[80px] sm:px-[2rem] px-[1rem] flex flex-col">
      <div className="gap-2 flex flex-col mt-12">
        <h2 className="text-[30px] md:text-[59px]  text-transparent bg-clip-text bg-gradient-to-br font-bold inline-block from-[#b2beb5] to-[#fff] text-gradient-to-r  ">
          Business banking With
        </h2>
        <div className="overflow-y-hidden z-20 h-[100px]  ">
          <div>
            <motion.div initial={{y: 100}} animate={{y: -100* count}} transition={{duration: 0.5}} className="flex-col flex gap-0">
              {
                textData.map((text, id)=>(
                  <h1 key={id} className="text-[40px] h-[100px] leading-0 md:text-[80px] text-transparent bg-clip-text flex items-center bg-gradient-to-br font-bold  from-[#A088FF] to-[#37D7FF] text-gradient-to-t ">
                  {text}
                </h1>
                ))
               
              }
            </motion.div>
          </div>
        </div>
   
        <p className="text-[18px]    ">
          Thousands of entrepreneurs bank on Winden to start or grow their
          business. Open an account in under 3 minutes.
        </p>
        <button className="bg-primary w-fit text-white px-4 py-2 gap-3 text-xl">
          Get Started
          <AiOutlineArrowRight className="inline-block" />
        </button>
        <p className="mt-2">
          {" "}
          <small className="flex items-center gap-3">
            <img src={beauty} alt="some image" />
            Sign up today and earn up to $200. Conditions apply. **
          </small>
        </p>
      </div>
      <div className="relative bg-white flex-col gap-2 my-[2rem] flex lg:my-[1rem] h-fit  w-full">
        <HeroImg style={"w-full "} src={main} />
        <div className="">
          <article className="  relative flex  mb-[1rem] mt-[-3em] lg:mt-[-10em] justify-center items-center px-[4rem] w-full h-fit">
            <HeroImg style={"   h-[40vw]  object-cover "} src={hero1} />
            <HeroImg
              style={
                " absolute z-10 left-10 right-0 top-0 mx-auto  bottom-0 h-[40vw]   fit "
              }
              src={hero2}
            />
            <HeroImg
              style={
                " z-40 sm:-ml-[7rem] xl:-ml-[10rem] ml-[1rem]   h-[40vw]  object-cover "
              }
              src={hero3}
            />
          </article>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Hero;
