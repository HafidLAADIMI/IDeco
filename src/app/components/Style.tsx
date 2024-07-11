import React from "react";
import { IoLogOutOutline } from "react-icons/io5";

function Style() {
  return (
    <div className="bg-white relative h-[100%]  w-full flex items-center   rounded-t-xl   flex-col ">
      <div className="h-1 w-16 rounded-xl absolute top-1 bg-grey"></div>
      <div className="pl-3 flex flex-col gap-2 mt-3  ">
        <p className="text-black font-bold text-xl">Style</p>
        <p className="text-black text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore fuga,
          quasi eveniet aspernatur quod, natus aut qui cumque iure error ipsa .
        </p>
        <form className="flex text-black text-xl  flex-col  w-full justify-between items-start gap-5">
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">
              <p>Abstrait</p>
            </div>
            <input
              type="radio"
              id="abstrait"
              name="style"
              value="abstrait"
              className="h-5 w-5"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">
              <p>Fleurs</p>
            </div>
            <input
              type="radio"
              id="fleurs"
              name="style"
              value="fleurs"
              className="h-5 w-5"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">
              <p>Minimaliste</p>
            </div>
            <input
              type="radio"
              id="minimaliste"
              name="style"
              value="minimaliste"
              className="h-5 w-5"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">
              <p>Boheme</p>
            </div>
            <input
              type="radio"
              id="boheme"
              name="style"
              value="boheme"
              className="h-5 w-5"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">
              <p>Scandinave</p>
            </div>
            <input
              type="radio"
              id="scandinave"
              name="style"
              value="scandinave"
              className="h-5 w-5"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">
              <p>Picasso</p>
            </div>
            <input
              type="radio"
              id="picasso"
              name="style"
              value="picasso"
              className="h-5 w-5"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">
              <p>Art</p>
            </div>
            <input
              type="radio"
              id="art"
              name="style"
              value="art"
              className="h-5 w-5"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">              <p>Vintage</p>
            </div>
            <input
              type="radio"
              id="vintage"
              name="style"
              value="vintage"
              className="h-5 w-5"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full border border-grey rounded-xl px-3 py-2 ">
            {" "}
            <div className="flex flex-row items-center gap-5">              <p>Object spécifique</p>
            </div>
            <input
              type="radio"
              id="objetSpecifique"
              name="style"
              value="objetSpecifique"
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

export default Style;
