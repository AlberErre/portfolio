import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Common.module.css";
import Script from "next/script";
import { SocialLinks } from "../components/SocialLinks";
import Link from "next/link";
import { Hello } from "../components/Hello";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alberto Ruiz</title>
      </Head>
      <Script src="/p5/p5.min.js"></Script>
      <Script src="/p5/art.js"></Script>

      <main className={styles.main}>
        <div id="canvasHolder" />

        <h1 className={styles.title}>Alberto Ruiz</h1>

        <Hello />

        <Link href="/portfolio">
          <a className={styles.navigationLink}>Portfolio</a>
        </Link>

        <SocialLinks />
      </main>
    </div>
  );
};

export default Home;
