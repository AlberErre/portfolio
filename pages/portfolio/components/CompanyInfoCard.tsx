/* eslint-disable @next/next/no-img-element */
import { Card } from "@nextui-org/react";
import React from "react";
import { CompanyData } from "../utils/types";
import styles from "./CompanyInfoCard.module.css";
import { Tag } from "../../../components/Tag";
import tagStyles from "../../../components/Tag.module.css";

export type CompanyInfoCardProps = {
  data: CompanyData;
};

export const CompanyInfoCard = ({
  data: { name, image, description, dates, techStack, link, position },
}: CompanyInfoCardProps) => {
  const techTags = techStack.map((tech) => <Tag key={tech}>{tech}</Tag>);

  return (
    <Card as="article" className={styles.card}>
      <Card.Header>
        <img src={image.imgSource} alt={image.alt} className={styles.image} />
        <h1 className={styles.hiddenTitle}>{name}</h1>
      </Card.Header>
      <Card.Body>
        <p className={styles.mainDescription}>{description}</p>

        <p className={styles.title}>Position</p>
        <p>{position}</p>

        <p className={styles.title}>Technologies</p>
        <div className={tagStyles.container}>{techTags}</div>

        <p className={styles.title}>Dates</p>
        <p>{dates}</p>

        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            Visit website
          </a>
        )}
      </Card.Body>
    </Card>
  );
};
