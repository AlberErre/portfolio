import React, { FC, ReactNode } from "react";
import { Card as BaseCard } from "@nextui-org/react";
import styles from "./CustomCard.module.css";

export type CustomCardProps = {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
};

export const CustomCard: FC<CustomCardProps> = ({ children, as }) => {
  return (
    <BaseCard as={as} className={styles.card}>
      {children}
    </BaseCard>
  );
};
