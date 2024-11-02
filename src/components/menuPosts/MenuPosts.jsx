import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./menuPosts.module.css";

function menuPosts({ withImage }) {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/travel_dp.avif" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Virtual reality travel experiences are gaining traction, allowing
            users to explore destinations from the comfort of their homes.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Liam Carter</span>
            <span className={styles.date}> - 24.07.24</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/culture_dp.avif" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            Street art is gaining recognition as a legitimate form of cultural
            expression and is featured in galleries worldwide.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Emma Sinclair</span>
            <span className={styles.date}> - 14.10.24</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/food_dp.avif" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Global culinary trends highlight fusion cuisine, with chefs blending
            flavors from different regions to create unique dining experiences.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Sophie Chen</span>
            <span className={styles.date}> - 21.06.24</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/technology_dp.avif" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.coding}`}>Technology</span>
          <h3 className={styles.postTitle}>
            Interest in blockchain applications grows as companies explore
            decentralized solutions for secure transactions and data
            transparency.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Lucas Davis</span>
            <span className={styles.date}> - 15.05.24</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default menuPosts;
