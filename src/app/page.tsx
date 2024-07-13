"use client";
import { useState } from "react";
import Image from "next/image";
import Greeting from "./components/Greeting";
// import Commencer from "./components/Commencer";
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
import CustomizeColor from "./components/CustomizeColor";
import { useStepContext } from "./stepsContext";
import Commencer from "./components/Commencer";

export default function Home() {
  const { step, setStep } = useStepContext();

  const bigLogo = "/bigLogo.svg";
  const logo = "/logo.svg";
  const squares = "/squares.svg";
  const strange = "/strange.svg";
  const ideco = "/ideco.svg";

  // Function to handle moving to the next step
  // const nextStep = () => {
  //   setStep((prevStep) => prevStep + 1);
  // };

  // Array of components in the order you want to display them
  const steps = [
    <Commencer key="commencer" />,
    <Greeting key="greeting" />,
    <Informations key="informations" />,
    <Espace key="espace" />,
    <Couleur key="couleur" />,
    <CustomizeColor key="customizeColor" />,
    <Style key="style" />,
    <Format key="format" />,
    <Mur key="mur" />,
    <Cadre key="cadre" />,
    <Resume key="resume" />,
    <Felicitaion key="felicitation" />,
  ];

  return (
    <div className="w-full bg-gronna relative overflow-hidden h-[100%] text-5xl text-white font-poppins">
      <Image height={500} width={500} alt="image" src={bigLogo} />
      <Image
        onClick={() => setStep(0)}
        height={500}
        width={500}
        alt="image"
        src={logo}
        className="absolute cursor-pointer h-[3.53%] w-[7.65%] top-[2.29%] right-[87.01%] bottom-[94.17%] left-[5.33%] max-w-full overflow-hidden max-h-full"
      />
      <Image
        onClick={() => setStep(0)}
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
        onClick={() => setStep(0)}
        height={500}
        width={500}
        alt="image"
        src={ideco}
        className="absolute h-[2.2%] cursor-pointer w-[21.04%] top-[2.97%] right-[62.75%] left-[16.21%] max-w-full overflow-hidden max-h-full"
      />

      {steps[step]}
    </div>
  );
}
