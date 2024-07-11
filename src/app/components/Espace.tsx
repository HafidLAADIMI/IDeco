import Image from "next/image";
import React from "react";
import { IoLogOutOutline } from "react-icons/io5";

function Espace() {
  const salon = "/salon.svg";
  const sejour = "/sejour.svg";
  const cuisine = "/cuisine.svg";
  const bureau = "/bureau.svg";
  const chambreCouche = "/chambreCouche.svg";
  const chambreEnfant = "/chambreEnfant.svg";
  const toilette = "/toilette.svg";
  const autre = "/autre.svg";

  return (
    <div className="bg-white relative h-[100%]  w-full flex items-center   rounded-t-xl   flex-col ">
      <div className="h-1 w-16 rounded-xl absolute top-1 bg-grey"></div>
      <div className="pl-3 flex flex-col gap-2 mt-3  ">
        <p className="text-black font-bold text-xl">Espace</p>
        <p className="text-black text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore fuga,
          quasi eveniet aspernatur quod, natus aut qui cumque iure error ipsa .
        </p>
        <form className="flex text-black text-xl  flex-col  w-full justify-between items-start gap-6">
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">
              <Image height={30} width={30} alt="icon" src={salon} />
              <p>Salon</p>
            </div>
            <input
              type="radio"
              id="salon"
              name="espace"
              value="salon"
              className="h-5 w-5"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">
              <Image height={30} width={30} alt="icon" src={sejour} />
              <p>Séjour</p>
            </div>
            <input
              type="radio"
              id="sejour"
              name="espace"
              value="sejour"
              className="h-5 w-5"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">
              <Image height={30} width={30} alt="icon" src={cuisine} />
              <p>Cuisine</p>
            </div>
            <input
              type="radio"
              id="cuisine"
              name="espace"
              value="cuisine"
              className="h-5 w-5"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">
              <Image height={30} width={30} alt="icon" src={bureau} />
              <p>Bureau</p>
            </div>
            <input
              type="radio"
              id="bureau"
              name="espace"
              value="bureau"
              className="h-5 w-5"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">
              <Image height={30} width={30} alt="icon" src={chambreCouche} />
              <p>Chambre à coucher</p>
            </div>
            <input
              type="radio"
              id="chambreCouche"
              name="espace"
              value="chambreCouche"
              className="h-5 w-5"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">
              <Image height={30} width={30} alt="icon" src={chambreEnfant} />
              <p>Chambre d enfants</p>
            </div>
            <input
              type="radio"
              id="chambreEnfant"
              name="espace"
              value="chambreEnfant"
              className="h-5 w-5"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">
              <Image height={30} width={30} alt="icon" src={toilette} />
              <p>Toilette</p>
            </div>
            <input
              type="radio"
              id="toilette"
              name="espace"
              value="toilette"
              className="h-5 w-5"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">
              <Image height={30} width={30} alt="icon" src={autre} />
              <p>Autre</p>
            </div>
            <input
              type="radio"
              id="autre"
              name="espace"
              value="autre"
              className="h-5 w-5"
            />
          </div>

          <button className="flex flex-row justify-center w-full bg-orange text-white rounded-lg items-center gap-3 py-2 px-10 cursor-pointer">
            <p>Continuer</p>
            <IoLogOutOutline className="text-2xl" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Espace;
