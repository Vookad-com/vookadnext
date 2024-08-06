import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import styles from '@/components/landing.module.css'
import { product } from './products';
import Image from 'next/image';
import veg_i from './images/veg.svg'
import nonveg_i from './images/non-veg.svg'
import { toast } from "sonner"
import PdtCard from './pdtCard';

const url = process.env.NEXT_PUBLIC_API || "http://localhost:3000"
const Products = async () =>{
    const res = await fetch(url+"/products/api")
    const data:product[] = await res.json()
    return (
        <main className={styles.main}>
            <Header></Header>
            <h1 className='text-3xl font-bold p-5 max-w-5xl grid grid-cols-3 m-auto gap-5'>
                All Products
            </h1>
            <section className='p-5 max-w-5xl grid grid-cols-3 m-auto gap-5'>
                {
                    data.map((e,i) =><PdtCard pdt={e} key={i} />)
                }
            </section>
            <Footer></Footer>
        </main>
    )
}

export default Products;