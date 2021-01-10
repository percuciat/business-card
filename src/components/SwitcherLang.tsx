import React, { useContext } from 'react';
import styles from "../styles/switcherLang.module.css";
import { ContextApp } from "../stateManager/store";
import { changeLang } from '../stateManager/actions';

const SwitcherLang: React.FC = () => {
    const {state: {isRu, isLight}, dispatch} = useContext(ContextApp);
    const switchLang = () => {
        dispatch(changeLang(!isRu))
    };
    return <>
        <div className={styles.wrapper}>
            <button className={`${isLight ? styles.switcherDark : styles.switcherLight} ${styles.switcher}`}
                    aria-label={`${isRu ? 'Переключить язык' : 'Change language'}`}
                    onClick={switchLang}>
                <span className={`
                    ${isRu ? '' : styles.active} ${styles.flag}
                    ${isLight ? styles.flagDark : styles.flagLight}
                `}/>
            </button>
        </div>
    </>
};


export default SwitcherLang;
