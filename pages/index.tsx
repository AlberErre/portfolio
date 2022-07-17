/* eslint-disable @next/next/no-html-link-for-pages */
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Common.module.css";
import { SocialLinks } from "../components/Home/SocialLinks";
import { Hello } from "../components/Home/Hello";
import { Art } from "../components/Home/Art";
import "animate.css";

const Home: NextPage = () => {
  const mainClasses = [styles.main, "animate__fadeIn"].join(" ");

  return (
    <div className={styles.container}>
      <Head>
        <title>Alberto Ruiz</title>
      </Head>

      <main className={mainClasses}>
        <Art />

        <h1 className={styles.hiddenTitle}>Alberto Ruiz</h1>

        <Hello />

        <a href="/portfolio" className={styles.navigationLink}>
          Portfolio
        </a>

        <SocialLinks />
      </main>
    </div>
  );
};

export default Home;
