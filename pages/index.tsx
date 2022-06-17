/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Common.module.css";
import Script from "next/script";
import { SocialLinks } from "../components/SocialLinks";
import Link from "next/link";

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

        <article className={styles.description}>
          <h2>Hey! 👋🏼 I'm Alber</h2>
          <p>
            Software engineer specialized in Frontend development (web + mobile)
            who enjoys building scalable applications with strong UX design.
          </p>
          <p>I'm also very interested on Rust programming 🦀.</p>
          <p>
            I love to work with the <strong>React</strong> ecosystem ⚛️.
          </p>
        </article>

        <Link href="/portfolio">
          <a className={styles.navigationLink}>Portfolio</a>
        </Link>

        <SocialLinks />
      </main>
    </div>
  );
};

export default Home;
