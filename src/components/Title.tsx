import React from 'react';
import styles from "../styles/title.module.css";

type TitleComponentProps = {
    lang: boolean
}

const Title: React.FC<TitleComponentProps> = React.memo(({lang}) => {

    const ru = 'Привет!';
    const eng = 'Hello!';

    return <>
        <div className={styles.glitch}>
            <span className={styles.first}>
                {
                    lang ? ru : eng
                }
            </span>
            {
                lang ? ru : eng
            }
            <span className={styles.second}>
                  {
                      lang ? ru : eng
                  }
            </span>
        </div>
    </>
});


export default Title;
