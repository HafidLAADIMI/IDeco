"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { useStepContext } from "../stepsContext";
import { motion } from "framer-motion";
import { useFormContext } from "../formContext";

function Informations() {
  const { formData, updateFormData } = useFormContext();
  const { setStep } = useStepContext();

  const [nomPrenom, setNomPrenom] = useState(
    formData.userInformation.nomPrenom
  );
  const [phoneNumber, setPhoneNumber] = useState(
    formData.userInformation.phoneNumber
  );
  const [ville, setVille] = useState(formData.userInformation.ville);
  const [addresse, setAddresse] = useState(formData.userInformation.addresse);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateFormData({
      userInformation: {
        nomPrenom,
        phoneNumber,
        ville,
        addresse,
      },
    });
    setStep(3);
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
      className="bg-white relative h-[100%] w-full flex items-center rounded-t-xl flex-col py-2"
    >
      <div className="h-1 w-16 rounded-xl absolute top-1 bg-grey"></div>
      <div className="pl-3 flex flex-col gap-2">
        <p className="text-black font-bold max-sm:text-xs sm:text-xl">
          Mes informations
        </p>
        <p className="text-black max-sm:text-xs sm:text-xl">
          Pour continuer, nous avons besoin de certaines informations de votre
          part. Veuillez nous fournir vos coordonnées.
        </p>
        <form
          className="flex text-black max-sm:text-xs sm:text-xl flex-col w-full justify-between items-start gap-6 p-3"
          onSubmit={handleSubmit}
        >
          <input
            required
            type="text"
            placeholder="Nom et prénom"
            value={nomPrenom}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNomPrenom(e.target.value)
            }
            className="border outline-none hover:border-orange border-grey w-full rounded-xl py-2 pl-4"
          />
          <input
            required
            type="tel"
            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
            placeholder="Numéro de téléphone"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPhoneNumber(e.target.value)
            }
            className="border outline-none hover:border-orange border-grey w-full rounded-xl py-2 pl-4"
          />
          <input
            required
            type="text"
            placeholder="Ville"
            value={ville}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setVille(e.target.value)
            }
            className="border outline-none hover:border-orange border-grey w-full rounded-xl py-2 pl-4"
          />
          <input
            required
            type="text"
            placeholder="Adresse"
            value={addresse}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAddresse(e.target.value)
            }
            className="border outline-none hover:border-orange border-grey w-full rounded-xl py-2 pl-4"
          />

          <button
            type="submit"
            className="flex flex-row justify-center w-full bg-orange text-white rounded-lg items-center gap-3 py-2 mt-4 px-10 cursor-pointer"
          >
            <p>Continuer</p>
            <IoLogOutOutline className="text-2xl" />
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Informations;
