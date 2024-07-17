"use client"
import React, { useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import Circle from "./Sliders/Circle";
import { useStepContext } from "../stepsContext";
import { motion } from "framer-motion";
import { useFormContext } from "../formContext";
interface ColorItem {
  item: string;
}

function CustomizeColor() {
  const [error, setError] = useState<String>("");
  const {formData, updateFormData } = useFormContext();
  const colors: ColorItem[] = [
    { item: "#FF5733" },
    { item: "#FF6347" },
    { item: "#FF7256" },
    { item: "#FF7F50" },
    { item: "#FF8C69" },
    { item: "#FFA07A" },
    { item: "#FFA07A" },
    { item: "#FFA500" },
    { item: "#FFB6C1" },
    { item: "#FFC0CB" },
    { item: "#FFDAB9" },
    { item: "#FFDEAD" },
    { item: "#FFE4C4" },
    { item: "#FFE4E1" },
    { item: "#FFEBCD" },
    { item: "#FFEFD5" },
    { item: "#FFF0F5" },
    { item: "#FFF5EE" },
    { item: "#FFF8DC" },
    { item: "#FFFACD" },
    { item: "#FFFAF0" },
    { item: "#33FF57" },
    { item: "#3CB371" },
    { item: "#66CDAA" },
    { item: "#76EE00" },
    { item: "#7CFC00" },
    { item: "#8FBC8F" },
    { item: "#90EE90" },
    { item: "#98FB98" },
    { item: "#ADFF2F" },
    { item: "#00FA9A" },
    { item: "#00FF7F" },
    { item: "#20B2AA" },
    { item: "#2E8B57" },
    { item: "#32CD32" },
    { item: "#3CB371" },
    { item: "#40E0D0" },
    { item: "#48D1CC" },
    { item: "#66CDAA" },
    { item: "#98FB98" },
    { item: "#6B8E23" },
    { item: "#76EE00" },
    { item: "#3357FF" },
    { item: "#6495ED" },
    { item: "#4169E1" },
    { item: "#1E90FF" },
    { item: "#00BFFF" },
    { item: "#00CED1" },
    { item: "#00FFFF" },
    { item: "#7B68EE" },
    { item: "#ADD8E6" },
    { item: "#87CEEB" },
    { item: "#87CEFA" },
    { item: "#87CEFF" },
    { item: "#AFEEEE" },
    { item: "#B0E0E6" },
    { item: "#B0C4DE" },
    { item: "#B0E2FF" },
    { item: "#B2DFEE" },
    { item: "#6495ED" },
    { item: "#00BFFF" },
    { item: "#00B2EE" },
    { item: "#00BFFF" },
    { item: "#FF33A1" },
    { item: "#FF69B4" },
    { item: "#FF6EB4" },
    { item: "#FF82AB" },
    { item: "#FF6A6A" },
    { item: "#FFB6C1" },
    { item: "#FF69B4" },
    { item: "#FFA07A" },
    { item: "#FF34B3" },
    { item: "#FF8247" },
    { item: "#FF1493" },
    { item: "#FFB6C1" },
    { item: "#DB7093" },
    { item: "#FFC0CB" },
    { item: "#FF6A6A" },
    { item: "#FFDAB9" },
    { item: "#FF34B3" },
    { item: "#FFDEAD" },
    { item: "#FF6EB4" },
    { item: "#FFEC8B" },
    { item: "#FF82AB" },
    { item: "#FF8333" },
    { item: "#FF7F50" },
    { item: "#FFA07A" },
    { item: "#FFA500" },
    { item: "#FFD700" },
    { item: "#FFDAB9" },
    { item: "#FFB6C1" },
    { item: "#FFDEAD" },
    { item: "#FFC0CB" },
    { item: "#FFD700" },
    { item: "#FFEC8B" },
    { item: "#FFEC8B" },
    { item: "#FFA500" },
    { item: "#FFA07A" },
    { item: "#FF7F50" },
    { item: "#FFB6C1" },
    { item: "#FFDEAD" },
    { item: "#FFD700" },
    { item: "#FFDAB9" },
    { item: "#FFA500" },
    { item: "#FFA07A" },
    { item: "#33FFDA" },
    { item: "#00FFFF" },
    { item: "#7FFFD4" },
    { item: "#40E0D0" },
    { item: "#20B2AA" },
    { item: "#00CED1" },
    { item: "#00FFFF" },
    { item: "#AFEEEE" },
    { item: "#ADD8E6" },
    { item: "#00BFFF" },
    { item: "#87CEEB" },
    { item: "#00B2EE" },
    { item: "#B0E0E6" },
    { item: "#00BFFF" },
    { item: "#B0C4DE" },
    { item: "#00CED1" },
    { item: "#B0E2FF" },
    { item: "#00B2EE" },
    { item: "#B2DFEE" },
    { item: "#00FFFF" },
    { item: "#87CEFA" },
    { item: "#FFA533" },
    { item: "#FFD700" },
    { item: "#FFEC8B" },
    { item: "#FFFFE0" },
    { item: "#FFE4B5" },
    { item: "#FFEC8B" },
    { item: "#FFD700" },
    { item: "#FFE4B5" },
    { item: "#FFDAB9" },
    { item: "#FFEC8B" },
    { item: "#FFFAF0" },
    { item: "#FFD700" },
    { item: "#FFA500" },
    { item: "#FFA07A" },
    { item: "#FF8333" },
    { item: "#FFDAB9" },
    { item: "#FFDEAD" },
    { item: "#FFA500" },
    { item: "#FFA07A" },
    { item: "#FFD700" },
    { item: "#FF8333" },
  ];

  const { setStep } = useStepContext();
  const [selectedColor, setSelectedColor] = useState<string>("");
  const filteredColors = colors.filter(
    (color) => formData.color && color.item.includes(formData.color)
  );
  const handleNextStep = () => {
    if (!selectedColor) {
      setError("Veuillez sélectionner une couleur avant de continuer");
    } else {
      updateFormData({ customizedColor: selectedColor });
      setStep(6);
    }
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.65, delay: 0.4 }}
      className="bg-white relative h-[100%] w-full flex items-center pb-4 rounded-t-xl py-3 flex-col"
    >
      <div className="h-1 w-16 rounded-xl absolute top-1 bg-grey"></div>
      <div className="px-4 flex mt-3 flex-col gap-2">
        <p className="text-black font-bold max-sm:text-xs sm:text-xl">
          Choisissez votre couleur préférée
        </p>
        <p className="text-black max-sm:text-xs sm:text-xl">
          Pour continuer, nous avons besoin de certaines informations de votre
          part. Veuillez nous fournir vos coordonnées.
        </p>
        <form className="flex text-black max-sm:text-xs sm:text-xl flex-col w-full justify-between items-start gap-5">
          <Circle colors={colors} setSelectedColor={setSelectedColor} />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="button"
            onClick={handleNextStep}
            className="flex flex-row justify-center w-full bg-orange text-white rounded-lg items-center gap-3 py-2 px-4"
          >
            <IoLogOutOutline className="w-6 h-6" />
            <p>Suivant</p>
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default CustomizeColor;
