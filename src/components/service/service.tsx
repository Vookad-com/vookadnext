import HeadingL from "../heading"
import Orange from "../orange"

import meal_i from "./assets/meal.png";
import popcorn_i from "./assets/popcorn.png";
import packet_i from "./assets/packet.png";
import Cat_Card2 from "./card";
import for_i from "./assets/for.png";
import subs_i from "./assets/dishes.png";
import Image from "next/image";
export default function Service(){
    return (
        <>
            <section  className="w-full overflow-visible relative sm:mb-[15%] flex">
                <div className="w-5/6 m-auto p-2 py-6 rounded-xl bg-[#F8EA65] min-h-[15rem] h-5/6 relative">
                    <HeadingL>Your <br /> Healthy <Orange>Meal</Orange> Partner</HeadingL>

                </div>
                <div className="absolute  sm:top-3/4 right-0 -bottom-[20%] sm:bottom-[unset] md:right-[2%] z-10 w-full flex  justify-end origin-bottom-right">
                    <Image className=" object-contain max-w-md sm:scale-125 w-5/6 origin-bottom-right rounded-lg" src={for_i} alt="serving Hundreds of happy customers daily" />
                </div>
            </section>
            <section  className="w-full overflow-visible relative mt-[30%]">
                <div className="w-5/6 flex items-end justify-end m-auto p-2 py-6 rounded-xl bg-[#FB6107] min-h-[15rem] h-5/6 relative text-white">
                    <HeadingL>Best Seller Subscriptions*</HeadingL>
                </div>
                <div className="absolute  sm:bottom-1/4 left-0 bottom-[40%] sm:top-[unset] md:left-[2%] z-10 w-full flex  justify-start origin-bottom-left">
                    <Image className=" object-contain max-w-md sm:scale-125 -translate-x-3 w-5/6 origin-bottom-left rounded-lg" src={subs_i} alt="serving Hundreds of happy customers daily" />
                </div>
            </section>
        </>
    )
}