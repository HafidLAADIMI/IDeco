import React from "react";
import { IoLogOutOutline } from "react-icons/io5";
function Greeting() {
  return (
    <div>
      <div className=" absolute top-[52%] pl-3">
        <div className=" font-semibold text-2xl ">Personnaliser votre</div>
        <div className=" font-semibold text-2xl">tableau décoratif</div>
        <div className=" font-semibold text-2xl text-orange">gratuitement</div>
        <div className="font-light text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, ab
          possimus, jami jdja
        </div>
      </div>
      <div className="bg-white h-[40vh] w-full flex items-center   absolute bottom-0 rounded-t-xl justify-center gap-10 flex-col">
        <div className="h-1 w-16 rounded-xl absolute top-1 bg-grey"></div>
        <p className="text-orange text-xl">Sélectionnez votre langue</p>
        <form className="flex text-black text-xl px-7 flex-col  w-full justify-between items-center gap-10">
          <div className=" flex flex-row gap-24">
            <div className="flex cursor-pointer flex-row items-center gap-7 border-2 border-orange py-2 px-3 rounded-xl">
              <label>Français</label>
              <input
                type="radio"
                id="français"
                name="fav_language"
                value="français"
              />
            </div>
            <div className="flex cursor-pointer flex-row items-center gap-7 border-2 border-grey py-2 px-3 rounded-xl">
              <label>Arabic</label>
              <input
                type="radio"
                id="arabe"
                name="fav_language"
                value="arabe"
              />
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

export default Greeting;
