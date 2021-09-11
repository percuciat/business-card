import React, { useContext } from 'react';
import styles from './switcherTheme.module.css';
import { ContextApp } from '../../stateManager/store';
import { changeTheme } from '../../stateManager/actions';


const SwitcherTheme: React.FC = () => {
    const {state: {isRu, isLight}, dispatch} = useContext(ContextApp);
    const switchTheme = () => {
        dispatch(changeTheme(!isLight))
    };
    return <>
        <div className={styles.wrapper}>
            <button className={styles.switcher}
                    aria-label={`${isRu ? 'Change theme' : 'Переключить тему'}`}
                    onClick={switchTheme}>
                <span className={`${isLight ? styles.active : ''} ${styles.flag}`}/>
            </button>
        </div>
    </>
};


export default SwitcherTheme;
