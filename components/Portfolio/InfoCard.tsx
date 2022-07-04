/* eslint-disable @next/next/no-img-element */
import { Card } from "@nextui-org/react";
import { CustomCard } from "../Common/CustomCard";
import React from "react";
import styles from "./InfoCard.module.css";
import tagStyles from "../Common/Tag.module.css";
import commonStyles from "../../styles/Common.module.css";
import { Tag } from "../Common/Tag";
import { CompanyData } from "../../utils/company/types";
import "animate.css";

export type InfoCardProps = {
  data: CompanyData;
};

export const InfoCard = ({
  data: { name, image, description, dates, techStack, link, position },
}: InfoCardProps) => {
  const classes = [styles.card, "animate__bounceIn"].join(" ");

  const techTags = techStack.map((tech) => <Tag key={tech}>{tech}</Tag>);

  return (
    <CustomCard as="article" className={classes}>
      <Card.Header>
        <Card.Image
          src={image.imgSource}
          alt={image.alt}
          className={styles.image}
        />
        <h1 className={commonStyles.hiddenTitle}>{name}</h1>
      </Card.Header>

      <Card.Body>
        <p className={styles.mainDescription}>{description}</p>

        <p className={styles.title}>Position</p>
        <p>{position}</p>

        <p className={styles.title}>Technologies</p>
        <div className={tagStyles.container}>{techTags}</div>

        <p className={styles.title}>Dates</p>
        <p>{dates}</p>
      </Card.Body>

      <Card.Footer>
        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            Visit website
          </a>
        )}
      </Card.Footer>
    </CustomCard>
  );
};
