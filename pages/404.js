import { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
  const router = useRouter();
  const textRef = useRef(null);

  let time = 3;

  useEffect(() => {
    const id = setInterval(() => {
      if (textRef.current) {
        textRef.current.innerText = `Redirecting you back to home in ${time}`;
      }

      if (time > 0) {
        time--;
      } else {
        clearInterval(this);
        router.push("/");
      }
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [time]);

  return (
    <div className={styles.container}>
      <h1>Oops... This page does not exist</h1>
      <p ref={textRef}></p>
      <div className="btn">
        <Link href="/">Back</Link>
      </div>
    </div>
  );
};

export default NotFound;
