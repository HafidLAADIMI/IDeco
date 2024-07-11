import Image from "next/image";
import Greeting from "./components/Greeting";
import Commencer from "./components/Commencer";
import Informations from "./components/Informations";
import Espace from "./components/Espace";
import Couleur from "./components/Couleur";
import Style from "./components/Style";
import Format from "./components/Format";
export default function Home() {
  const bigLogo = "/bigLogo.svg";
  const logo = "/logo.svg";
  const squares = "/squares.svg";
  const strange = "/strange.svg";
  const ideco = "/ideco.svg";
  return (
    <div className="w-full bg-gronna relative  overflow-hidden h-[100%] overflow-y-scroll text-left text-5xl text-white font-poppins">
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
      <div className=" absolute top-[52%] pl-3">
        <div className=" font-semibold text-2xl ">Personnaliser votre</div>
        <div className=" font-semibold text-2xl">tableau décoratif</div>
        <div className=" font-semibold text-2xl text-orange">gratuitement</div>
        <div className="font-light text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, ab
          possimus, jami jdja
        </div>
      </div>
      {/* <Greeting /> */}
      {/* <Commencer/> */}
      {/* <Informations/> */}
      {/* <Espace/> */}
      {/* <Couleur/> */}
      {/* <Style/> */}
      <Format/>
    </div>
  );
}
