import React, { useContext } from "react";
import styles from "./Header.module.css";
import { SwitcherTheme, SwitcherLang } from "../Switcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { ContextApp } from "stateManager/store";

export const Header: React.FC = () => {
  const {
    state: { isLight },
  } = useContext(ContextApp);
  const icons = [faHtml5, faCss3, faJs, faReact];
  return (
    <>
      <header
        className={`${isLight ? styles.headerDark : ""} ${styles.header}`}
      >
        <div className="container">
          <div className={styles.wrapper}>
            <ul className={styles.logos}>
              {icons.map((el, index) => {
                return (
                  <li key={`${index}_${el}`} className={styles.logosItem}>
                    <FontAwesomeIcon
                      className={`${isLight ? styles.iconDark : ""} ${
                        styles.icon
                      }`}
                      icon={el}
                    />
                  </li>
                );
              })}
            </ul>
            <div className={styles.switchers}>
              <SwitcherLang />
              <SwitcherTheme />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
