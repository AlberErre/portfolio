import React from "react";
import styles from "../../styles/Common.module.css";

export type FloatingBackButtonProps = { cta: string; to: string };

export const FloatingBackButton = ({ cta, to }: FloatingBackButtonProps) => {
  return (
    <a
      href={to}
      style={{ position: "absolute", left: 24, top: 8, color: "black" }}
      className={styles.navigationLink}
    >
      {cta}
    </a>
  );
};
