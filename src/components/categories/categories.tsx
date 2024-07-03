import Image from "next/image";
import HeadingL from "../heading";
import women_i from "./assets/women.png"
const Categories = () =>{
    return (
        <section>
            <div className="container max-w-screen-lg m-auto">
                <div className="grid grid-cols-2 items-start gap-4 my-5 relative min-h-[17rem] m-auto max-w-xl">
                    <HeadingL>Healthly Homemade Dishes</HeadingL>
                    <div className="flex justify-end md:relative h-full absolute right-0 -bottom-5 -z-10 w-full">
                        <Image className="origin-bottom-right max-h-[17rem] object-contain h-full w-2/3 sm:w-auto p-2 sm:p-1" src={women_i} alt="women empowerment" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories;