import Image from "next/image";
import burger_i from "./assets/burger.png"
import waffle_i from "./assets/waffle.png"
import taco_i from "./assets/taco.png"
const Banner = () =>{
    return (
        <section className="m-5">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div>
                        <Image src={burger_i} alt="burger vookad" />
                    </div>
                    <div className="flex flex-col items-end">
                        <Image src={waffle_i} alt="vookad waffle"/>
                        <Image src={taco_i} alt="vookad taco" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;