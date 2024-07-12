import React from "react";
import { IoLogOutOutline } from "react-icons/io5";

function Informations() {
  return (
    <div className="bg-white relative h-[100%]  w-full flex items-center   rounded-t-xl   flex-col py-2  ">
        <div className="h-1 w-16 rounded-xl absolute top-1 bg-grey"></div>
        <div className="pl-3 flex flex-col gap-2">
          <p className="text-black font-bold max-sm:text-xs sm:text-xl">Mes informations</p>
          <p className="text-black max-sm:text-xs sm:text-xl">
            Pour continuer, nous avons besoin de certaines informations de votre
            part. Veuillez nous fournir vos coordonnées.
          </p>
          <form className="flex text-black max-sm:text-xs sm:text-xl  flex-col  w-full justify-between items-start gap-6 p-3">
            <input type="text" placeholder="Nom et prenom" className="border outline-none hover:border-orange border-grey w-full rounded-xl py-2 pl-4" />
            <input type="text" placeholder="Numero du telephone" className="border outline-none hover:border-orange border-grey w-full rounded-xl py-2 pl-4"  />
            <input type="text" placeholder="ville" className="border outline-none hover:border-orange border-grey w-full rounded-xl py-2 pl-4"  />
            <input type="text" placeholder="Addresse" className="border outline-none hover:border-orange border-grey w-full rounded-xl py-2 pl-4"  />

            <button className="flex flex-row justify-center w-full bg-orange text-white rounded-lg items-center gap-3 py-2 mt-4 px-10 cursor-pointer">
              <p>Continuer</p>
              <IoLogOutOutline className="text-2xl" />
            </button>
          </form>
        </div>
      </div>
  );
}

export default Informations;
