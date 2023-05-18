/* eslint-disable react/style-prop-object */
import React, {useState} from "react";
import main from "../assets/Images/main.png";
import hero1 from "../assets/Images/hero1.png";
import hero2 from "../assets/Images/hero2.png";
import hero3 from "../assets/Images/hero3.png"
import HeroImg from "./HeroImg";
import { motion } from "framer-motion";
import {AiOutlineArrowRight} from "react-icons/ai"
function Hero() {
    const textData = ["Zero Fees", "Free Wires", "Unlimited Rewards", "No Credit Check"]
 const [count, setCount] = useState(0);
 setInterval(()=>{
    if (count === 3){
        setCount(0)
    }else{
        setCount(count+1)
    }

 }, 3000)

  return (
    <div className="text-[#fff] px-[80px]">
      <div className=" mt-12">
        <h2 className="text-[59px]">Business banking With</h2>
        <div className="overflow-y-hidden">
       {
<motion.h1 initial={ {y:100}} animate={{y:0}} transition={{duration : 0.5}} className="text-[80px] text-transparent bg-clip-text bg-gradient-to-br font-bold inline-block from-[#A088FF] text-gradient-to-r ">{textData[count]}</motion.h1>
       } 
        </div>
      
        <p className="text-[18px]">
          Thousands of entrepreneurs bank on Winden to start or grow their
          business. Open an account in under 3 minutes.
        </p>
        <button className="bg-primary text-white px-4 py-2 ">
          Get Started<AiOutlineArrowRight className="inline-block"/>
        </button>
        <p>
          {" "}
          <small>Sign up today and earn up to $200. Conditions apply. **</small>
        </p>
      </div>
      <div className="relative w-full">
        <HeroImg style={"absolute bottom-[-110vh] "}  src={main}/>
        <HeroImg style={"absolute left-[180px] bottom-[-160vh] h-[600px] object-cover w-[500px] "} src={hero1} />
        <HeroImg style={"absolute left-[390px] bottom-[-158vh] h-[600px]  w-[500px] "} src={hero2}/>
        <HeroImg style={"absolute left-[490px] bottom-[-158vh] h-[600px]  w-[500px] "} src={hero3}/>
      </div>
    </div>
  );
}

export default Hero;
