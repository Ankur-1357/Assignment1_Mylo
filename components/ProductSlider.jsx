"use client";

import Image from "next/image";
import {Swiper,SwiperSlide} from "swiper/react";
import {FreeMode,Mousewheel} from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "./ProductCard";

export default function ProductSlider({products}){
    return (
      <div className="w-full  py-6 ">
        <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold text-black"> Price Just For You</h2>
        </div>
        <div className=" justify-center items-center  ">
        <Swiper
          modules={[FreeMode,Mousewheel]}
          grabCursor={true}
          freeMode={true}
          spaceBetween={50}
          slidesPerView={4.5}
          mousewheel={{
          forceToAxis: true,     
          sensitivity: 1,
          releaseOnEdges: true,
          }}
          >
          {products.map((p,index)=>(
            <SwiperSlide key={index} className="pb-2">
              <div >
                <ProductCard product={p}/>
              </div>
              
            </SwiperSlide>
          ))}
          </Swiper>
          </div>
        </div>

      </div>
    );
}