"use client"

import React, { useEffect, useState } from 'react'
import styles from "./featured.module.css"
import Image from 'next/image';
import Link from 'next/link';

// const images = [
//   {src: '/robotaxi.avif', alt:'Tesla Taxi Image'},
//   {src: '/teslabot.avif', alt:'Tesla Bot Image'},
// ];

function Featured() {

  //  const [currentIndex, setCurrentIndex] = useState(0);

  //  useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  //  }, []);



  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
      <b>Hey, Shekar here!</b> Discover new stories and creative ideas.
      </h1>
      <div className={styles.post}>
      <div className={styles.imgContainer}>
      {/* <Image src={images[currentIndex].src} alt={images[currentIndex].alt} fill className={styles.image}/> */}
      <Image src="/teslabot.avif" alt="Tesla bot Image" fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
      <h1 className={styles.postTitle}>Tesla's Optimus Bot: The Future of Automation is Here!</h1>
      <p className={styles.postDesc}>Tesla's Optimus Bot revolutionizes automation, merging cutting-edge technology with everyday tasks, empowering humanity for a smarter, more efficient future.</p>
      <Link href="https://www.thewrap.com/elon-musk-tesla-optimus-robot-explained/">
      <button className={styles.button}>Read More</button>
      </Link>
      </div>
      </div>
    </div>
  )
}

export default Featured;
