import React, { FC, HTMLAttributes, ReactNode } from "react";
import { Card as BaseCard, CSS } from "@nextui-org/react";
import styles from "./CustomCard.module.css";

export type CustomCardProps = {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  css?: CSS;
  className?: string;
};

export const CustomCard: FC<CustomCardProps> = ({
  children,
  as,
  css,
  className,
}) => {
  const classes = [styles.card, className].join(" ");

  return (
    <BaseCard className={classes} as={as} css={css}>
      {children}
    </BaseCard>
  );
};
