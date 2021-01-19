import React from 'react';
import styles from "../styles/title.module.css";

type TitleComponentProps = {
    lang: boolean
}

const Title: React.FC<TitleComponentProps> = React.memo(({lang}) => {

    return <>
        <div className={styles.glitch}>
            <span className={styles.first}>
               Maksim Semenov
            </span>
            Maksim Semenov
            <span className={styles.second}>
                 Maksim Semenov
            </span>
        </div>
    </>
});


export default Title;
