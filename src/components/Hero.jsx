/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from "react";
import main from "../assets/Images/main.png";
import hero1 from "../assets/Images/hero1.png";
import hero2 from "../assets/Images/hero2.png";
import hero3 from "../assets/Images/hero3.png";
import HeroImg from "./HeroImg";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
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
      setCount((count) => (count % 3) + 1);
    }, 3000); // update index three every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-[#fff] lg:px-[80px] sm:px-[2rem] px-[1rem] flex flex-col">
      <div className="gap-2 flex flex-col mt-12">
        <h2 className="text-[59px] ">Business banking With</h2>
        <div className="overflow-y-hidden lg:h-fit h-[15rem]">
          {
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[80px] text-transparent bg-clip-text bg-gradient-to-br font-bold inline-block from-[#A088FF] text-gradient-to-r "
            >
              {textData[count]}
            </motion.h1>
          }
        </div>

        <p className="text-[18px]">
          Thousands of entrepreneurs bank on Winden to start or grow their
          business. Open an account in under 3 minutes.
        </p>
        <button className="bg-primary w-fit text-white px-4 py-2 gap-3 text-xl">
          Get Started
          <AiOutlineArrowRight className="inline-block" />
        </button>
        <p>
          {" "}
          <small>Sign up today and earn up to $200. Conditions apply. **</small>
        </p>
      </div>
      <div className="relative bg-white flex-col gap-2 my-[2rem]  flex lg:my-[1rem] h-fit  w-full">
        <HeroImg style={"w-full "} src={main} />
        <article className="  relative flex  my-[1rem] justify-center items-center px-[4rem] w-full h-fit">
          <HeroImg style={" z-10  h-[40vw]  object-cover "} src={hero1} />
          <HeroImg
            style={
              " absolute  left-10 right-0 top-0 mx-auto  bottom-0 h-[40vw]   fit "
            }
            src={hero2}
          />
          <HeroImg
            style={" z-10 lg:-ml-[6rem] -ml-[0rem] h-[40vw]  object-cover "}
            src={hero3}
            className="grow"
          />
        </article>
      </div>
    </div>
  );
}

export default Hero;
