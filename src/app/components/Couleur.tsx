"use client"
import React, { useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { useStepContext } from "../stepsContext";
import { motion } from "framer-motion";
import { useFormContext } from "../formContext";

function Couleur() {
  const { setStep } = useStepContext();
  const { updateFormData } = useFormContext();
  const [selectedCouleur, setSelectedCouleur] = useState<string>("");
  const [error, setError] = useState<String>("");
  const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCouleur(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedCouleur || selectedCouleur == "aucun") {
      setError("Veuillez sélctionner une couleur avant de continuer");
      return;
    } else {
      updateFormData({ color: selectedCouleur });
      setStep(5);
    }
  };
  const colors = [
    { value: "aucun", label: "Aucun --" },
    { value: "#FF5733", label: "Red" },
    { value: "#33FF57", label: "Green" },
    { value: "#FFFF00", label: "Yellow" },
    { value: "#FFA500", label: "Orange" },
    { value: "#0000FF", label: "Blue" },
    { value: "#8A2BE2", label: "Purple" },
    { value: "#FFFFFF", label: "White" },
    { value: "#000000", label: "Black" },
    { value: "#00FFFF", label: "Cyan" },
    { value: "#FFD700", label: "Gold" },
    { value: "#FFDAB9", label: "Peach" },
    { value: "#FF1493", label: "Pink" },
    { value: "#FFF8DC", label: "Cream" },
    { value: "#A52A2A", label: "Brown" },
    { value: "#40E0D0", label: "Turquoise" },
    { value: "#6B8E23", label: "Olive" },
    { value: "#00FFFF", label: "Aqua" },
    { value: "#00BFFF", label: "Sky" },
    { value: "#FF33A1", label: "Magenta" },
    { value: "#FFD700", label: "Gold" },
    { value: "#7B68EE", label: "Indigo" },
    { value: "#32CD32", label: "Teal" },
    { value: "#ADFF2F", label: "Lime" },
    { value: "#ADD8E6", label: "Light" },
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
      className="bg-white relative h-[100%] w-full flex items-center pb-4 rounded-t-xl py-3 flex-col"
    >
      <div className="h-1 w-16 rounded-xl absolute top-1 bg-grey"></div>
      <div className="px-4 flex mt-3 flex-col gap-2">
        <p className="text-black font-bold max-sm:text-xs sm:text-xl">
          Choisissez votre couleur préférée
        </p>
        <p className="text-black max-sm:text-xs sm:text-xl">
          Pour continuer, nous avons besoin de certaines informations de votre
          part. Veuillez nous fournir vos coordonnées.
        </p>
        <form
          className="flex text-black max-sm:text-xs sm:text-xl flex-col w-full justify-between items-start gap-5"
          onSubmit={handleSubmit}
        >
          <select
            name="couleur"
            id="couleur"
            className="w-full py-2 pl-2 cursor-pointer border border-grey rounded-xl outline-none"
            onChange={handleSelection}
          >
            {colors.map((color) => (
              <option key={color.value} value={color.label}>
                {color.label}
              </option>
            ))}
          </select>
          <div className="flex flex-col w-full rounded-xl border border-grey px-4 py-1 items-start gap-4 max-h-[20vh] overflow-y-scroll">
            <div className="flex flex-row items-center gap-2 transition ease-in duration-200 cursor-pointer hover:bg-slate w-full rounded-xl px-2 py-1">
              <div className="h-3 w-3 rounded-full bg-red-600"></div>
              <p>Rouge</p>
            </div>
            <div className="flex flex-row items-center gap-2 transition ease-in duration-200 cursor-pointer hover:bg-slate w-full rounded-xl px-2 py-1">
              <div className="h-3 w-3 rounded-full bg-green-600"></div>
              <p>Vert</p>
            </div>
            <div className="flex flex-row items-center gap-2 transition ease-in duration-200 cursor-pointer hover:bg-slate w-full rounded-xl px-2 py-1">
              <div className="h-3 w-3 rounded-full bg-blue-600"></div>
              <p>Blue</p>
            </div>
            <div className="flex flex-row items-center gap-2 transition ease-in duration-200 cursor-pointer hover:bg-slate w-full rounded-xl px-2 py-1">
              <div className="h-3 w-3 rounded-full bg-purple-600"></div>
              <p>Violet</p>
            </div>
            <div className="flex flex-row items-center gap-2 transition ease-in duration-200 cursor-pointer hover:bg-slate w-full rounded-xl px-2 py-1">
              <div className="h-3 w-3 rounded-full bg-black"></div>
              <p>Noire</p>
            </div>
            <div className="flex flex-row items-center gap-2 transition ease-in duration-200 cursor-pointer hover:bg-slate w-full rounded-xl px-2 py-1">
              <div className="h-3 w-3 rounded-full bg-sky-600"></div>
              <p>blue-ciel</p>
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

export default Couleur;
