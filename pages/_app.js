import styles from "../styles/Home.module.css";
import Image from "next/image";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <div className={styles.imageContainer}>
          <Image src={"/logo.svg"} alt="logo" width={150} height={100} />
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
