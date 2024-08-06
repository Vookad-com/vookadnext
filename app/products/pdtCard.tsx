"use client"
import Image from "next/image"
import { product } from "./products"
import { toast } from "sonner"
import veg_i from './images/veg.svg'
import nonveg_i from './images/non-veg.svg'
const PdtCard = ({pdt:e}:{pdt:product}) =>{
    return (
        <div className="border border-orange rounded-xl overflow-hidden">
        <Image className='w-[500px] h-[250px] object-cover' src={"/assets"+e.imglink} width={500} height={250} alt={e.name} />
        <div className='flex flex-col justify-between py-5 px-3'>
            <div className='flex justify-between gap-4 items-start text-lg'>
                    {
                        e.type == 1?(
                            <Image className="pt-2" src={veg_i} alt="veg" />
                        ):(
                            <Image className="pt-2" src={nonveg_i} alt="non-veg" />
                        )
                    }
                    <div>
                        <h2 className='font-semibold'>{e.name}</h2>
                        <p className='text-sm'>{e.description}</p>
                    </div>
                </div>
            <div className='text-sm flex mt-5 ml-6 justify-between items-center'>
                <h3 className='text-orange'>Rs. {e.price}</h3>
                <button onClick={()=>{
                    toast("Added to cart")
                }} className='bg-orange p-5 py-1 rounded-lg text-white'>Add</button>
            </div>
        </div>

    </div>
    )
}

export default PdtCard