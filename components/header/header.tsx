'use client'
import { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import styles from './header.module.css';
import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";
import ham from "./ham.webp";

import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [user, setUser] = useState(auth.currentUser);
  const logout = () => {
      signOut(auth)
  }
useEffect(()=>{
  auth.onIdTokenChanged((e)=>{
    setUser(e)
  })
})
 
  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography> */}
    </ul>
  );
 
  return (
    <Navbar className={`py-2 mt-6 lg:py-4 border-none ${styles.nav}`}>
      <div className={`container mx-auto flex items-center justify-between text-blue-gray-900 ${styles.container}`}>
        <div className={styles.wrapper}>
            <Link className="mr-4" href={`/`}><Image className={styles.brand} width={100} height={48} src={`/assets/vookad.svg`} alt={`Vookad`}/></Link>
            {/* <div className="hidden lg:block">{navList}</div> */}
        </div>
        <Sheet>
          <SheetTrigger>
              <button className="px-4 mr-4 rounded-xl">
              <Image src={ham} width={50} className=" rounded-xl" height={50} alt="Ham" />
              </button>
          </SheetTrigger>
          <SheetContent className="">
            <SheetHeader>
              <SheetTitle>Links</SheetTitle>
            </SheetHeader>
            <div className="py-4">
              <ul className="grid grid-cols-1 gap-5">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>
                  <Link href={`/products/`}>Our products</Link>
                </li>
                <li>
                  <Link href={`/about-us`}>About us</Link>
                </li>
                <li>
                  <Link href={`/refund-policy`}>Refund policy</Link>
                </li>
                <li>
                  <Link href={`/privacy-policy`}>Privacy policy</Link>
                </li>
                <li>
                  <Link href={`/terms-and-conditions`}>Terms & conditions</Link>
                </li>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Navbar>
  );
}

