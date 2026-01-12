import Image from "next/image";
import { useEffect, useRef } from "react";
export default function VideoCard({product}){
        const videoRef = useRef(null);
        useEffect(() => {
            if (videoRef.current) {
            videoRef.current.play().catch(() => {});
            }
        }, []);
    return (
    <div className=" relative flex flex-col  w-70 bg-amber-100 shadow-2xl rounded-2xl overflow-visible">
      <div className="relative">
        <div className=" flex items-center justify-center h-[400px] w-full overflow-hidden rounded-t-2xl   ">
             <video ref={videoRef} autoplay src={product.video} loop muted playsInline preload="auto" className=" h-full w-full object-cover" >  </video>
        </div>
            <div className="pb-0.5-">
            <img src={product.image} alt="small image" className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2  h-20 w-20 rounded-xl shadow-lg p-1 z-10"/>
            </div>
      </div>


        <div className="pt-14 px-2 text-center">
        <p className="text-[#000000de] text-[14px] leading-snug">
          Increase Breast Milk Supply with <br /> LactoMama ™ Lactation Granules...
        </p>

        <div className="flex items-center justify-center mt-2 gap-x-2">
          <p className="text-[#000000DE] text-[18px] font-bold">₹{product.price}</p>
          <p className="text-[#898989BD] text-[16px] line-through">₹{product.mrp}</p>
          <p className="text-[#20B2AACC] text-[14px]">{product.discount}</p>
        </div>
      </div>
    </div>
    
    );
}