import Image from "next/image";
import React from "react";
import { IoLogOutOutline } from "react-icons/io5";

function Cadre() {
  const cadre = "/cadre.svg";
  return (
    <div className="bg-white relative h-[100%]  w-full flex items-center   rounded-t-xl py-3  flex-col ">
      <div className="h-1 w-16 rounded-xl absolute top-1 bg-grey"></div>
      <div className=" flex flex-col gap-2 mt-3  ">
        <p className="text-black pl-3 font-bold max-sm:text-xs sm:text-xl">Style</p>
        <p className="text-black pl-3 max-sm:text-xs sm:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore fuga,
          quasi eveniet aspernatur quod, natus aut qui cumque iure error ipsa .
        </p>
        <form className="flex px-3 text-black max-sm:text-xs sm:text-xl  flex-col  w-full justify-between items-start gap-5">
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">
              <Image height={30} width={30} alt="icon" src={cadre} />
              <p>Sans cadre</p>
            </div>
            <input
              type="radio"
              id="sansCadre"
              name="cadre"
              value="sansCadre"
              className="h-5 w-5"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">
              <Image height={30} width={30} alt="icon" src={cadre} />
              <p>Noir</p>
            </div>
            <input
              type="radio"
              id="noir"
              name="cadre"
              value="noir"
              className="h-5 w-5"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">
              <Image height={30} width={30} alt="icon" src={cadre} />
              <p>Doré</p>
            </div>
            <input
              type="radio"
              id="dore"
              name="cadre"
              value="dore"
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

export default Cadre;
