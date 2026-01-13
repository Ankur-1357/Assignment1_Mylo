"use client" ;
import Image from "next/image";
import HomeSlider from "../../components/HomeSlider";
import ProductCard from "../../components/ProductCard";
import { useState } from "react";
import ProductSlider from "../../components/ProductSlider";
import VideoProductSlider from "../../components/VideoProductSlider";
import BottomBar from "../../components/BottomBar";
import ArticlesDiv from "../../components/ArticlesDiv";
import AwardsSection from "../../components/AwardsSection";
const slides=[
    {src: "/Image1.png",alt: "Image 1"},
    {src: "/Image2.png",alt: "Image 2"},
    {src: "/Image3.png",alt: "Image 3"}
];

const products=[
  {
    image:"/CardImage2.png",
    tag:"SKIN BRIGHTENING",
    title:"Vitamin C facewash - 100ML",
    rating:4.2,
    reviews:3413,
    price:99,
    mrp:249,
    discount:61,
  },
  {
    image:"/CardImage2.png",
    tag:"SKIN BRIGHTENING",
    title:"Vitamin C facewash - 100ML",
    rating:4.2,
    reviews:3413,
    price:99,
    mrp:249,
    discount:61,
  },
  {
    image:"/CardImage2.png",
    tag:"SKIN BRIGHTENING",
    title:"Vitamin C facewash - 100ML",
    rating:4.2,
    reviews:3413,
    price:99,
    mrp:249,
    discount:61,
  },
  {
    image:"/CardImage2.png",
    tag:"SKIN BRIGHTENING",
    title:"Vitamin C facewash - 100ML",
    rating:4.2,
    reviews:3413,
    price:99,
    mrp:249,
    discount:61,
  },
  {
    image:"/CardImage2.png",
    tag:"SKIN BRIGHTENING",
    title:"Vitamin C facewash - 100ML",
    rating:4.2,
    reviews:3413,
    price:99,
    mrp:249,
    discount:61,
  },
  {
    image:"/CardImage2.png",
    tag:"SKIN BRIGHTENING",
    title:"Vitamin C facewash - 100ML",
    rating:4.2,
    reviews:3413,
    price:99,
    mrp:249,
    discount:61,
  },
  {
    image:"/CardImage2.png",
    tag:"SKIN BRIGHTENING",
    title:"Vitamin C facewash - 100ML",
    rating:4.2,
    reviews:3413,
    price:99,
    mrp:249,
    discount:61,
  },
  {
    image:"/CardImage2.png",
    tag:"SKIN BRIGHTENING",
    title:"Vitamin C facewash - 100ML",
    rating:4.2,
    reviews:3413,
    price:99,
    mrp:249,
    discount:61,
  }
];
const VideoProducts=[
  {
    video:"/Video.mp4",
    image:"/CardImage2.png",
    price:499,
    mrp:699,
    discount:29,
  },
  {
    video:"/Video.mp4",
    image:"/CardImage2.png",
    price:499,
    mrp:699,
    discount:29,
  },
   {
    video:"/Video.mp4",
    image:"/CardImage2.png",
    price:499,
    mrp:699,
    discount:29,
  },
   {
    video:"/Video.mp4",
    image:"/CardImage2.png",
    price:499,
    mrp:699,
    discount:29,
  },
   {
    video:"/Video.mp4",
    image:"/CardImage2.png",
    price:499,
    mrp:699,
    discount:29,
  },
   {
    video:"/Video.mp4",
    image:"/CardImage2.png",
    price:499,
    mrp:699,
    discount:29,
  },
   {
    video:"/Video.mp4",
    image:"/CardImage2.png",
    price:499,
    mrp:699,
    discount:29,
  },
   {
    video:"/Video.mp4",
    image:"/CardImage2.png",
    price:499,
    mrp:699,
    discount:29,
  }
];

