"use client";
import React from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { useStepContext } from "../stepsContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { useFormContext } from "../formContext";
function Greeting() {
  const { formData, updateFormData } = useFormContext();
  const [error,setError]=useState<String>("");
  const { setStep } = useStepContext();
  const handleLanguage = (event: any) => {
    updateFormData({language:event.target.value})
    setError("");
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if(!formData.language){
      setError("Veuillez sélctionner une langue avant de continuer")
      return;
    }
    console.log("the selected langauge is  : " + formData.language);
    setStep(2);
  };
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.65, delay: 0.4 }}
      className="bg-white relative h-[100%]  w-full flex items-center pb-4  rounded-t-xl   flex-col "
    >
      <div className="bg-white h-[40vh] w-full flex items-center   absolute bottom-0 rounded-t-xl justify-center gap-10 flex-col">
        <div className="h-1 w-16 rounded-xl absolute top-1 bg-grey"></div>
        <p className="text-orange max-sm:text-xs sm:text-xl">
          Sélectionnez votre langue
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex text-black max-sm:text-xs sm:text-xl px-7 flex-col  w-full justify-between items-center gap-10"
        >
          <div className=" flex flex-row gap-24">
            <div className="flex cursor-pointer flex-row items-center gap-7 border-2 border-orange py-2 px-3 rounded-xl">
              <label>Français</label>
              <input
                onChange={handleLanguage}
                type="radio"
                id="français"
                name="fav_language"
                value="français"
              />
            </div>
            <div className="flex cursor-pointer flex-row items-center gap-7 border-2 border-grey py-2 px-3 rounded-xl">
              <label>Arabic</label>
              <input
                onChange={handleLanguage}
                type="radio"
                id="arabe"
                name="fav_language"
                value="arabe"
              />
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="flex flex-row justify-center w-full bg-orange text-white rounded-lg items-center gap-3 py-2 px-10 cursor-pointer"
          >
            <p>Continuer</p>
            <IoLogOutOutline className="text-2xl" />
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Greeting;
