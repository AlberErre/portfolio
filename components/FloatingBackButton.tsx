import Link from "next/link";
import React from "react";
import styles from "../styles/Common.module.css";

export type FloatingBackButtonProps = { cta: string; to: string };

export const FloatingBackButton = ({ cta, to }: FloatingBackButtonProps) => {
  return (
    <Link
      href={to}
      style={{ position: "absolute", left: 16, top: 0, color: "black" }}
    >
      <a className={styles.navigationLink}>{cta}</a>
    </Link>
  );
};
