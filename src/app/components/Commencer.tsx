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
      className="absolute top-[55%] px-3 "
    >
      <div className="font-semibold text-2xl ">Personnaliser votre</div>
      <div className="font-semibold text-2xl">tableau décoratif</div>
      <div className="font-semibold text-2xl text-orange">gratuitement</div>
      <div className="font-light text-xl mt-6 ">
        Construisez facilement votre tableau en quelques étapes simples.
        Commencez par choisir vos préférences personnelles, puis bénéficiez d
        une consultation et d une livraison gratuite. Rejoignez-nous et gagnez
        en qualité et en satisfaction
      </div>

      <button
        onClick={() => setStep(1)}
        className="flex flex-row justify-center w-full bg-orange text-white max-sm:text-xs sm:text-xl mt-[10%] rounded-lg items-center gap-3 py-2 px-10 cursor-pointer"
      >
        <p>Commencer</p>
        <IoLogOutOutline className="text-2xl" />
      </button>
    </motion.div>
  );
}

export default Commencer;
