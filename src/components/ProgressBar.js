import React from 'react';
import styles from './styles/ProgressBar.module.scss';
import {Fade} from 'react-reveal';

const ProgressBar = ({title, progress}) => {
    return(
        <Fade>
            <div className={styles.progressBar}>
                <p className={styles.title}>{title}</p>
                <div className={styles.bar}>
                    <div className={styles.progress} style={{width: `${progress}%`}}> </div>
                </div>
            </div>
        </Fade>
    );
}

export default ProgressBar;
