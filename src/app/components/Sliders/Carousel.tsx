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

function Carousel() {
  const img1 = "/img1.jpg";
  const img2 = "/img2.jpg";
  const img3 = "/img3.jpg";
  const img4 = "/img4.jpg";
  const img5 = "/img5.jpg";
  const img6 = "/img6.jpg";
  const img7 = "/img7.jpg";

  const slides = [img1, img2, img3, img4, img5, img6, img7];

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
            src={item}
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
