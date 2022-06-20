/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./SocialLinks.module.css";

export const SocialLinks = () => {
  return (
    <div className={styles.links}>
      <ul>
        <li>
          <a href="https://twitter.com/0xErre" target="_blank" rel="noreferrer">
            <img src="/social/twitter.png" alt="twitter" height="25" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AlberErre"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/social/github.png" alt="github" height="25" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/albererre/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/social/linkedin.png" alt="linkedin" height="25" />
          </a>
        </li>
      </ul>
    </div>
  );
};
