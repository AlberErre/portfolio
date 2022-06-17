import Link from "next/link";
import React from "react";
import styles from "../styles/Common.module.css";

export type FloatingBackButtonProps = { cta: string };

export const FloatingBackButton = ({ cta }: FloatingBackButtonProps) => {
  return (
    <Link
      href="/"
      style={{ position: "absolute", left: 16, top: 0, color: "black" }}
    >
      <a className={styles.navigationLink}>{cta}</a>
    </Link>
  );
};
