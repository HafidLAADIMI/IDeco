import React from "react";
import { IoLogOutOutline } from "react-icons/io5";

function Couleur() {
  return (
    <div className="bg-white relative h-[100%]  w-full flex items-center pb-4  rounded-t-xl   flex-col ">
      <div className="h-1 w-16 rounded-xl absolute top-1 bg-grey"></div>
      <div className="px-4 flex mt-3 flex-col gap-2">
        <p className="text-black font-bold text-xl">
          Choisissez votre couleur préférée{" "}
        </p>
        <p className="text-black text-xl">
          Pour continuer, nous avons besoin de certaines informations de votre
          part. Veuillez nous fournir vos coordonnées.
        </p>
        <form className="flex text-black text-xl  flex-col  w-full justify-between  items-start gap-5">
          <select
            name="couleur"
            id="couleur"
            className="w-full py-2 pl-2 cursor-pointer border border-grey rounded-xl outline-none"
          >
            <option value="aucun">Aucun --</option>
            <option value="rouge">Rouge</option>
            <option value="vert">Vert</option>
            <option value="jaune">Jaune</option>
            <option value="orange">Orange</option>
            <option value="blue">Blue</option>
            <option value="violet">Violet</option>
            <option value="blanche">Blanche</option>
            <option value="noir">noir</option>
          </select>
            <div className="flex flex-col w-full rounded-xl border border-grey px-4 py-1 items-start gap-4 max-h-[20vh] overflow-y-scroll ">
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
          <button className="flex flex-row justify-center w-full bg-orange text-white rounded-lg items-center gap-3 py-2 px-10 cursor-pointer">
            <p>Continuer</p>
            <IoLogOutOutline className="text-2xl" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Couleur;
