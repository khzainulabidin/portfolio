import React from 'react';
import styles from './styles/ProgressBar.module.scss';

const ProgressBar = ({title, progress}) => {
    return(
        <div className={styles.progressBar}>
            <p className={styles.title}>{title}</p>
            <div className={styles.bar}>
                <div className={styles.progress} style={{width: `${progress}%`}}> </div>
            </div>
        </div>
    );
}

export default ProgressBar;