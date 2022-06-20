import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Common.module.css";
import { SocialLinks } from "../components/Home/SocialLinks";
import Link from "next/link";
import { Hello } from "../components/Home/Hello";
import { Art } from "../components/Home/Art";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alberto Ruiz</title>
      </Head>

      <main className={styles.main}>
        <Art />

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
