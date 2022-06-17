/* eslint-disable @next/next/no-img-element */
import { Card, Link } from "@nextui-org/react";
import React from "react";
import styles from "./PortfolioElement.module.css";

export type PortfolioElementProps = {
  imgSource: string;
  imgAlt: string;
  path: string;
  size?: "regular" | "large";
};

export const PortfolioElement = ({
  imgSource,
  imgAlt,
  path,
  size = "regular",
}: PortfolioElementProps) => {
  return (
    <Link href={path} target="_blank">
      <Card>
        <Card.Body>
          <img
            src={imgSource}
            alt={imgAlt}
            className={size === "large" ? styles.imageLarge : styles.image}
          />
        </Card.Body>
      </Card>
    </Link>
  );
};
