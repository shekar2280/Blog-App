import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="/footer-image.jpeg"
            alt="Blog App"
            width={50}
            height={50}
          />
          <h1 className={styles.logoText}>BlogApp</h1>
        </div>
        <p className={styles.desc}>
          Explore the latest in travel, culture, food, and technology on our
          blog. From emerging trends to insightful analysis, we bring stories
          that connect you to the world. Stay inspired, stay informed, and join
          our community of curious minds!
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/" className={styles.listItems}>Homepage</Link>
          <Link href="/write" className={styles.listItems}>Write</Link>
          <Link href="/about" className={styles.listItems}>About</Link>
          <Link href="/contact" className={styles.listItems}>Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blog?cat=style" className={styles.listItems}>Styles</Link>
          <Link href="/blog?cat=fashion" className={styles.listItems}>Fashion</Link>
          <Link href="/blog?cat=technology" className={styles.listItems}>Technology</Link>
          <Link href="/blog?cat=travel" className={styles.listItems}>Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://www.linkedin.com/in/t-somashekar/" className={styles.listItems}>LinkedIn</Link>
          <Link href="/" className={styles.listItems}>Instagram</Link>
          <Link href="/" className={styles.listItems}>Twitter</Link>
          <Link href="https://github.com/shekar2280" className={styles.listItems}>GitHub</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
