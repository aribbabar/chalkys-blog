import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <div className={styles.imageContainer}>
          <Link href="/">
            <Image
              src={"/logo.svg"}
              alt="logo"
              width={150}
              height={100}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
