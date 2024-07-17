"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoLogOutOutline } from "react-icons/io5";
import { useStepContext } from "../stepsContext";
import { useFormContext } from "../formContext";
interface CadreOption {
  id: string;
  label: string;
  value: string;
  imageSrc: string;
}


function Cadre() {
  const cadre = "/carree.svg";
  const { setStep } = useStepContext();
  const { updateFormData } = useFormContext();
  const [selectedCadre, setSelectedCadre] = useState<string>("");
  const [error,setError]=useState<String>("");
  const handleNextStep = () => {
    if (!selectedCadre) {
      setError("Veuillez sélectionner un cadre avant de continuer.");
    } else {
      updateFormData({cadre:selectedCadre });
      setStep(10);
    }
  };
  const cadreOptions: CadreOption[] = [
    { id: "sans cadre", label: "Sans cadre", value: "sansCadre", imageSrc: "/carree.svg" },
    { id: "noir", label: "Noir", value: "noir", imageSrc: "/carree.svg" },
    { id: "dore", label: "Doré", value: "dore", imageSrc: "/carree.svg" },
  ];
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.65, delay: 0.4 }}
      className="bg-white relative h-[100%] w-full flex items-center rounded-t-xl py-3 flex-col"
    >
      <div className="h-1 w-16 rounded-xl absolute top-1 bg-grey"></div>
      <div className="flex flex-col gap-2 mt-3">
        <p className="text-black pl-3 font-bold max-sm:text-xs sm:text-xl">Cadre</p>
        <p className="text-black pl-3 max-sm:text-xs sm:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore fuga,
          quasi eveniet aspernatur quod, natus aut qui cumque iure error ipsa .
        </p>
        <form className="flex px-3 text-black max-sm:text-xs sm:text-xl flex-col w-full justify-between items-start gap-5">
        {cadreOptions.map((option) => (
            <div
              key={option.id}
              className={`flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ${selectedCadre==option.id?"border-orange":"border-grey"}`}
            >
              <div className={`flex flex-row items-center gap-5`}>
                <Image height={30} width={30} alt="icon" src={option.imageSrc} />
                <p>{option.label}</p>
              </div>
              <input
                type="radio"
                id={option.id}
                name="cadre"
                value={option.value}
                className="h-5 w-5"
                onChange={()=>setSelectedCadre(option.id)}
              />
            </div>
          ))}
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="button"
            onClick={handleNextStep}
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

export default Cadre;
