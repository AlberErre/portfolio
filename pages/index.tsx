import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="./js/p5.min.js"></script>
        <script src="./js/randomArt.js"></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Alber (Erre) Ruiz</h1>
        <h2>Alber (Erre) Ruiz</h2>

        <body>
          <div className="mainWrapper">
            <div className="home homeContainer fadeAnimation">
              <div id="canvasHolder" style="margin-bottom: 16px"></div>
              <h1>Alber Erre</h1>
            </div>
          </div>
        </body>
      </main>

      <footer className={styles.footer}>
        <a
          className="socialIcon"
          href="https://twitter.com/0xErre"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./images/social/twitter.png"
            alt="AlberErre-twitter"
            height="25"
          />
        </a>
        <a
          className="socialIcon"
          href="https://github.com/AlberErre"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./images/social/github.png"
            alt="AlberErre-github"
            height="25"
          />
        </a>
      </footer>
    </div>
  );
};

export default Home;
