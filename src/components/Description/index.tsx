import React from "react";
import styles from "./Description.module.css";

type DescriptionComponentProps = {
  lang: boolean;
};

const firstSentRu =
  "Привет! Я Максим, frontend-разработчик. Мне нравится создавать полезные проекты, изучать" +
  " новые подходы и технологии в разработке, а также совершенствовать изученное и опробованное. ";
const firstSentEng =
  "I'm Max, front-end developer. I'm passionate about creating useful projects," +
  " exploring new approaches and technologies in development," +
  " as well as improving what has been learned and tested.";

export const Description: React.FC<DescriptionComponentProps> = React.memo(
  ({ lang }) => {
    return (
      <>
        <ul className={styles.text}>
          <li>{lang ? firstSentRu : firstSentEng}</li>
          <li>
            <span className={styles.boldTExt}>
              {lang ? "Технологии с которыми работал:" : "Stack:"}{" "}
            </span>{" "}
            React / Redux, GatsbyJS, Git.
          </li>
        </ul>
      </>
    );
  }
);
