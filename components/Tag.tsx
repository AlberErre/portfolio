import { Text } from "@nextui-org/react";
import React, { FC, ReactNode } from "react";
import styles from "./Tag.module.css";

export type TagProps = {
  children: ReactNode;
};

export const Tag: FC<TagProps> = ({ children }) => {
  return <Text className={styles.tag}>{children}</Text>;
};
