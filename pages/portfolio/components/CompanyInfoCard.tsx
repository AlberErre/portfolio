/* eslint-disable @next/next/no-img-element */
import { Card } from "@nextui-org/react";
import React from "react";
import { CompanyData } from "../utils/types";
import styles from "./CompanyInfoCard.module.css";
import commonStyles from "../../../styles/Common.module.css";

export type CompanyInfoCardProps = {
  data: CompanyData;
};

export const CompanyInfoCard = ({
  data: { name, image, description, dates, techStack, link },
}: CompanyInfoCardProps) => {
  const tech = techStack
    .reduce((acc, tech) => acc + tech + ", ", "")
    .slice(0, -2);

  return (
    <Card className={styles.card}>
      <Card.Body>
        <img src={image.imgSource} alt={image.alt} className={styles.image} />

        <p className={commonStyles.description}>{description}</p>

        <p>
          <strong>Tech Stack</strong>: {tech}
        </p>

        <p>{dates}</p>

        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            {`Visit ${name}`}
          </a>
        )}
      </Card.Body>
    </Card>
  );
};
