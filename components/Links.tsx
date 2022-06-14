/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/Links.module.css";

export const Links = () => {
  return (
    <div className={styles.links}>
      <ul>
        <li>
          <a href="https://twitter.com/0xErre" target="_blank" rel="noreferrer">
            <img src="/twitter.png" alt="twitter" height="25" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AlberErre"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/github.png" alt="github" height="25" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AlberErre"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/linkedin.png" alt="linkedin" height="25" />
          </a>
        </li>
      </ul>
    </div>
  );
};
