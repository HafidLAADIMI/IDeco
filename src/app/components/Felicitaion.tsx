"use client"
import Image from "next/image";
import React from "react";
import {motion} from "framer-motion"
function Felicitaion() {
  const felicitaion = "/felicitation.svg";
  return (
    <motion.div
    variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.65, delay: 0.4 }}
    className="bg-white relative h-[100%]  w-full flex items-center justify-center  rounded-t-xl text-wrap text-ellipsis gap-3 flex-col px-3 py-2 ">
       <div className="h-1 w-16 rounded-xl absolute top-1 bg-grey"></div>
      <Image className="mt-5" height={150} width={150} alt="image" src={felicitaion} />
        <h2 className="text-black max-sm:text-xs sm:text-xl font-bold">FELECITATION </h2>
      <p className="text-black pl-2 max-sm:text-xs sm:text-xl ">
        Nous prendrons contact avec vous dans les plus brefs délais. Votre
        demande est importante pour nous, et nous nous efforçons de vous
        répondre rapidement. Soyez assuré que nous mettons tout en œuvre pour
        vous fournir un service efficace et personnalisé.
      </p>
      <button className="flex flex-row justify-center w-full border border-orange rounded-lg items-center max-sm:text-xs sm:text-xl gap-3 py-2 px-10 text-black cursor-pointer">
        <p>Partager</p>
      </button>
      <button className="flex flex-row justify-center w-full text-black rounded-lg items-center max-sm:text-xs sm:text-xl gap-3 py-2 px-10 cursor-pointer">
        <p>Non , pas maintenant</p>
      </button>
    </motion.div>
  );
}

export default Felicitaion;
