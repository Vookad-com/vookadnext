"use client";
import Image from 'next/image'
import React from 'react';
import Link from 'next/link';
import Header from '@/components/header/header'
import styles from '@/components/landing.module.css'
import { Button } from "@material-tailwind/react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '@/components/footer/footer';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import {
  Dialog,
} from "@material-tailwind/react";

import CheckOut from '@/components/checkout';

import mughlai from '@/public/assets/image-2.webp'
import cooks from '@/public/assets/image-3.webp'

const diffArr = [
  {
    ico: 'assets/tune.svg',
    title: 'Tune',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    ico: 'assets/tune.svg',
    title: 'Tune',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    ico: 'assets/tune.svg',
    title: 'Tune',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    ico: 'assets/tune.svg',
    title: 'Tune',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    ico: 'assets/tune.svg',
    title: 'Tune',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    ico: 'assets/tune.svg',
    title: 'Tune',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];

const plans = [
  {
    title: '₹69/day',
    under: '',
    list: ['Homemade','Healthy','Delicious'],
    button: 'Check Plans',
  },
  {
    title: '₹69/day',
    under: '',
    list: ['Homemade','Healthy','Delicious'],
    button: 'Check Plans',
  },
  {
    title: '₹69/day',
    under: '',
    list: ['Homemade','Healthy','Delicious'],
    button: 'Check Plans',
  },
];

function FAQAcc() {
  return (
    <div>
      <Accordion className={styles.faqItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'var(--pink)',}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What Is Vookad?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Vookad is a Startup Which Delivers mom made Home style cooked Foods to Hostelites and Corporates who are working from office.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.faqItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'var(--pink)',}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How Can I order Food?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Easy Man !! You can Simply order by phone calls or you can visit vookad.com and place order of your choice.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.faqItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'var(--pink)',}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How do I Sign Up/LogIn? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Easy Bro !! Go to the person icon in the left hand side corner and now enter phone number, name verify OTP done.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.faqItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'var(--pink)',}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How do I Trust Vookad?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We have the Startup India Notification from ministry of corporate affairs. and Startup Odisha Recognition. We think our recognition will help you trust us.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.faqItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'var(--pink)',}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How it all Started?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Long story Short dude!! but yes perseverance and dedication.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.faqItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'var(--pink)',}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Is there any Career opportunity for we OUTRIANS ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes We have internship Opportunities for developers to develop software and designers to create scalable web and app designs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <main className={styles.main}>
      <Header></Header>
      <section className={styles.Hero}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <h1>
              Get <br />
              Weekend <br />
              Special at ₹69 
              </h1>
              <h4>
                Craving something new every day? Vookad constantly introduces new chefs and dishes, so you&apos;ll never run out of delectable options.
              </h4>
              <Button onClick={handleOpen} className={`rounded-full bg-yellow ${styles.cta}`}>
                Buy Now
              </Button>
              <Dialog open={open} handler={handleOpen} size={"xl"}>
                <CheckOut handler={handleOpen}/>
              </Dialog>
            </div>
          </div>
      </section>
      <section className={styles.about}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutCard1}>
            <div className={styles.content}>
              <h2>
                  Chiken Kassa <br />
                  Now Available
              </h2>
              <p>A decadent dish with smoky and melt in the mouth chicken pieces simmered in a rich gravy.</p>
            </div>
            <div className={styles.imgContainer}>
              <Image src={mughlai} alt="Mughlai Platters" />
            </div>
          </div>
          <div className={styles.aboutCard2}>
            <div className={styles.content}>
                <h2>
                  Know about our <br />
                  Super Cooks!
                </h2>
                <p>Moms are our Super cooks, They add hero icredients to our food.</p>
              </div>
              <div className={styles.imgContainer}>
                <Image src={cooks} alt="Mughlai Platters" />
              </div>
            </div>
        </div>
      </section>
      <section className={styles.diff}>
        <div className={styles.diffContainer}>
          <h2>
            What makes Vookad different ?
          </h2>
          <div className={`${styles.cards} grid sm:grid-cols-3 grid-cols-2 gap-6`}>
              {diffArr.map((diff,i) => {
                return (
                  <div className={styles.card} key={i}>
                    <div className={styles.imgContainer}>
                      <Image width={50} height={50} src={diff.ico} alt={diff.title} />
                    </div>
                    <div className={styles.diffcontent}>
                      <h3>{diff.title}</h3>
                      <p>{diff.text}</p>
                    </div>
                  </div>
                )
              })}
          </div>
          <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className={styles.smCards}
        >
          {diffArr.map((diff,i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className={styles.card} key={diff.ico}>
                    <div className={styles.imgContainer}>
                      <Image width={50} height={50} src={diff.ico} alt={diff.title} />
                    </div>
                    <div className={styles.diffcontent}>
                      <h3>{diff.title}</h3>
                      <p>{diff.text}</p>
                    </div>
                  </div>
                  </SwiperSlide>
                )
              })}
      </Swiper>
        </div>
      </section>
      <section className={styles.plans}>
        <div className={styles.plansContainer}>
          <h2>
            Choose a plan as per your needs
          </h2>
          <div className={`${styles.cards2} grid grid-cols-1 gap-4 md:grid-cols-3 `}>
              {plans.map((plan,i) => {
                return (
                  <div className={styles.card2} key={i}>
                    <div className={styles.heading}>
                      <h3>{plan.title}</h3>
                      <small>{plan.under}</small>
                    </div>
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
                    <Button className={`rounded-full bg-pink ${styles.cta2}`}>
                      {plan.button}
                    </Button>
                  </div>
                )
              })}
          </div>
        </div>
      </section>
      <section className={styles.faq}>
        <div className={styles.faqContainer}>
          <h2>
            FAQ
          </h2>
          <FAQAcc />
        </div>
      </section>
      <section className={styles.end}>
        <div className={styles.endContainer}>
          <h2>
          Discover the Essence of Homemade Cuisine
          </h2>
          <p>
          At Homemade Delights, we celebrate the unique flavors and warmth that only homemade food can offer. Our web app connects food enthusiasts with talented home chefs who pour their love and passion into creating delightful dishes. Whether you&apos;re craving a comforting bowl of grandma&apos;s soup or a mouthwatering dessert that takes you back to your childhood, we&apos;ve got you covered.
          </p>
          <br />
          <p>
          Explore our diverse menu featuring dishes from various cuisines. From traditional family recipes to innovative culinary creations, you&apos;ll find a wide range of options to tantalize your taste buds.
          </p>
        </div>
      </section>
      <Footer></Footer>
    </main>
  )
}
