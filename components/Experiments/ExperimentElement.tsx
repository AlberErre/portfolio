/* eslint-disable @next/next/no-img-element */
import { Card, Divider } from "@nextui-org/react";
import React from "react";
import { CustomCard } from "../Common/CustomCard";
import styles from "./ExperimentElement.module.css";

export type ExperimentElementProps = {
  imgSource: string;
  imgAlt: string;
  href: string;
  cta: string;
  description?: string;
};

export const ExperimentElement = ({
  imgSource,
  imgAlt,
  href,
  cta,
  description,
}: ExperimentElementProps) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <CustomCard className={styles.element}>
        <Card.Body>
          <img src={imgSource} alt={imgAlt} className={styles.image} />
          <Divider />
          <h2>{cta}</h2>
          {description && <p>{description}</p>}
        </Card.Body>
      </CustomCard>
    </a>
  );
};
