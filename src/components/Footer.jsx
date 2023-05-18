import React from "react";
import brand1 from "../assets/Images/brand1.png";
import brand2 from "../assets/Images/brand2.png";
import brand3 from "../assets/Images/brand3.png";
import brand4 from "../assets/Images/brand4.png";
import brand5 from "../assets/Images/brand5.png";
import HeroImg from "./HeroImg";
const imageSrc = [brand1, brand2, brand3, brand4, brand5];
function Footer() {
  return (
    <footer className="w-full pt-[80px]">
        <div  className="flex w-full justify-between px-[80px] mt-[12]">
        {imageSrc.map((src, id) => (
        <HeroImg src={src} key={id} style={"h-[35px]"} />
      ))}
        </div>
     
    </footer>
  );
}

export default Footer;
