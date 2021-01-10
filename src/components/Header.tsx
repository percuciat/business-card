import React, { useContext } from 'react';
import styles from '../styles/header.module.css';
import {SwitcherTheme, SwitcherLang} from "./";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact";
import {faJs} from "@fortawesome/free-brands-svg-icons/faJs";
import {faHtml5} from "@fortawesome/free-brands-svg-icons";
import {faCss3} from "@fortawesome/free-brands-svg-icons";
import {ContextApp} from "../stateManager/store";


const Header: React.FC = React.memo(() => {
    const {state: {isLight}} = useContext(ContextApp);

    return <>
        <header className={`${isLight ? styles.headerDark : ''} ${styles.header}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <ul className={styles.logos}>
                        <li className={styles.logosItem}>
                            <FontAwesomeIcon className={`${isLight ? styles.iconDark : ''} ${styles.icon}`} icon={faHtml5} />
                        </li>
                        <li className={styles.logosItem}>
                            <FontAwesomeIcon className={`${isLight ? styles.iconDark : ''} ${styles.icon}`} icon={faCss3} />
                        </li>
                        <li className={styles.logosItem}>
                            <FontAwesomeIcon className={`${isLight ? styles.iconDark : ''} ${styles.icon}`} icon={faJs} />
                        </li>
                        <li className={styles.logosItem}>
                            <FontAwesomeIcon className={`${isLight ? styles.iconDark : ''} ${styles.icon}`} icon={faReact} />
                        </li>
                    </ul>
                    <div className={styles.switchers}>
                        <SwitcherLang />
                        <SwitcherTheme />
                    </div>
                </div>
            </div>
        </header>
    </>
});


export default Header;
