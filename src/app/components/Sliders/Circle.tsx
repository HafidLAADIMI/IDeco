import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
interface Colors{
    item:string
}
interface PropsItem {
    colors:Colors[]
}
function Circle({colors}:PropsItem) {      
  return (
    <Swiper
      effect="cards"
      grabCursor={true}
      modules={[EffectCards]}
      className="flex items-center  justify-center h-[40vh] w-[40vw] "
    >
      {colors.map((item, i) => (
        (item && (

            <SwiperSlide
            key={i}
            style={{ backgroundColor: item.item }}
          className="flex items-center rounded-lg justify-center  shadow-md shadow-black"
        >
          <div
            style={{ backgroundColor: item.item }}
            className="h-[100px] w-[100px] rounded-lg"
          >
            {/* Slide content here */}
          </div>
        </SwiperSlide>
    ))
      ))}
      </Swiper>
  );
}

export default Circle;
