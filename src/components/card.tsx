import Image, { StaticImageData } from "next/image";
import img from "./assets/bottle.png";
import Link from "next/link";
import Orange from "./orange";
export default function Cat_Card({text, img}:{text:string; img:StaticImageData}){
    return(
        <div className="flex flex-col items-center justify-center gap-2">
            <Image src={img} alt={text}/>
            <h3 className="text-lg font-bold">{text}</h3>
            <Link className="font-semibold" href={"#"}>
                <Orange>
                    Order Now &gt;
                </Orange>
            </Link>
        </div>
    )
}