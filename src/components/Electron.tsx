import React from 'react';
import styles from "../styles/electron.module.css";


export interface AtomComponentProps {
    theme: boolean
}

const Electron: React.FC<AtomComponentProps> = React.memo(({theme}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.atom}>
                <div className={`${theme ? styles.atomOrbitNight : ''} ${styles.atom__orbit} `}>
                    <div className={`${theme ? styles.atomNight : ''} ${styles.atom__electron}`}/>
                </div>
                <div className={`${theme ? styles.atomOrbitNight : ''} ${styles.atom__orbit} ${styles.atom2}`}>
                    <div className={`${theme ? styles.atomNight : ''} ${styles.atom__electron}`}/>
                </div>
                <div className={`${theme ? styles.atomOrbitNight : ''} ${styles.atom__orbit} ${styles.atom3}`}>
                    <div className={`${theme ? styles.atomNight : ''} ${styles.atom__electron}`}/>
                </div>
                <div className={styles.atom__core}/>
            </div>
        </div>
    );
});


export default Electron;
