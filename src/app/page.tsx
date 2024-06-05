import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Image from "next/image";
import AppImg from "@/components/h23btg4n.png"
import Categories from "@/components/categories/categories";
import fastest from "./fastest.png";
import Service from "@/components/service/service";
import Banner from "@/components/banner/banner";
export default function Home() {
  return (
    <main className="">
      <Header></Header>
      <Hero></Hero>
      <Image src={AppImg} className="max-w-screen-lg mx-auto my-8" alt="Download vookad app"></Image>
      <Categories />
      <Image src={fastest} className="w-full" alt="fastest delivery vookad" ></Image>
      <Service></Service>
      <Banner></Banner>
      <footer style={{
        background: "url('/bg.png') green"
      }} className="h-[20rem] relative">
        <div className="text-white rounded-t-2xl absolute bottom-0 left-[50%] translate-x-[-50%] bg-black p-8 m-auto container w-[90%] max-w-6xl flex justify-around">
          <h3>
            Vookad
          </h3>
          <p>
            @ 2024 Neuvision Technologies
          </p>
          <div>
            Socials
          </div>
        </div>
      </footer>
    </main>
  );
}
