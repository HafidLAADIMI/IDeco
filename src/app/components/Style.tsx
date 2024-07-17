"use client";
import React, { useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { useStepContext } from "../stepsContext";
import { useFormContext } from "../formContext";
import { motion } from "framer-motion";

function Style() {
  const { setStep } = useStepContext();
  const { updateFormData } = useFormContext();
  const [selectedStyle, setSelectedStyle] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedStyle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedStyle) {
      setError("Veuillez sélectionner un style avant de continuer");
      return;
    } else {
      updateFormData({ style: selectedStyle });
      setStep(7); // Proceed to the next step
    }
  };
  const img = "/bohem.jpg";
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
        <p className="text-black px-3 font-bold max-sm:text-xs sm:text-xl">
          Style
        </p>
        <p className="text-black px-3 max-sm:text-xs sm:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore fuga,
          quasi eveniet aspernatur quod, natus aut qui cumque iure error ipsa.
        </p>
        <form
          className="flex text-black max-sm:text-xs sm:text-xl px-3 flex-col w-full justify-between items-start gap-5"
          onSubmit={handleSubmit}
        >
          {[
            { label: "Abstrait", value: "abstrait", image: img },
            { label: "Fleurs", value: "fleurs", image: img },
            { label: "Minimaliste", value: "minimaliste", image: img },
            { label: "Boheme", value: "boheme", image: img },
            { label: "Scandinave", value: "scandinave", image: img },
            { label: "Picasso", value: "picasso", image: img },
            { label: "Art", value: "art", image: img },
            { label: "Vintage", value: "vintage", image: img },
            { label: "Objet spécifique", value: "objetSpecifique", image: img },
          ].map((style) => (
            <div
              style={
                selectedStyle == style.value
                  ? {
                      backgroundImage: `url(${style.image})`,
                      backgroundPosition: "center",
                    }
                  : {}
              }
              key={style.value}
              className={`flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 ${
                selectedStyle == style.value ? "py-10" : "py-2 "
              }`}
            >
              <div className="flex flex-row items-center gap-5">
                <p>{style.label}</p>
              </div>
              <input
                type="radio"
                id={style.value}
                name="style"
                value={style.value}
                className="h-5 w-5"
                onChange={handleSelection}
              />
            </div>
          ))}

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

export default Style;
