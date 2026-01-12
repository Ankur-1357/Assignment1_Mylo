"use client";

import Image from "next/image";
import {Swiper,SwiperSlide} from "swiper/react";
import {FreeMode,Mousewheel} from "swiper/modules";
import VideoCard from "./VideoCard";

import "swiper/css";
import "swiper/css/navigation";


export default function VideoProductSlider({products}){
    return (
      <div className="w-full  py-6 ">
        <div className="max-w-[1280px] mx-auto px-6">
       
        <div className=" justify-center items-center  ">
        <Swiper
          modules={[FreeMode,Mousewheel]}
          grabCursor={true}
          freeMode={true}
          spaceBetween={40}
          slidesPerView={4.5}
          mousewheel={{
          forceToAxis: true,     
          sensitivity: 1,
          releaseOnEdges: true,
          }}
          >
          {products.map((p,index)=>(
            <SwiperSlide key={index} className="pb-2">
              <div>
                <VideoCard product={p}/>
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
          </div>
        </div>

      </div>
    );
}