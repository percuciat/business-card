import React from 'react';
import styles from "../styles/description.module.css";


type DescriptionComponentProps = {
    lang: boolean
}

const firstSentRu = 'Я Семенов Максим, фронтенд разработчик.';
const firstSentEng = 'I\'m Maxim Semyonov, front-end developer.';
const ruCv = 'Скачать резюме';
const engCv = 'Download CV';

const Description: React.FC<DescriptionComponentProps> = React.memo(({lang}) => {
    return <>
        <ul className={styles.text}>
            <li>
                {lang ? firstSentRu: firstSentEng}
            </li>
            <li>
                <span className={styles.boldTExt}>
                    {
                        lang ? 'Основной стек технологий:' : 'Main stack:'
                    }
                </span> React / Redux.
            </li>
            <li>
                <span className={styles.boldTExt}>
                    {
                        lang ? 'Дополнительный стек:' : 'Additional stack:'
                    } </span> GatsbyJS, Wordpress, Git.
            </li>
            <li>
                <span className={styles.boldTExt}>
                    {
                        lang ? 'Опыт разработки:' : 'Development experience:'
                    }
                </span>
                {
                    lang ? ' более 2 лет.' : ' over 2 years.'
                }
            </li>
            <a href="#" className={styles.link} target="_blank">{ lang ? ruCv : engCv }</a>
        </ul>
    </>
});


export default Description;
