'use client'
import { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import styles from './header.module.css';
import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [user, setUser] = useState(auth.currentUser);
  function logout(){
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
    <Navbar className={`mx-auto bg-black max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 border-none ${styles.nav}`}>
      <div className={`container mx-auto flex items-center justify-between text-blue-gray-900 ${styles.container}`}>
        <IconButton
          variant="text"
          className={`${styles.hamburg} h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden`}
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
        <div className={styles.wrapper}>
            <Link href={`/`}><Image className={styles.brand} width={100} height={48} src={`/assets/vookad.svg`} alt={`Vookad`}/></Link>
            <div className="hidden lg:block">{navList}</div>
        </div>
        {
          user? <Button onClick={logout} >Logout</Button>: <Link href={`/login`} className="mb-2">
          <span><Image src={`/assets/userico.svg`} width={20} height={20} alt={`login`}/></span>
      </Link>
        }
      </div>
      <Collapse open={openNav} className={styles.mobilNav}>
        { openNav && <div className={`container mx-auto ${styles.mobileItem}`}>
          {navList}
        </div>}
      </Collapse>
    </Navbar>
  );
}

