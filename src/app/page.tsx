import Image from "next/image";
import Greeting from "./components/Greeting";
import Commencer from "./components/Commencer";
import Informations from "./components/Informations";
export default function Home() {
  const bigLogo = "/bigLogo.svg";
  const logo = "/logo.svg";
  const squares = "/squares.svg";
  const strange = "/strange.svg";
  const ideco = "/ideco.svg";
  return (
    <div className="w-full bg-gronna relative  overflow-hidden text-left text-5xl text-white font-poppins">
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
      {/* <Greeting /> */}
      {/* <Commencer/> */}
      <Informations/>

    </div>
  );
}
