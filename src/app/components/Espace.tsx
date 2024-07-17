import Image from "next/image";
import React, { useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { useStepContext } from "../stepsContext";
import { motion } from "framer-motion";
import { useFormContext } from "../formContext";

function Espace() {
  const { setStep } = useStepContext();
  const { updateFormData, formData } = useFormContext();
  const [clicked, setClicked] = useState<boolean>(false);
  const [selectedEspace, setSelectedEspace] = useState<string>("");
  const [error, setError] = useState<String>("");
  const handleSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedEspace(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedEspace) {
      setError("Veuillez sélctionner un espace avant de continuer");
      return;
    } else {
      updateFormData({ espace: selectedEspace });
      setStep(4); // Proceed to the next step
    }
  };

  const salon = "/salon.svg";
  const sejour = "/sejour.svg";
  const cuisine = "/cuisine.svg";
  const bureau = "/bureau.svg";
  const chambreCouche = "/chambreCouche.svg";
  const chambreEnfant = "/chambreEnfant.svg";
  const toilette = "/toilette.svg";
  const autre = "/autre.svg";

  const espaces = [
    { id: "salon", label: "Salon", src: salon },
    { id: "sejour", label: "Séjour", src: sejour },
    { id: "cuisine", label: "Cuisine", src: cuisine },
    { id: "bureau", label: "Bureau", src: bureau },
    { id: "chambreCouche", label: "Chambre à coucher", src: chambreCouche },
    { id: "chambreEnfant", label: "Chambre d'enfants", src: chambreEnfant },
    { id: "toilette", label: "Toilette", src: toilette },
    { id: "autre", label: "Autre", src: autre },
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
        <p className="text-black px-3 font-bold max-sm:text-xs sm:text-xl">
          Espace
        </p>
        <p className="text-black px-3 max-sm:text-xs sm:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore fuga,
          quasi eveniet aspernatur quod, natus aut qui cumque iure error ipsa .
        </p>
        <form
          className="flex text-black max-sm:text-xs sm:text-xl flex-col w-full justify-between items-start px-3 gap-6"
          onSubmit={handleSubmit}
        >
          {espaces.map(({ id, label, src }) => (
            <div
              key={id}
              className={`flex flex-row items-center justify-between w-full border  rounded-xl px-3 py-2  ${
                  selectedEspace == id ? "border-orange" : "border-grey"
                }`}
            >
              <div
                className={`flex flex-row items-center gap-5`}
              >
                <Image height={30} width={30} alt="icon" src={src} />
                <p>{label}</p>
              </div>
              <input
                type="radio"
                id={id}
                name="espace"
                value={id}
                className="h-5 w-5"
                onChange={handleSelection}
                onClick={() => setClicked(id == "autre" ? true : false)}
              />
            </div>
          ))}
          <input
            type="text"
            id="write"
            name="espace"
            placeholder="Ecrivez-nous ..."
            className={`${
              clicked ? "flex" : "hidden"
            } flex-row items-center outline-orange justify-between w-full border border-grey rounded-xl px-3 py-2 `}
            onChange={handleSelection}
          />

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

export default Espace;
