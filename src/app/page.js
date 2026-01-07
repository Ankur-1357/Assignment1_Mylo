"use client" ;
import Image from "next/image";
import HomeSlider from "../../components/HomeSlider";
import ProductCard from "../../components/ProductCard";
import { useState } from "react";

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
];

export default function Home() {
  const [visibleCount,setVisibleCount]=useState(1);

  return (
    <div className="flex  min-h-screen flex-col bg-white font-sans">
      <div className=" flex items-center w-full h-12  justify-center text-amber-50 bg-black"><p className="text-center animate-marquee">This changing weather, protect your family with big discounts! Use code:<b>FIRST10</b> </p></div>
      <div className="flex flex-row items-center w-full h-25 px-10   bg-amber-50">
        <div><Image src="/108334.png" alt="Photo" height={100} width={100} /></div>
        <div className="flex px-5"></div>
        <div className="flex flex-row text-black m-5 bg-[#eeeeee] rounded-full text-center items-center pl-5"><input className=" w-150 h-12" placeholder="Search"></input>
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
        <div className="flex justify-center h-25 w-25"><button onClick={()=>{setVisibleCount(1)}} className=" bg-red-600 font-[13px] justify-center items-center text-center rounded-2xl w-full hover:cursor-pointer hover:bg-amber-300 hover:text-black ">button 1</button></div>
        <div className="flex justify-center h-25 w-25"><button onClick={()=>{setVisibleCount(2)}} className=" bg-red-600 font-[13px] justify-center items-center text-center rounded-2xl w-full hover:cursor-pointer hover:bg-amber-300 hover:text-black">button 2</button></div>
        <div className="flex justify-center h-25 w-25"><button onClick={()=>{setVisibleCount(3)}} className=" bg-red-600 font-[13px] justify-center items-center text-center rounded-2xl w-full hover:cursor-pointer hover:bg-amber-300 hover:text-black">button 3</button></div>
      </div>
      <div className="flex flex-row gap-x-3 items-center justify-center">
        {products.slice(0,visibleCount).map((p,idx)=>(
          <ProductCard key={idx} product={p}/>
        ))}
      </div>
    </div>
  );
}
