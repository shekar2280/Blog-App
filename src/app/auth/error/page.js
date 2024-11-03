"use client"; 

import { useRouter } from "next/navigation";
import styles from "./error.module.css"; 

export default function ErrorPage() {
  const router = useRouter(); 

  const handleRetry = () => {
    router.push("/login"); 
  };

  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorTitle}>Error</h1>
      <p className={styles.errorMessage}>
        Something went wrong during authentication. Please try again.
      </p>
      <button className={styles.retryButton} onClick={handleRetry}>
        Try Again
      </button>
    </div>
  );
}
