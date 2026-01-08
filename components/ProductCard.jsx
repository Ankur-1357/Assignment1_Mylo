import Image from "next/image";
export default function ProductCard({product}){
    return (
    <div className="flex flex-col h-115 w-60 bg-amber-100 shadow-2xl rounded-2xl">
        <div className="flex items-center justify-center w-full ">
             <Image src={product.image} alt="Product Here" height={125} width={300} className=" rounded-t-2xl" />
        </div>
        <div className="flex flex-col justify-start ml-2">
            <div className="text-[#00000099]"><p>{product.tag}</p></div>
            <div className="text-[#000000DE] text-[16px]"><p><b>{product.title.split(" - ")[0]} -<br />
              {product.title.split(" - ")[1]}</b></p></div>
            <div className="flex flex-row mt-2 gap-x-2">
                <Image src="/RatingIcon.png" alt="rating" height={20} width={20}/>
                <div className="text-[#000000] text-[16px]"><p>{product.rating}</p></div><div className="text-[#898989BD] text-[14px]"><p>{product.reviews}</p></div>
                
            </div>
            <div className="flex flex-row mt-2 gap-x-2">
                <div className="text-[#000000DE] text-[18px]"><p><b>₹{product.price}</b></p></div><div className="text-[#898989BD] text-[16px]"><p><s>₹{product.mrp}</s></p></div><div className="text-[#20B2AACC] text-[14px]"><p>{product.discount}</p></div>

            </div>
        </div>
        <div className="flex justify-center pt-3"><div className=" flex h-10.5 w-[90%] justify-center" ><button className=" bg-red-600 font-[13px] justify-center items-center text-center rounded-2xl w-full hover:cursor-pointer hover:bg-amber-300 hover:text-black font-bold ">Add to Cart</button></div></div>

     
    </div>
    );
}