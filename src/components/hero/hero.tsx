'use client'
import Image from 'next/image';
import heroimg from  './hero.png';
import Orange from '../orange';
import HeadingL from '../heading';
import hero1 from './hero1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Link from 'next/link';
export default function Hero(){
    return <section className="max-w-screen-lg mx-auto p-6">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    // onSlideChange={() => console.log('slide change')}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    className='h-[70dvh] mb-2'
                    >
                    <SwiperSlide><Image className='m-auto h-full object-contain' src={hero1} alt='download vookad' /></SwiperSlide>
                    <SwiperSlide>
                        <video autoPlay={true} src='hero2.mp4' className='m-auto h-full'>
                            <source src='hero2.mp4' type="video/mp4" />
                        </video>
                    </SwiperSlide>
                </Swiper>
                <Link href={"#"} className='m-2'>
                    <div className='bg-[#FFC400] rounded-xl p-3 w-full text-3xl font-bold text-center'>
                        Download App
                    </div>
                </Link>
            </section>
    ;
}