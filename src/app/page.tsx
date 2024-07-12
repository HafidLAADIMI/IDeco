import Image from "next/image";
import Greeting from "./components/Greeting";
import Commencer from "./components/Commencer";
import Informations from "./components/Informations";
import Espace from "./components/Espace";
import Couleur from "./components/Couleur";
import Style from "./components/Style";
import Format from "./components/Format";
import Mur from "./components/Mur";
import Cadre from "./components/Cadre";
import Resume from "./components/Resume";
import Felicitaion from "./components/Felicitaion";
import { IoLogOutOutline } from "react-icons/io5";
import Carousel from "./components/Sliders/Carousel";
export default function Home() {
  const bigLogo = "/bigLogo.svg";
  const logo = "/logo.svg";
  const squares = "/squares.svg";
  const strange = "/strange.svg";
  const ideco = "/ideco.svg";
  return (
    <div className="w-full bg-gronna relative  overflow-hidden h-[100%] text-5xl text-white  font-poppins">
      <Image height={500} width={500} alt="image" src={bigLogo} />
      <Image
        height={500}
        width={500}
        alt="image"
        src={logo}
        className="absolute cursor-pointer h-[3.53%] w-[7.65%] top-[2.29%] right-[87.01%] bottom-[94.17%] left-[5.33%] max-w-full overflow-hidden max-h-full"
      />
      <Image
        height={500}
        width={500}
        alt="image"
        src={squares}
        className="absolute cursor-pointer h-[2.22%] w-[4.8%] top-[2.96%] right-[5.33%] bottom-[94.83%] left-[89.87%] max-w-full overflow-hidden max-h-full"
      />
      <Image
        height={500}
        width={500}
        alt="image"
        src={strange}
        className="absolute h-[36.77%] w-3/5 top-[15%] right-[34.67%] left-[5.33%] max-w-full overflow-hidden max-h-full"
      />
      <Image
        height={500}
        width={500}
        alt="image"
        src={ideco}
        className="absolute h-[2.2%] cursor-pointer w-[21.04%] top-[2.97%] right-[62.75%] left-[16.21%] max-w-full overflow-hidden max-h-full"
      />
      <div className=" absolute top-[55%] px-3 ">
        <div className=" font-semibold text-2xl ">Personnaliser votre</div>
        <div className=" font-semibold text-2xl">tableau décoratif</div>
        <div className=" font-semibold text-2xl text-orange">gratuitement</div>
        <div className="font-light  text-xl mt-6 ">
        Construisez facilement votre tableau en quelques étapes simples.
          Commencez par choisir vos préférences personnelles, puis bénéficiez d
          une consultation et d une livraison gratuite. Rejoignez- nous et
          gagnez en qualité et en satisaction
        </div>
        <button className="flex flex-row  justify-center w-full bg-orange text-white max-sm:text-xs sm:text-xl  mt-[10%] rounded-lg items-center gap-3 py-2 px-10 cursor-pointer ">
        <p>Commencer</p>
        <IoLogOutOutline className="text-2xl" />
      </button>
      </div>
      {/* <Greeting /> */}
      {/* <Informations/> */}
      {/* <Espace/> */}
      {/* <Couleur/> */}
      {/* <Style/> */}
      {/* <Format/> */}
      <Mur/>
      {/* <Cadre/> */}
      {/* <Resume/> */}
      {/* <Felicitaion/> */}
      {/* <Carousel/> */}
    </div>
  );
}
