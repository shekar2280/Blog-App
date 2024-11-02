import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <div className={styles["social-media"]}>
          <a href="#" className={styles["social-icon"]}>
          <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className={styles["social-icon"]}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/t-somashekar/" className={styles["social-icon"]}>
          <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/shekar2280" className={styles["social-icon"]}>
          <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className={styles.logo}>BlogApp</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>HomePage</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
}

export default Navbar;
