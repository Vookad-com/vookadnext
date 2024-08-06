"use client";
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
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
import v_logo from "./v_logo.webp"
import {
  Dialog,
} from "@material-tailwind/react";

import CheckOut from '@/components/checkout';
import comingL from '@/public/assets/video/comingL.gif'
import comingM from '@/public/assets/video/comingM.gif'
import mughlai from '@/public/assets/image-2.webp'
import cooks from '@/public/assets/image-3.webp'
import startup from "./startupIndia.png";

const diffArr = [
  {
    ico: 'assets/rupee.svg',
    title: 'Autopay',
    text: 'No tracking due date or recharge date, no entering details every month, and yet, clear your dues on time Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const plans = [
  {
    title: 'Desi Meals',
    link: "/products/s/desiMeals",
    under: 'Starting from ₹69/day',
    list: ['Healthy home-cooked meal','No Palm-oil and preservatives. Cooked with less oil and spices.','Regularly updated menu synced to seasonal variations Veg/Non-veg options available'],
    button: 'Check for Plans',
  },
  {
    title: 'Desi Foods',
    under: 'Taste of home, Away from home',
    link: "/products/s/desiFoods",
    list: ['Order from wide variety of menu','Healthy, hygeinic preparation. No palm-oil. Cooked with sunflower/mustard oil','Slot wise delivery. Pocket friendly prices. Starting from Rs. 49'],
    button: 'Why wait..! Try Now.',
  },
  {
    title: 'Desi products',
    under: 'Homemade snacks and spices',
    link: "/products/s/desiProducts",
    list: ['Best quality homemade packaged food products.','Best of traditional kitchen spices','Enjoy homemade desi snacks from every corner of the state', 'Prepared and processed with high quality healthy ingredients'],
    button: 'Explore our desi snacks !',
  },
];

function FAQAcc() {
  return (
    <div>
      <Accordion className={styles.faqItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'var(--orange)',}} />}
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
          expandIcon={<ExpandMoreIcon style={{color: 'var(--orange)',}} />}
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
          expandIcon={<ExpandMoreIcon style={{color: 'var(--orange)',}} />}
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
          expandIcon={<ExpandMoreIcon style={{color: 'var(--orange)',}} />}
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
          expandIcon={<ExpandMoreIcon style={{color: 'var(--orange)',}} />}
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
          expandIcon={<ExpandMoreIcon style={{color: 'var(--orange)',}} />}
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
  return (
    <main className={styles.main}>
      <Header></Header>
      <section className={styles.Hero}>
        {/* <Image className={styles.comingL} src={comingL} alt='coming soon'/>
        <Image className={styles.comingM} src={comingM} alt='coming soon'/> */}
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className='w-full'>
            ODISHA’s 
            <span className='!text-[#fff] block'>Homemade</span> 
            <div className='text-6xl flex items-center w-full gap-1 sm:justify-start justify-center'>
            F <span className='w-28'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className='inline w-full'
              viewBox="0 0 126 61"
            >
              <ellipse cx="94.5" cy="30.5" fill="#C70000" rx="31.5" ry="30.5"></ellipse>
              <ellipse cx="31.5" cy="30.5" fill="#C70000" rx="31.5" ry="30.5"></ellipse>
              <path
                fill="#fff"
                d="M32.336 56.92c-5.704 0-10.764-1.104-15.18-3.312-4.354-2.27-7.789-5.367-10.304-9.292-2.514-3.925-3.772-8.433-3.772-13.524 0-5.09 1.258-9.599 3.772-13.524 2.515-3.925 5.95-6.992 10.304-9.2 4.416-2.208 9.476-3.312 15.18-3.312 5.704 0 10.764 1.104 15.18 3.312 4.416 2.208 7.851 5.275 10.304 9.2 2.515 3.925 3.772 8.433 3.772 13.524 0 5.09-1.257 9.599-3.772 13.524-2.453 3.925-5.888 7.023-10.304 9.292-4.416 2.208-9.476 3.312-15.18 3.312zm0-16.192c1.534 0 2.914-.368 4.14-1.104 1.227-.736 2.208-1.84 2.944-3.312.736-1.533 1.104-3.373 1.104-5.52 0-2.208-.368-4.017-1.104-5.428-.736-1.472-1.717-2.576-2.944-3.312-1.226-.736-2.606-1.104-4.14-1.104-1.533 0-2.913.368-4.14 1.104-1.226.736-2.208 1.84-2.944 3.312-.736 1.41-1.104 3.22-1.104 5.428 0 2.147.368 3.987 1.104 5.52.736 1.472 1.718 2.576 2.944 3.312 1.227.736 2.607 1.104 4.14 1.104zM94.688 56.92c-5.704 0-10.764-1.104-15.18-3.312-4.355-2.27-7.79-5.367-10.304-9.292-2.515-3.925-3.772-8.433-3.772-13.524 0-5.09 1.257-9.599 3.772-13.524 2.515-3.925 5.95-6.992 10.304-9.2 4.416-2.208 9.476-3.312 15.18-3.312 5.704 0 10.764 1.104 15.18 3.312 4.416 2.208 7.851 5.275 10.304 9.2 2.515 3.925 3.772 8.433 3.772 13.524 0 5.09-1.257 9.599-3.772 13.524-2.453 3.925-5.888 7.023-10.304 9.292-4.416 2.208-9.476 3.312-15.18 3.312zm0-16.192c1.533 0 2.913-.368 4.14-1.104 1.227-.736 2.208-1.84 2.944-3.312.736-1.533 1.104-3.373 1.104-5.52 0-2.208-.368-4.017-1.104-5.428-.736-1.472-1.717-2.576-2.944-3.312-1.227-.736-2.607-1.104-4.14-1.104-1.533 0-2.913.368-4.14 1.104-1.227.736-2.208 1.84-2.944 3.312-.736 1.41-1.104 3.22-1.104 5.428 0 2.147.368 3.987 1.104 5.52.736 1.472 1.717 2.576 2.944 3.312 1.227.736 2.607 1.104 4.14 1.104z"
              ></path>
              <circle cx="32" cy="31" r="10" fill="#000"></circle>
              <circle cx="95" cy="31" r="10" fill="#000"></circle>
            </svg>
              </span> D
            </div>
            <span className='!text-[#fff] block'>Application</span>
            </h1>
            {/* <h4 className='hidden sm:block'>
              Craving something new every day? Vookad constantly introduces new chefs and dishes, so you&apos;ll never run out of delectable options.
            </h4> */}
            <div className='flex justify-between items-center max-w-sm'>
            <Button className={`uppercase rounded-full !px-5 sm:text-sm text-xs font-bold bg-yellow ${styles.cta}`}>
              <div className=''>Download the app</div>
            </Button>
            <Button className={`uppercase rounded-full font-bold ${styles.cta}`}>
              <Image width={45} className='rounded' src={v_logo} alt='Vookad' />
            </Button>

            </div>
          </div>
        </div>
        <div className='text-center mt-4'>
          Recognised by: <br />
          <Image className='m-auto' src={startup} height={60} width={150} alt='startup India'></Image>
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutCard1}>
            <div className={styles.content}>
              <h2>
                Fastest growing <span className='text-[var(--orange)]'>Homechef</span> Network
              </h2>
              <p>We are adding new home kitchens everyday to serve your diversified cravings and deliver to as we can.</p>
            </div>
            <div className={styles.imgContainer}>
              <Image src={mughlai} alt="Mughlai Platters" />
            </div>
          </div>
          <div className={styles.aboutCard2}>
            <div className={styles.content}>
                <h2>
                  <span className='text-black mr-3'>One App as your</span>
                  foodie-buddy
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
            What makes <span className='text-[var(--orange)] px-1'>Vookad</span> different ?
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
            Every-dabba <span className='px-2 text-[var(--orange)]'>pocket friendly</span>
          </h2>
          <div className={`${styles.cards2} grid grid-cols-1 gap-4 md:grid-cols-3 `}>
              {plans.map((plan,i) => {
                return (
                  <div className={styles.card2} key={i}>
                    <div>
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
                    </div>
                    <Link href={plan.link}>
                      <Button className={`rounded-full  bg-[var(--orange)] ${styles.cta2}`}>
                        {plan.button}
                      </Button>
                    </Link>
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
