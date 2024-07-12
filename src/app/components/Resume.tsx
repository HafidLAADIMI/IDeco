import React from "react";
import { IoLogOutOutline } from "react-icons/io5";

function Resume() {
  return (
    <div className="bg-white relative h-[100%]  w-full flex items-center py-3  rounded-t-xl text-wrap text-ellipsis gap-3 selection: flex-col ">
      <div className="h-1 w-16  rounded-xl absolute top-1 bg-grey"></div>
      <div className="pl-3 flex flex-col gap-6 mt-3 h-full ">
        <p className="text-black font-bold max-sm:text-xs sm:text-xl">
          Resume de votre commande
        </p>
        <p className="text-black max-sm:text-xs sm:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore fuga,
          quasi eveniet aspernatur quod, natus aut qui cumque iure error ipsa .
        </p>
        <div className="flex flex-col items-start gap-3  w-full">
        <div className="flex w-full  items-start gap-2 flex-col ">
          <div className="text-black  max-sm:text-xs sm:text-xl w-[70%]">
            <div className="flex flex-row items-center justify-between">
              <p>Espace</p>
              <p>Bureau</p>
            </div>
            <hr />
          </div>
          <div className="text-black  max-sm:text-xs sm:text-xl w-[70%]">
            <div className="flex flex-row items-center justify-between">
              <p>Style</p>
              <p>Vintage</p>
            </div>
            <hr />
          </div>
          <div className="text-black  max-sm:text-xs sm:text-xl w-[70%]">
            <div className="flex flex-row items-center justify-between">
              <p>Couleur</p>
              <p>Orange</p>
            </div>
            <hr />
          </div>
          <div className="text-black  max-sm:text-xs sm:text-xl w-[70%]">
            <div className="flex flex-row items-center justify-between">
              <p>Format</p>
              <p>Paysage</p>
            </div>
            <hr />
          </div>
          <div className="text-black  max-sm:text-xs sm:text-xl w-[70%]">
            <div className="flex flex-row items-center justify-between">
              <p>Dimensions</p>
              <p>140cm x 60cm</p>
            </div>
            <hr />
          </div>
          <div className="text-black  max-sm:text-xs sm:text-xl w-[70%]">
            <div className="flex flex-row items-center justify-between">
              <p>Cadre</p>
              <p>Noir</p>
            </div>
            <hr />
          </div>
        </div>
        <hr />
        <div className="flex w-full flex-col ">
          <div className="text-black  max-sm:text-xs sm:text-xl w-[80%]">
            <div className="flex flex-row items-center justify-between">
              <p>Prix</p>
              <p className="font-bold">MAD*****,00</p>
            </div>
            <hr />
          </div>
          <div className="text-black  max-sm:text-xs sm:text-xl w-[90%]">
            <div className="flex flex-row items-center justify-between">
              <p>Consultation</p>
              <p className="font-bold">Gratuit</p>
            </div>
            <hr />
          </div>
          <div className="text-black  max-sm:text-xs sm:text-xl w-[90%]">
            <div className="flex flex-row items-center justify-between">
              <p>Livraison</p>
              <p className="font-bold">Gratuit</p>
            </div>
            <hr />
          </div>
          <div className="text-black  max-sm:text-xs sm:text-xl w-[90%]">
            <div className="flex flex-row items-center justify-between">
              <p>Installation</p>
              <p className="font-bold">Gratuit</p>
            </div>
            <hr />
          </div>
        </div>
          <hr />
          <div className="flex flex-row text-black  max-sm:text-xs sm:text-xl items-start justify-between w-[90%]">
            <p>*Paiment à la livraison</p>
            <p>Total</p>
            <p className="font-bold">MAD*****,00</p>
          </div>
        </div>
        <button className="flex flex-row justify-center w-full bg-orange text-white rounded-lg items-center max-sm:text-xs sm:text-xl gap-3 py-2 px-10 cursor-pointer">
          <p>Terminer</p>
          <IoLogOutOutline className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default Resume;
