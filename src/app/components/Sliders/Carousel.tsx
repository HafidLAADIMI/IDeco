"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, EffectCoverflow, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import Image from "next/image";

interface Sliders {
  item: string;
}

interface PropsItem {
  slides: Sliders[];
}

function Carousel({ slides }: PropsItem) {
  return (
    <Swiper
      breakpoints={{
        340: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      effect="coverflow"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination, EffectCoverflow, A11y]}
      className="w-[70vw] h-[30vh] bg-gronna shadow-sm shadow-black"
    >
      {slides.map((item, i) => (
        <SwiperSlide key={i} className="rounded-lg lg:h-[30vh] lg:w-[70vw] shadow-md shadow-black">
          <Image
            src={item.item}
            height={500}
            width={500}
            alt={`image ${i + 1}`}
            className="rounded-md object-cover h-full w-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
