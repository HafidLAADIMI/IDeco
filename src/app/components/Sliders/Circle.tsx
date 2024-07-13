import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

function Circle() {
    const colors = [
        // Shades of "#FF5733"
        "#FF5733",      // Base color
        "#FF6347",      // Lighter shade
        "#FF7256",
        "#FF7F50",      // Lighter shade
        "#FF8C69",
        "#FFA07A",      // Lighter shade
        "#FFA07A",
        "#FFA500",      // Lighter shade
        "#FFB6C1",
        "#FFC0CB",      // Lighter shade
        "#FFDAB9",
        "#FFDEAD",      // Lighter shade
        "#FFE4C4",
        "#FFE4E1",      // Lighter shade
        "#FFEBCD",
        "#FFEFD5",      // Lighter shade
        "#FFF0F5",
        "#FFF5EE",      // Lighter shade
        "#FFF8DC",
        "#FFFACD",      // Lighter shade
        "#FFFAF0",
      
        // Shades of "#33FF57"
        "#33FF57",      // Base color
        "#3CB371",      // Lighter shade
        "#66CDAA",
        "#76EE00",      // Lighter shade
        "#7CFC00",
        "#8FBC8F",      // Lighter shade
        "#90EE90",
        "#98FB98",      // Lighter shade
        "#ADFF2F",
        "#00FA9A",      // Lighter shade
        "#00FF7F",
        "#20B2AA",      // Lighter shade
        "#2E8B57",
        "#32CD32",      // Lighter shade
        "#3CB371",
        "#40E0D0",      // Lighter shade
        "#48D1CC",
        "#66CDAA",      // Lighter shade
        "#98FB98",
        "#6B8E23",      // Lighter shade
        "#76EE00",
      
        // Shades of "#3357FF"
        "#3357FF",      // Base color
        "#6495ED",      // Lighter shade
        "#4169E1",
        "#1E90FF",      // Lighter shade
        "#00BFFF",
        "#00CED1",      // Lighter shade
        "#00FFFF",
        "#7B68EE",      // Lighter shade
        "#ADD8E6",
        "#87CEEB",      // Lighter shade
        "#87CEFA",
        "#87CEFF",      // Lighter shade
        "#AFEEEE",
        "#B0E0E6",      // Lighter shade
        "#B0C4DE",
        "#B0E2FF",      // Lighter shade
        "#B2DFEE",
        "#6495ED",      // Lighter shade
        "#00BFFF",
        "#00B2EE",      // Lighter shade
        "#00BFFF",
      
        // Shades of "#FF33A1"
        "#FF33A1",      // Base color
        "#FF69B4",      // Lighter shade
        "#FF6EB4",
        "#FF82AB",      // Lighter shade
        "#FF6A6A",
        "#FFB6C1",      // Lighter shade
        "#FF69B4",
        "#FFA07A",      // Lighter shade
        "#FF34B3",
        "#FF8247",      // Lighter shade
        "#FF1493",
        "#FFB6C1",      // Lighter shade
        "#DB7093",
        "#FFC0CB",      // Lighter shade
        "#FF6A6A",
        "#FFDAB9",      // Lighter shade
        "#FF34B3",
        "#FFDEAD",      // Lighter shade
        "#FF6EB4",
        "#FFEC8B",      // Lighter shade
        "#FF82AB",
      
        // Shades of "#FF8333"
        "#FF8333",      // Base color
        "#FF7F50",      // Lighter shade
        "#FFA07A",
        "#FFA500",      // Lighter shade
        "#FFD700",
        "#FFDAB9",      // Lighter shade
        "#FFB6C1",
        "#FFDEAD",      // Lighter shade
        "#FFC0CB",
        "#FFD700",      // Lighter shade
        "#FFEC8B",
        "#FFEC8B",      // Lighter shade
        "#FFA500",
        "#FFA07A",      // Lighter shade
        "#FF7F50",
        "#FFB6C1",      // Lighter shade
        "#FFDEAD",
        "#FFD700",      // Lighter shade
        "#FFDAB9",
        "#FFA500",      // Lighter shade
        "#FFA07A",
      
        // Shades of "#33FFDA"
        "#33FFDA",      // Base color
        "#00FFFF",      // Lighter shade
        "#7FFFD4",
        "#40E0D0",      // Lighter shade
        "#20B2AA",
        "#00CED1",      // Lighter shade
        "#00FFFF",
        "#AFEEEE",      // Lighter shade
        "#ADD8E6",
        "#00BFFF",      // Lighter shade
        "#87CEEB",
        "#00B2EE",      // Lighter shade
        "#B0E0E6",
        "#00BFFF",      // Lighter shade
        "#B0C4DE",
        "#00CED1",      // Lighter shade
        "#B0E2FF",
        "#00B2EE",      // Lighter shade
        "#B2DFEE",
        "#00FFFF",      // Lighter shade
        "#87CEFA",
      
        // Shades of "#FFA533"
        "#FFA533",      // Base color
        "#FFD700",      // Lighter shade
        "#FFEC8B",
        "#FFFFE0",      // Lighter shade
        "#FFE4B5",
        "#FFEC8B",      // Lighter shade
        "#FFD700",
        "#FFE4B5",      // Lighter shade
        "#FFDAB9",
        "#FFEC8B",      // Lighter shade
        "#FFFAF0",
        "#FFD700",      // Lighter shade
        "#FFA500",
        "#FFA07A",      // Lighter shade
        "#FF8333",
        "#FFDAB9",      // Lighter shade
        "#FFDEAD",
        "#FFA500",      // Lighter shade
        "#FFA07A",
        "#FFD700",      // Lighter shade
        "#FF8333",
      ];
    
      
  return (
    <Swiper
      effect="cards"
      grabCursor={true}
      modules={[EffectCards]}
      className="flex items-center  justify-center h-[40vh] w-[40vw] "
    >
      {colors.map((item, i) => (
        <SwiperSlide
          key={i}
          style={{ backgroundColor: item }}
          className="flex items-center rounded-lg justify-center  shadow-md shadow-black"
        >
          <div
            style={{ backgroundColor: item }}
            className="h-[100px] w-[100px] rounded-lg"
          >
            {/* Slide content here */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Circle;
