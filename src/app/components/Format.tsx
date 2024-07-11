import Image from "next/image";
import React from "react";
import { IoLogOutOutline } from "react-icons/io5";

function Format() {
  const carree = "/carree.svg";
  const protrait = "/portrait.svg";
  const paysage = "/paysage.svg";
  const landscape = "/landscape.svg";
  const fourpiece = "/fourpiece.svg";
  const hauteur = "/hauteur.svg";
  const largeur = "/largeur.svg";
  const barre = "/barre.svg";
  return (
    <div className="bg-white relative h-[100%]  w-full flex items-center   rounded-t-xl   flex-col ">
      <div className="h-1 w-16 rounded-xl absolute top-1 bg-grey"></div>
      <div className="pl-3 flex flex-col gap-2 mt-3  ">
        <p className="text-black font-bold text-xl">Format</p>
        <p className="text-black text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore fuga,
          quasi eveniet aspernatur quod, natus aut qui cumque iure error ipsa .
        </p>
        <form className="flex text-black text-xl  flex-col  w-full justify-between items-start gap-6">
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">
              <Image height={30} width={30} alt="icon" src={carree} />
              <p>Carre</p>
            </div>
            <input
              type="radio"
              id="carre"
              name="format"
              value="carre"
              className="h-5 w-5"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">
              <Image height={30} width={30} alt="icon" src={protrait} />
              <p>Portrait</p>
            </div>
            <input
              type="radio"
              id="portrait"
              name="format"
              value="portrait"
              className="h-5 w-5"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">
              <Image height={30} width={30} alt="icon" src={paysage} />
              <p>Paysage</p>
            </div>
            <input
              type="radio"
              id="paysage"
              name="format"
              value="paysage"
              className="h-5 w-5"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">
              <Image height={30} width={30} alt="icon" src={landscape} />
              <p>Landscape</p>
            </div>
            <input
              type="radio"
              id="landscape"
              name="format"
              value="landscape"
              className="h-5 w-5"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">
              <Image height={30} width={30} alt="icon" src={fourpiece} />
              <p>4 pièces</p>
            </div>
            <input
              type="radio"
              id="fourpiece"
              name="format"
              value="fourpiece"
              className="h-5 w-5"
            />
          </div>

          <div className="pl-3 flex flex-col gap-2 mt-3  ">
            <p className="text-black font-bold text-xl">Format</p>
            <p className="text-black text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              fuga, quasi eveniet aspernatur quod, natus aut qui cumque iure
              error ipsa .
            </p>
          </div>
          <div className="flex flex-row w-full items-center justify-between gap-3">
            <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
              {" "}
              <div className="flex flex-row items-center gap-5">
                <Image height={30} width={30} alt="icon" src={hauteur} />
              </div>
              <input
                type="number"
                id="hauteur"
                placeholder="Hauteur"
                name="format"
              
                className="h-6 w-full ml-6 text-xs pl-2 outline-orange "
              />
              <div className="flex flex-row items-center gap-5">
                <Image height={3} width={5} alt="icon" src={barre} />
                <p>cm</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
              {" "}
              <div className="flex flex-row items-center gap-5">
                <Image height={30} width={30} alt="icon" src={largeur} />
              </div>
              <input
                type="number"
                id="largeur"
                placeholder="Largeur"
                name="format"
                className="h-6 w-full ml-6 text-xs pl-2 outline-orange "
              />
              <div className="flex flex-row items-center gap-5">
                <Image height={3} width={5} alt="icon" src={barre} />
                <p>cm</p>
              </div>
            </div>
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

export default Format;
