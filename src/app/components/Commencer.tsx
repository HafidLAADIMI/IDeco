"use client";
import React, { useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { useStepContext } from "../stepsContext";
import { motion } from "framer-motion";
function Commencer() {
  const { setStep } = useStepContext();
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.65, delay: 0.4 }}
      className="relative  h-[100%]   w-full flex items-start px-3 py-5  flex-col "
    >
    
      <button
        onClick={() => setStep(1)}
        className="flex flex-row justify-center w-full bg-orange text-white max-sm:text-xs sm:text-xl  rounded-lg items-center gap-3 py-2 px-10 cursor-pointer"
      >
        <p>Commencer</p>
        <IoLogOutOutline className="text-2xl" />
      </button>
    </motion.div>
  );
}

export default Commencer;
