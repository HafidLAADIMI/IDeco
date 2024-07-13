"use client"
import React from "react";
import { IoLogOutOutline } from "react-icons/io5";
import Circle from "./Sliders/Circle";
import { useStepContext } from "../stepsContext";
import  {motion} from "framer-motion"
function CustomizeColor() {
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
     className="bg-white relative h-[100%]  w-full flex items-center pb-4  rounded-t-xl py-3  flex-col ">
      <div className="h-1 w-16 rounded-xl absolute top-1 bg-grey"></div>
      <div className="px-4 flex mt-3 flex-col gap-2">
        <p className="text-black font-bold max-sm:text-xs sm:text-xl">
          Choisissez votre couleur préférée{" "}
        </p>
        <p className="text-black max-sm:text-xs sm:text-xl">
          Pour continuer, nous avons besoin de certaines informations de votre
          part. Veuillez nous fournir vos coordonnées.
        </p>
        <form className="flex text-black max-sm:text-xs sm:text-xl  flex-col  w-full justify-between  items-start gap-5">
          <select
            name="couleur"
            id="couleur"
            className="w-full py-2 pl-2 cursor-pointer border border-grey rounded-xl outline-none"
          >
            <option value="aucun">Aucun --</option>
            <option value="rouge">Rouge</option>
            <option value="vert">Vert</option>
            <option value="jaune">Jaune</option>
            <option value="orange">Orange</option>
            <option value="blue">Blue</option>
            <option value="violet">Violet</option>
            <option value="blanche">Blanche</option>
            <option value="noir">noir</option>
          </select>
           <Circle/>
          <button
            onClick={()=>setStep(6)}
          className="flex flex-row justify-center w-full bg-orange text-white rounded-lg items-center gap-3 py-2 px-10 cursor-pointer">
            <p>Continuer</p>
            <IoLogOutOutline className="text-2xl" />
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default CustomizeColor;