export default function Home() {
  const [visibleCount,setVisibleCount]=useState(1);

  return (
    <div className="flex  min-h-screen flex-col bg-white font-sans">
      <div className=" flex items-center w-full h-12  justify-center text-amber-50 bg-black"><p className="text-center animate-marquee overflow-hidden">This changing weather, protect your family with big discounts! Use code:<b>FIRST10</b> </p></div>
      <div className="flex flex-row items-center w-full h-25 px-10   bg-amber-50">
        <div><Image src="/108334.png" alt="Photo" height={100} width={100} /></div>
        <div className="flex px-5"></div>
        <div className="flex flex-row text-black m-5 bg-[#eeeeee] rounded-full text-center items-center pl-5"><input className="w-150 max-w-full h-12 bg-transparent outline-none" placeholder="Search"></input>
          <div className="flex items-center justify-center p-5"><Image src="/search_Icon.png" alt="Icon here" height={25} width={25} /></div>
        </div>
        <div className="flex px-10"></div>
        <div className="flex flex-row">
          <div className="flex flex-row"><div className="bg-gray-50 rounded-full p-5"><Image src="/Orders_Icon.png" alt="orders" height={25} width={25}/></div><div className="items-center flex text-black ml-5">Orders</div></div>
          <div className="flex flex-row mx-5"><div className="bg-gray-50 rounded-full p-5"><Image src="/user_icon.png" alt="orders" height={25} width={25}/></div><div className="items-center flex text-black ml-5">Profile</div></div>
          <div className="flex flex-row mx-5"><div className="bg-gray-50 rounded-full p-5"><Image src="/shopping-cart.png" alt="orders" height={25} width={25}/></div><div className="items-center flex text-black ml-5">Cart</div></div>
          
        </div>
      </div>
      <hr/>
      <div className="flex flex-row justify-between items-center w-full h-15 px-10   bg-amber-50">
        <div className="text-lg text-gray-400 font-bold ">Mylo Joyful Days</div>
        <div className="text-lg text-gray-400 font-bold ">Skin Care</div>
        <div className="text-lg text-gray-400 font-bold ">Hair Care</div>
        <div className="text-lg text-gray-400 font-bold ">Preg & Moms</div>
        <div className="text-lg text-gray-400 font-bold ">Baby Care</div>
        <div className="text-lg text-gray-400 font-bold ">Diapers</div>
      </div>
      <div className="px-4 py-6">
        <HomeSlider slides={slides}/>
      </div>
      <div className="flex flex-row justify-center items-center h-12.5 w-full gap-x-5">
        <div><Image src="/Mylo_text.png" alt="mylopromise" height={100} width={100}/></div>
        <div className="font-serif text-3xl text-[#7E5C5C]">
         Promise
        </div>
      </div>
      <div className="flex flex-row justify-between h-50 w-full gap-x-10 px-40">
        <div className="flex flex-col items-center">
          <Image src="/bowlicon.png" alt="Ingredients" height={80} width={80} className="mb-0.5"/>
          <div className="text-black"><p>Made with <b>Effective</b><br/><center>Ingredients</center></p></div>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/leaficon.png" alt="Ingredients" height={80} width={80} className="mb-0.5"/>
          <div className="text-black"><p>Made <b>Safe</b><br/><center>Certified</center></p></div>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/expertsicon.png" alt="Ingredients" height={80} width={80} className="mb-0.5"/>
          <div className="text-black"><p>100+ <b>Expert Verified</b><br/><center>Products</center></p></div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center h-12.5 w-full gap-x-5">
        <div className="font-serif text-3xl text-[#7E5C5C] pb-7">
         Bestsellers
        </div>
      </div>
      <div className="flex flex-row items-center justify-center pb-4 gap-x-3">
        <div className="flex justify-center h-25 w-25"><button onClick={()=>{setVisibleCount(1)}} className=" bg-red-600 font-[13px] justify-center items-center text-center rounded-2xl w-full hover:cursor-pointer hover:bg-amber-300 hover:text-black font-bold">Button 1</button></div>
        <div className="flex justify-center h-25 w-25"><button onClick={()=>{setVisibleCount(2)}} className=" bg-red-600 font-[13px] justify-center items-center text-center rounded-2xl w-full hover:cursor-pointer hover:bg-amber-300 hover:text-black font-bold">Button 2</button></div>
        <div className="flex justify-center h-25 w-25"><button onClick={()=>{setVisibleCount(3)}} className=" bg-red-600 font-[13px] justify-center items-center text-center rounded-2xl w-full hover:cursor-pointer hover:bg-amber-300 hover:text-black font-bold">Button 3</button></div>
      </div>
      <div className="flex flex-row gap-x-3 items-center justify-center">
        {products.slice(0,visibleCount).map((p,idx)=>(
          <ProductCard key={idx} product={p}/>
        ))}
      </div>
      <div className="w-full flex justify-center mt-2 px-35">
        
          <Image
            src="/trial.png"
            alt="Trial Packs"
            width={1000}
            height={200}
            className="w-full  rounded-2xl"
            priority
          />
        
      </div>
        <ProductSlider products={products}/>
        <div className="w-full h-340 py-6 bg-[#FFFCF5] ">
          <div className="w-full mt-5 px-6">
            <div className="max-w-[1400px] mx-auto flex gap-2 ">
              <div className="flex-1">
              <img src="/Mylo_Branding.png" alt="mylobranding" className="rounded-2xl  w-full h-[400px]"/>
              </div>
            
            <div className="w-[380px] ">
              <img src="/diapers.png" alt="mylobranding" className="rounded-2xl w-full h-[400px]"/>
            </div>
            </div>
          </div>
          <div className="w-full mt-5 px-6">
            <div className="max-w-[1400px] mx-auto flex flex-row gap-2 ">
              <div className="">
              <img src="/babysun.png" alt="mylobranding" className="rounded-2xl  w-full h-[400px]"/>
              </div>
              <div className="">
              <img src="/babywellness.png" alt="mylobranding" className="rounded-2xl  w-full h-[400px]"/>
              </div>
              <div className="">
              <img src="/babycare.png" alt="mylobranding" className="rounded-2xl  w-full h-[400px]"/>
              </div>
            
            </div>
          </div>
          <div className="w-full mt-5 px-6">
            <div className="max-w-[1400px] mx-auto flex flex-row gap-2 ">
              <div className="">
              <img src="/feeding.png" alt="mylobranding" className="rounded-2xl  w-full h-[400px]"/>
              </div>
              <div className="">
              <img src="/clothing.png" alt="mylobranding" className="rounded-2xl  w-full h-[400px]"/>
              </div>
              <div className="">
              <img src="/babygear.png" alt="mylobranding" className="rounded-2xl  w-full h-[400px]"/>
              </div>
            
            </div>
          </div>
          <div>
            <div className="flex justify-center pt-5"><div className=" flex w-[523.6px] h-[59.2px] justify-center " ><button className=" bg-red-600 text-[22px] text-[#fff] justify-center items-center text-center   font-bold rounded-2xl w-full hover:cursor-pointer hover:bg-amber-300 hover:text-black">Explore Baby Products </button></div></div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 mb-[30px]"> 
            <p className="text-[#675B5A] text-[30px] "><b>Effective, Backed by Real Reviews</b></p>
        </div>
       <div>
         <VideoProductSlider products={VideoProducts}/>
       </div>
       <div className="flex items-center justify-center mt-5 mb-[30px]"> 
            <p className="text-[#675B5A] text-[30px] "><b>Real people, Real results</b></p>
        </div>
        <div className="flex flex-row w-full ml-4 mr-4 pb-5 justify-center gap-x-1.5">
          <img src="rating_1.png" alt="rating1" className="w-70 shadow-2xl rounded-2xl"/>
          <img src="rating_2.png" alt="rating1" className="w-70 shadow-2xl rounded-2xl"/>
          <img src="rating_3.png" alt="rating1" className="w-70 shadow-2xl rounded-2xl"/>
          <img src="rating_4.png" alt="rating1" className="w-70  shadow-2xl rounded-2xl"/>
        </div>

        <div className="flex items-center justify-center mt-5 mb-[30px]"> 
            <p className="text-[#675B5A] text-[30px] "><b>Stay Informed and Inspired</b></p>
        </div>
            <ArticlesDiv/>
          <div>
            <div className="flex justify-center pt-2"><div className=" flex w-[550px] h-[48px] justify-center " ><button className=" bg-red-600 text-[22px] text-[#fff] justify-center items-center text-center   font-bold rounded-2xl w-full hover:cursor-pointer hover:bg-amber-300 hover:text-black">View All</button></div></div>
          </div>
          <div className=" flex justify-center items-center w-full  h-[500px]">
            <img src="Big_image.png" alt="big" className="rounded-2xl w-[1000px] "/>
          </div>
          <AwardsSection/>
          <img src="MyloDesign.png" alt="footer" className="w-full h-100"/>
          <BottomBar/>
          
    </div>
  );
}
