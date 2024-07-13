"use client";
import Image from "next/image";
import React from "react";
import { IoLogOutOutline } from "react-icons/io5";
import Carousel from "./Sliders/Carousel";
import { useStepContext } from "../stepsContext";
import {motion} from "framer-motion"
interface Sliders {
  item: string;
}
function Mur() {
  const mur = "/mur.svg";
  const img1 = "/img1.jpg";
  const img2 = "/img2.jpg";
  const img3 = "/img3.jpg";
  const img4 = "/img4.jpg";
  const img5 = "/img5.jpg";
  const img6 = "/img6.jpg";
  const img7 = "/img7.jpg";

  const slides: Sliders[] = [
    { item: img1 },
    { item: img2 },
    { item: img3 },
    { item: img4 },
    { item: img5 },
    { item: img6 },
    { item: img7 },
  ];
  const {setStep}=useStepContext();
  return (
    <motion.div
    variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.65, delay: 0.4 }}
    className="bg-white relative h-[100%]  w-full flex items-center   rounded-t-xl py-3  flex-col ">
      <div className="h-1 w-16 rounded-xl absolute top-1 bg-grey"></div>
      <div className=" flex flex-col gap-2 mt-3  ">
        <p className="text-black pl-3 font-bold max-sm:text-xs sm:text-xl">
          Format
        </p>
        <p className="text-black pl-3 max-sm:text-xs sm:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore fuga,
          quasi eveniet aspernatur quod, natus aut qui cumque iure error ipsa .
        </p>
        <div className="w-full">
          <Carousel slides={slides}/>
        </div>
        <form className="flex px-3 text-black max-sm:text-xs sm:text-xl  flex-col  w-full justify-between items-start gap-6">
          <button
            className="flex flex-row justify-center w-full
           text-black border border-orange  rounded-lg items-center gap-3 py-2 px-10 cursor-pointer"
          >
            <p>Voire sur votre mur</p>
            <Image height={30} width={30} src={mur} alt="image" />
          </button>
          <button
           onClick={()=>setStep(9)}
          className="flex flex-row justify-center w-full bg-orange text-white rounded-lg items-center gap-3 py-2 px-10 cursor-pointer">
            <p>Continuer</p>
            <IoLogOutOutline className="text-2xl" />
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Mur;
