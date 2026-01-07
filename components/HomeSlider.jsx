"use client";

import Image from "next/image";
import {Swiper,SwiperSlide} from "swiper/react";
import {Autoplay,Navigation,Pagination} from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function HomeSlider({slides}){
    return (
    <div className="relative w-full">
    <Swiper
      modules={[Autoplay,Navigation,Pagination]}
      autoplay={{delay:3500,disableOnInteraction:false}}
      navigation
      pagination={{clickable: true}}
      loop
      spaceBetween={12}
      slidesPerView={1}
      className="w-full"
      >
        {slides.map((slide,index)=>(
            <SwiperSlide key={index}>
                <div className="relative h-100 w-full rounded-2xl overflow-hidden">
                <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="100vw"
                    className="contain"
                    priority={index===0}
                ></Image>
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
      </div>
    );
}