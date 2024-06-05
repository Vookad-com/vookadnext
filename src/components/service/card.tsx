import Image, { StaticImageData } from "next/image";
import img from "./assets/bottle.png";
import Link from "next/link";
export default function Cat_Card2({text, description, img}:{text:string; description:string;img:StaticImageData}){
    return(
        <div className="flex flex-col items-start justify-center text-center gap-2">
            <Image height={250} width={250} src={img} alt={text}/>
            <h3 className="text-lg font-bold">{text}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    )
}