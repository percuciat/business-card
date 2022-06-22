import React from "react";
import styles from "./Title.module.css";

type TitleComponentProps = {
  lang: boolean;
};

export const Title: React.FC<TitleComponentProps> = () => {
  return (
    <>
      <div className={styles.glitch}>
        <span className={styles.first}>Maksim Semenov</span>
        Maksim Semenov
        <span className={styles.second}>Maksim Semenov</span>
      </div>
    </>
  );
};
