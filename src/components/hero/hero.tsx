import Image from 'next/image';
import heroimg from  './hero.png';
import Orange from '../orange';
import HeadingL from '../heading';
export default function Hero(){
    return <section className="grid gap-10 grid-cols-2 items-center justify-center max-w-screen-lg mx-auto p-6">
        <div>
            <HeadingL>Fastest <Orange>Delivery</Orange> & Easy Pickup</HeadingL>
        </div>
        <div>
            <Image src={heroimg} alt='order please'></Image>
        </div>
    </section>
    ;
}