import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import styles from '@/components/landing.module.css'
import { product, products } from '../../products';
import PdtCard from '../../pdtCard';
const url = process.env.NEXT_PUBLIC_API || "http://localhost:3000"
const Products = async ({params:{category}}:{params:{category:string}}) =>{
    const res = await fetch(url+"/products/api?category="+category)
    const data = products.filter(e => e.category == category)
    return (
        <main className={styles.main}>
            <Header></Header>
            <h1 className='text-3xl uppercase font-bold p-5 max-w-5xl grid grid-cols-3 m-auto gap-5'>
                {category}
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