/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./Hello.module.css";
import "animate.css";

export const Hello = () => {
  const classes = [styles.description, "animate__bounceIn"].join(" ");

  return (
    <article className={classes}>
      <h2>Hey! 👋🏼 I'm Alber</h2>
      <p className="animate__backInUp">
        Software engineer specialized in <strong>Frontend</strong> who enjoys
        building scalable applications with strong UX design (web + mobile).
      </p>
      <p>
        I'm also very interested on Rust programming 🦀, as well as{" "}
        <strong>web3</strong>.
      </p>
      <p>
        I love to work with the <strong>React</strong> ecosystem ⚛️.
      </p>
    </article>
  );
};
