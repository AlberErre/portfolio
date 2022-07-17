/* eslint-disable @next/next/no-img-element */
import { Card } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { CustomCard } from "../Common/CustomCard";
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
    <Link href={path} as={`${path}`}>
      <a>
        <CustomCard className={styles.element}>
          <Card.Body>
            <img
              src={imgSource}
              alt={imgAlt}
              className={size === "large" ? styles.imageLarge : styles.image}
            />
          </Card.Body>
        </CustomCard>
      </a>
    </Link>
  );
};
