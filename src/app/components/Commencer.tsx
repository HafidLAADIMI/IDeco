import React from "react";
import { IoLogOutOutline } from "react-icons/io5";

function Commencer() {
  return (
    <div className="bg-white relative h-[100%]  w-full flex items-center pb-4  rounded-t-xl   flex-col ">
      <div className="absolute top-[57%] pl-3">
        <div className=" font-semibold text-2xl ">Personnaliser votre</div>
        <div className=" font-semibold text-2xl">tableau décoratif</div>
        <div className=" font-semibold text-2xl text-orange">gratuitement</div>
        <div className="font-light text-xl mt-5">
          Construisez facilement votre tableau en quelques étapes simples.
          Commencez par choisir vos préférences personnelles, puis bénéficiez d
          une consultation et d une livraison gratuite. Rejoignez- nous et
          gagnez en qualité et en satisaction
        </div>
      </div>
      <button className="flex flex-row justify-center w-full bg-orange text-white text-2xl  rounded-lg items-center gap-3 py-2 px-10 cursor-pointer">
        <p >Continuer</p>
        <IoLogOutOutline className="text-2xl" />
      </button>
    </div>
  );
}

export default Commencer;
