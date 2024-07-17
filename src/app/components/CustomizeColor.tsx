"use client"
import React, { useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import Circle from "./Sliders/Circle";
import { useStepContext } from "../stepsContext";
import { motion } from "framer-motion";
import { useFormContext } from "../formContext";
interface ColorItem {
  item: string;
  name: string;
}


function CustomizeColor() {
  const [error, setError] = useState<String>("");
  const {formData, updateFormData } = useFormContext();

  const colors: ColorItem[] = [
    { item: "#FF5733", name: "red-300" },
    { item: "#FF6347", name: "red-400" },
    { item: "#FF7256", name: "red-500" },
    { item: "#FF7F50", name: "red-600" },
    { item: "#FF8C69", name: "red-700" },
    { item: "#FFA07A", name: "red-800" },
    { item: "#FFA07A", name: "red-800" },
    { item: "#FFA500", name: "orange-500" },
    { item: "#FFB6C1", name: "pink-300" },
    { item: "#FFC0CB", name: "pink-400" },
    { item: "#FFDAB9", name: "peach-300" },
    { item: "#FFDEAD", name: "peach-400" },
    { item: "#FFE4C4", name: "peach-500" },
    { item: "#FFE4E1", name: "peach-600" },
    { item: "#FFEBCD", name: "peach-700" },
    { item: "#FFEFD5", name: "peach-800" },
    { item: "#FFF0F5", name: "pink-100" },
    { item: "#FFF5EE", name: "peach-200" },
    { item: "#FFF8DC", name: "cream-100" },
    { item: "#FFFACD", name: "cream-200" },
    { item: "#FFFAF0", name: "cream-300" },
    { item: "#33FF57", name: "green-300" },
    { item: "#3CB371", name: "green-400" },
    { item: "#66CDAA", name: "green-500" },
    { item: "#76EE00", name: "green-600" },
    { item: "#7CFC00", name: "green-700" },
    { item: "#8FBC8F", name: "green-800" },
    { item: "#90EE90", name: "light-green-300" },
    { item: "#98FB98", name: "light-green-400" },
    { item: "#ADFF2F", name: "lime-300" },
    { item: "#00FA9A", name: "lime-400" },
    { item: "#00FF7F", name: "lime-500" },
    { item: "#20B2AA", name: "teal-300" },
    { item: "#2E8B57", name: "teal-400" },
    { item: "#32CD32", name: "teal-500" },
    { item: "#3CB371", name: "green-400" },
    { item: "#40E0D0", name: "turquoise-300" },
    { item: "#48D1CC", name: "turquoise-400" },
    { item: "#66CDAA", name: "green-500" },
    { item: "#98FB98", name: "light-green-400" },
    { item: "#6B8E23", name: "olive-300" },
    { item: "#76EE00", name: "green-600" },
    { item: "#3357FF", name: "blue-300" },
    { item: "#6495ED", name: "blue-400" },
    { item: "#4169E1", name: "blue-500" },
    { item: "#1E90FF", name: "blue-600" },
    { item: "#00BFFF", name: "sky-blue-300" },
    { item: "#00CED1", name: "sky-blue-400" },
    { item: "#00FFFF", name: "aqua-300" },
    { item: "#7B68EE", name: "indigo-300" },
    { item: "#ADD8E6", name: "light-blue-300" },
    { item: "#87CEEB", name: "light-blue-400" },
    { item: "#87CEFA", name: "light-blue-500" },
    { item: "#87CEFF", name: "light-blue-600" },
    { item: "#AFEEEE", name: "light-cyan-300" },
    { item: "#B0E0E6", name: "light-cyan-400" },
    { item: "#B0C4DE", name: "light-blue-700" },
    { item: "#B0E2FF", name: "light-cyan-500" },
    { item: "#B2DFEE", name: "light-cyan-600" },
    { item: "#6495ED", name: "blue-400" },
    { item: "#00BFFF", name: "sky-blue-300" },
    { item: "#00B2EE", name: "sky-blue-200" },
    { item: "#00BFFF", name: "sky-blue-300" },
    { item: "#FF33A1", name: "magenta-300" },
    { item: "#FF69B4", name: "magenta-400" },
    { item: "#FF6EB4", name: "magenta-500" },
    { item: "#FF82AB", name: "magenta-600" },
    { item: "#FF6A6A", name: "red-300" },
    { item: "#FFB6C1", name: "pink-300" },
    { item: "#FF69B4", name: "magenta-400" },
    { item: "#FFA07A", name: "red-800" },
    { item: "#FF34B3", name: "magenta-300" },
    { item: "#FF8247", name: "orange-400" },
    { item: "#FF1493", name: "pink-700" },
    { item: "#FFB6C1", name: "pink-300" },
    { item: "#DB7093", name: "pink-500" },
    { item: "#FFC0CB", name: "pink-400" },
    { item: "#FF6A6A", name: "red-300" },
    { item: "#FFDAB9", name: "peach-300" },
    { item: "#FF34B3", name: "magenta-300" },
    { item: "#FFDEAD", name: "peach-400" },
    { item: "#FF6EB4", name: "magenta-500" },
    { item: "#FFEC8B", name: "yellow-200" },
    { item: "#FF82AB", name: "magenta-600" },
    { item: "#FF8333", name: "orange-300" },
    { item: "#FF7F50", name: "orange-400" },
    { item: "#FFA07A", name: "red-800" },
    { item: "#FFA500", name: "orange-500" },
    { item: "#FFD700", name: "gold-300" },
    { item: "#FFDAB9", name: "peach-300" },
    { item: "#FFB6C1", name: "pink-300" },
    { item: "#FFDEAD", name: "peach-400" },
    { item: "#FFC0CB", name: "pink-400" },
    { item: "#FFD700", name: "gold-300" },
    { item: "#FFEC8B", name: "yellow-200" },
    { item: "#FFEC8B", name: "yellow-200" },
    { item: "#FFA500", name: "orange-500" },
    { item: "#FFA07A", name: "red-800" },
    { item: "#FF7F50", name: "orange-400" },
    { item: "#FFB6C1", name: "pink-300" },
    { item: "#FFDEAD", name: "peach-400" },
    { item: "#FFD700", name: "gold-300" },
    { item: "#FFDAB9", name: "peach-300" },
    { item: "#FFA500", name: "orange-500" },
    { item: "#FFA07A", name: "red-800" },
    { item: "#33FFDA", name: "aqua-400" },
    { item: "#00FFFF", name: "aqua-300" },
    { item: "#7FFFD4", name: "aqua-500" },
    { item: "#40E0D0", name: "turquoise-300" },
    { item: "#20B2AA", name: "teal-300" },
    { item: "#00CED1", name: "sky-blue-400" },
    { item: "#00FFFF", name: "aqua-300" },
    { item: "#AFEEEE", name: "light-cyan-300" },
    { item: "#ADD8E6", name: "light-blue-300" },
    { item: "#00BFFF", name: "sky-blue-300" },
    { item: "#87CEEB", name: "light-blue-400" },
    { item: "#00B2EE", name: "sky-blue-200" },
    { item: "#B0E0E6", name: "light-cyan-400" },
    { item: "#00BFFF", name: "sky-blue-300" },
    { item: "#B0C4DE", name: "light-blue-700" },
    { item: "#00CED1", name: "sky-blue-400" },
    { item: "#B0E2FF", name: "light-cyan-500" },
    { item: "#00B2EE", name: "sky-blue-200" },
    { item: "#B2DFEE", name: "light-cyan-600" },
    { item: "#00FFFF", name: "aqua-300" },
    { item: "#87CEFA", name: "light-blue-500" },
    { item: "#FFA533", name: "orange-300" },
    { item: "#FFD700", name: "gold-300" },
    { item: "#FFEC8B", name: "yellow-200" },
    { item: "#FFFFE0", name: "light-yellow-100" },
    { item: "#FFE4B5", name: "light-yellow-200" },
    { item: "#FFEC8B", name: "yellow-200" },
    { item: "#FFD700", name: "gold-300" },
    { item: "#FFE4B5", name: "light-yellow-200" },
    { item: "#FFDAB9", name: "peach-300" },
    { item: "#FFEC8B", name: "yellow-200" },
    { item: "#FFFAF0", name: "cream-300" },
    { item: "#FFD700", name: "gold-300" },
    { item: "#FFA500", name: "orange-500" },
    { item: "#FFA07A", name: "red-800" },
    { item: "#FF8333", name: "orange-300" },
    { item: "#FFDAB9", name: "peach-300" },
    { item: "#FFDEAD", name: "peach-400" },
    { item: "#FFA500", name: "orange-500" },
    { item: "#FFA07A", name: "red-800" },
    { item: "#FFD700", name: "gold-300" },
    { item: "#FF8333", name: "orange-300" },
  ];
  
  const { setStep } = useStepContext();
  const [selectedColor, setSelectedColor] = useState<string>("");
  const filteredColors = colors.filter(
    (color) => formData.color && color.name.includes(formData.color.toLowerCase())
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
          <Circle colors={filteredColors} setSelectedColor={setSelectedColor} />
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
