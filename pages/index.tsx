/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Script from "next/script";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alberto Ruiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="/p5/p5.min.js"></Script>
      <Script src="/p5/art.js"></Script>

      <main className={styles.main}>
        <div id="canvasHolder" style={{ marginBottom: "16px" }}></div>

        <h1 className={styles.title}>Alberto Ruiz</h1>
        <h2>Software Engineer</h2>

        <a
          className="socialIcon"
          href="https://twitter.com/0xErre"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/twitter.png" alt="AlberErre-twitter" height="25" />
        </a>
        <a
          className="socialIcon"
          href="https://github.com/AlberErre"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/github.png" alt="AlberErre-github" height="25" />
        </a>
        <a
          className="socialIcon"
          href="https://github.com/AlberErre"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/linkedin.png" alt="AlberErre-linkeding" height="25" />
        </a>
      </main>
    </div>
  );
};

export default Home;
