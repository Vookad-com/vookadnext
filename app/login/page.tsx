"use client";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import Header from '@/components/header/header'
import styles from '@/components/login.module.css'
import Footer from '@/components/footer/footer';
import { Button } from "@material-tailwind/react";
import 'swiper/css/bundle';
import { auth, db } from "@/firebase/config";
import { RecaptchaVerifier, signInWithPhoneNumber, signInWithRedirect } from "firebase/auth";
import google from '@/public/assets/google.png'

import {
    getDoc,
    doc,
    setDoc,
    query,
    collection,
    where,
    getDocs,
} from 'firebase/firestore';
import TextField from '@mui/material/TextField';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useState, useEffect, useRef } from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

declare global {
  interface Window {
    recaptchaVerifier: any; // Use the appropriate type for 'recaptchaVerifier'
    confirmationResult: any; // Use the appropriate type for 'recaptchaVerifier'
  }
}

const STATUS = {
    STARTED: 'Started',
    STOPPED: 'Stopped',
  }

const plan = 
    {
      title: '1 TB/day',
      under: 'Unlimited calls and SMS',
      list: ['Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet'],
      button: 'Check 1.5 GB/day plans',
    }

export default function Login() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <section className={styles.login}>
        <div className={styles.loginContainer}>
            <div className={styles.prompt}>
                <h2>
                    Manage your healthy Life with Vookad
                </h2>
                <div className={styles.card2}>
                    <ol>
                      {plan.list.map((item,i) => {
                        return (
                          <li key={i}>
                            <Image src={`/assets/tick.svg`} width={24} height={24} alt="☑️" />
                            <span>{item}</span>
                          </li>
                        )
                      })}
                    </ol>
                  </div>
            </div>
            <LoginBox />
        </div>
      </section>
      <Footer></Footer>
    </main>
  )
}

const provider = new GoogleAuthProvider();

function LoginBox(){
    const [logsign ,setmethod] = useState("login");
    const router = useRouter();
    const shift = logsign == "login" ? {transform:"translateX(50%)"} : {transform:"translateX(-50%)"};

    const [phone, setPhone] = useState(``);
    const [name, setName] = useState(``);
    const [otp, setOtp] = useState([false,``]);
    const [verify,setverify] = useState(true);
    const [counter, setCounter] = useState(0);
    const [status, setStatus] = useState(STATUS.STOPPED);

    const googlecallback = async (result:any) => {
      const user = result.user;
      const docref = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docref);
      console.debug("Logged in")
      if (!docSnap.exists()){

        await setDoc(docref, {
            name:user.displayName,
            phone: '',
            email: user.email,
        });
    }
    router.push("/");
    }

    const googlelogin = () => {
      if (screen.width > 1000){
        signInWithPopup(auth, provider)
        .then(googlecallback).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
      } else{
        alert("working")
        signInWithRedirect(auth, provider)
        .then(googlecallback).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
      }
    }

    useInterval(
        () => {
          if (counter > 0) {
            setCounter(counter - 1)
          } else {
            // setStatus(STATUS.STOPPED)
          }
        },
        status === STATUS.STARTED ? 1000 : -1,
        // passing null stops the interval
      )

    async function resend(){
        if(counter === 0){
            // window.recaptchaVerifier = null;
            // phoneAuth();
            if(!window)
              return;
            // let widgetId = await window.recaptchaVerifier.render().then(grecaptcha.reset);
            signInWithPhoneNumber(auth, `+91${phone}`, window.recaptchaVerifier).then((confirmationResult) => {

                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                // ...
            }).catch((error) => {
                  console.log(error);
            });
            }
    }
    function otpValidator(otp:string) {

        if (typeof otp === "number" || (typeof otp === "string" && !isNaN(Number(otp)))){
            setOtp([true,otp]);
        }

    }

    const makeUser = async (id:string) => {

        const docref = doc(db, 'users', id);
        const docSnap = await getDoc(docref);
        if (!docSnap.exists()){

          await setDoc(docref, {
              name,
              phone,
              email: '',
          });
      }

    }

    async function submitit(event:any){

        event.preventDefault();
        // makeUser(id)
        // console.log("errrrrr");
        if(otp[0]===true){
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otp[1]).then(async (result:any) => {
              // User signed in successfully.
                const user = result.user;
                const id = user.reloadUserInfo.localId; 
                console.log("Authenticated");
                if(logsign == "signUp")
                  await makeUser(id);
                router.push("/");

                
                
            }).catch((error:any) => {
                console.log(error);
            });
            return;
        }

        if(phone.length == 10){
            let q = query(collection(db, 'users'), where("phone", "==", phone));
            let response = await getDocs(q);
            if(response.docs.length == 0 && logsign == "login"){
              console.log("Noice"); 
              setmethod("signUp"); 
              return;
            }
            await phoneAuth();
          }
          
    }
    const recaptcha = () => {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, styles.captcha, {
        'size': 'invisible',
      });
    }
    function phoneAuth(){

        recaptcha();
        setverify(false);
        let appVerifier = window.recaptchaVerifier;
        
        signInWithPhoneNumber(auth, `+91${phone}`, appVerifier).then((confirmationResult) => {
          setOtp([true,``]);
          setverify(true)
          setStatus(STATUS.STARTED);
          setCounter(30);
          
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                // ...
            }).catch((error) => {
                  console.log(error);
            });
      }

    return (
        <div className={styles.loginBox}>
            <h2>
                Welcome to Vookad
            </h2>
            <div className={styles.logSign}>
                <div style={shift} className={styles.slider}></div>
                <div onClick={()=> setmethod("signUp")}>
                    SignUp
                </div>
                <div onClick={()=> setmethod("login")}>
                    LogIn
                </div>
            </div>
            <Button style={{
              display:'flex',
              justifyContent:'space-evenly',
              alignItems:"center",
              gap: 16,
            }} onClick={googlelogin}><Image width={30} height={30} src={google} alt='signin with google' />SignIn with Google</Button>                 
            <form onSubmit={submitit} className={styles.loginForm}>
                {
                    logsign == "signUp" && 
                    <TextField className={styles.phone} onChange={ (e) => {setName(e.target.value);}} id="standard-basic" label="Name" variant="standard" />
                }
                <TextField type='number' onChange={(e) => {
                                    if (e.target.value.length<11) {
                                        setPhone(e.target.value);
                                    } else{
                                        setPhone(e.target.value.slice(-10));
                                    }
                                }}
                                 className={styles.phone} id="standard-basic" label="Phone" variant="standard" />
                {otp[0] && <>
                            <label>Enter OTP</label>
                            <TextField onChange={(e) => {otpValidator(e.target.value);}}
                className={styles.phone} id="standard-basic" label="OTP" variant="standard" />
                            <p className={`${styles.counter} ${counter==0? '': styles.disable}`} onClick={resend}>resend otp {counter == 0? '':`in ${counter}s`}</p>
                        </>}                                 
                {verify ? <Button type="submit" id="sign-in-button">
                  {otp[0]? `Submit` : `Generate Otp`}
                </Button> : "Checking your device info..."} 
            </form>
            <div id={styles.captcha} className={styles.captcha}></div>   
        </div>
    );
}
function useInterval(callback:any, delay:number) {
  const savedCallback = useRef<(() => void) | undefined>();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback
    }, [callback])
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        if (savedCallback.current) {
          savedCallback.current();
        }
      }
      if (delay !== -1) {
        let id = setInterval(tick, delay)
        return () => clearInterval(id)
      }
    }, [delay])
  }