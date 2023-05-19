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
    <footer className=" w-full  py-[2rem] mt-[100px] ">
      <div className="flex w-full gap-4 justify-between px-[80px] ">
        {imageSrc.map((src, id) => (
          // eslint-disable-next-line react/style-prop-object
          <HeroImg  src={src} key={id} style={ "h-fit" } />
        ))}
      </div>
    </footer>
  );
}

export default Footer;
