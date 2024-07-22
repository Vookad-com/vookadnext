import { Button } from "@material-tailwind/react";
import TextField from '@mui/material/TextField';
import { useRouter } from "next/navigation";
import { useSelector } from 'react-redux';
import { addDoc, collection } from 'firebase/firestore';
import styles from '@/components/landing.module.css'
import { db } from '@/firebase/config';
import React from 'react';
interface checkoutPrs {
    handler: () => void;
  }
  
export default function CheckOut(props: checkoutPrs){
  
    const {phone, auth, name} = useSelector((state:any) => state.authCheck );
    const [submitted, setSubm]= React.useState(false);
    const router = useRouter();
    if(!auth){
      router.push(`/login`);
      return;
    }
  
    const handleSumb = async (e:any) => {
      e.preventDefault();
      setSubm(true);
      await addDoc(collection(db, 'orders'), {
          phone: e.target[0].value,
          address: e.target[1].value,
          name,
          timeStamp:new Date(),
          info: "Chicken Kasa",
        })
        setSubm(false);
        props.handler();
        alert("Order Placed 🤩");
  
    }
  
    return (
    <form onSubmit={handleSumb} className={styles.checkout}>
      <TextField className={styles.formField} defaultValue={phone} type='number' id="outlined-basic" label="Phone" variant="standard" />
      <br />
      <TextField
        id="outlined-multiline-static"
        label="Complete Address"
        multiline
        rows={4}
        className={styles.formField} 
        placeholder="RHR Hostel"
        variant="standard"
      />
      {submitted? "placing order": <Button type={`submit`} className={`rounded-full bg-yellow ${styles.cta}`}>
        confirm
      </Button>}
    </form>);
  };