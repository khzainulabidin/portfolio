import React from 'react';
import styles from './styles/Card.module.scss';
import {Fade} from 'react-reveal';

const Card = ({icon, title, children}) => {
    return(
        <Fade>
            <div className={styles.service}>
                <div className={styles.iconContainer}>
                <span className={styles.serviceIcon}>
                    {icon}
                </span>
                </div>
                <div className={styles.serviceText}>
                    <h4 className={styles.cardHeading}>{title}</h4>
                    <span className={styles.cardText}>{children}</span>
                </div>
            </div>
        </Fade>
    );
}

export default Card;
