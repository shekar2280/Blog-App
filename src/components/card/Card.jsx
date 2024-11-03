import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

// Function to truncate text while avoiding cutting words in half
const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;

  const trimmedText = text.substring(0, maxLength);
  const lastSpaceIndex = trimmedText.lastIndexOf(" ");

  // If there's no space found, just return the trimmed text
  if (lastSpaceIndex === -1) return trimmedText + "...";

  return trimmedText.substring(0, lastSpaceIndex) + "...";
};

function Card({ item }) {
  return (
    <div className={styles.container}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
          <Link href={`/posts/${item.slug}`}>
            <h1 className={styles.title}>{item.title}</h1>
          </Link>
          <p className={styles.desc}>{truncateText(item.desc, 60)}</p>
          <Link href={`/posts/${item.slug}`} className={styles.link}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
