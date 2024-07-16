"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { useStepContext } from "../stepsContext";
import { motion } from "framer-motion";
import { useFormContext } from "../formContext";

function Format() {
  const { setStep } = useStepContext();
  const { updateFormData } = useFormContext();
  const [selectedFormat, setSelectedFormat] = useState<string>("");
  const [dimensions, setDimensions] = useState({ hauteur: 0, largeur: 0 });
  const [error, setError] = useState<string>("");

  const handleSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFormat(event.target.value);
  };

  const handleDimensionsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setDimensions((prev) => ({ ...prev, [id]: Number(value) }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFormat) {
      setError("Veuillez sélectionner un format avant de continuer");
      return;
    } else if (dimensions.hauteur <= 0 || dimensions.largeur <= 0) {
      setError("Veuillez saisir des dimensions valides");
      return;
    } else {
      updateFormData({ format: selectedFormat, ...dimensions });
      setStep(8); // Proceed to the next step
    }
  };

  const carree = "/carree.svg";
  const protrait = "/portrait.svg";
  const paysage = "/paysage.svg";
  const landscape = "/landscape.svg";
  const fourpiece = "/fourpiece.svg";
  const hauteur = "/hauteur.svg";
  const largeur = "/largeur.svg";
  const barre = "/barre.svg";

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
        <p className="text-black pl-3 font-bold max-sm:text-xs sm:text-xl">Format</p>
        <p className="text-black pl-3 max-sm:text-xs sm:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore fuga,
          quasi eveniet aspernatur quod, natus aut qui cumque iure error ipsa.
        </p>
        <form
          className="flex px-3 text-black max-sm:text-xs sm:text-xl flex-col w-full justify-between items-start gap-6"
          onSubmit={handleSubmit}
        >
          {[
            { id: "carree", label: "Carre", src: carree },
            { id: "portrait", label: "Portrait", src: protrait },
            { id: "paysage", label: "Paysage", src: paysage },
            { id: "landscape", label: "Landscape", src: landscape },
            { id: "fourpiece", label: "4 pièces", src: fourpiece },
          ].map((format) => (
            <div
              key={format.id}
              className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2"
            >
              <div className="flex flex-row items-center gap-5">
                <Image height={30} width={30} alt="icon" src={format.src} />
                <p>{format.label}</p>
              </div>
              <input
                type="radio"
                id={format.id}
                name="format"
                value={format.id}
                className="h-5 w-5"
                onChange={handleSelection}
              />
            </div>
          ))}
          <div className="pl-3 flex flex-col gap-2 mt-3">
            <p className="text-black font-bold max-sm:text-xs sm:text-xl">Dimensions</p>
            <p className="text-black max-sm:text-xs sm:text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              fuga, quasi eveniet aspernatur quod, natus aut qui cumque iure
              error ipsa.
            </p>
          </div>
          <div className="flex flex-row w-full items-center justify-between gap-3">
            {[
              { id: "hauteur", label: "Hauteur", src: hauteur },
              { id: "largeur", label: "Largeur", src: largeur },
            ].map((dim) => (
              <div
                key={dim.id}
                className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2"
              >
                <div className="flex flex-row items-center gap-5">
                  <Image height={30} width={30} alt="icon" src={dim.src} />
                </div>
                <input
                  type="number"
                  id={dim.id}
                  placeholder={dim.label}
                  name={dim.id}
                  className="h-6 w-full ml-6 text-xs pl-2 outline-orange"
                  onChange={handleDimensionsChange}
                />
                <div className="flex flex-row items-center gap-5">
                  <Image height={3} width={5} alt="icon" src={barre} />
                  <p>cm</p>
                </div>
              </div>
            ))}
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

export default Format;
