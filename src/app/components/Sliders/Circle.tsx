import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

interface ColorItem {
  item: string;
}

interface CircleProps {
  colors: ColorItem[];
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
}

function Circle({ colors, setSelectedColor }: CircleProps) {
  const handleColorSelection = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <Swiper
      effect="cards"
      grabCursor={true}
      modules={[EffectCards]}
      className="flex items-center justify-center h-[40vh] w-[40vw]"
    >
      {colors.map((item, i) => (
        <SwiperSlide
          key={i}
          style={{ backgroundColor: item.item }}
          className="flex items-center rounded-lg justify-center shadow-md shadow-black"
          onClick={() => handleColorSelection(item.item)}
        >
          <div
            style={{ backgroundColor: item.item }}
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
