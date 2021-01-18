import React from 'react';
import styles from './styles/Card.module.scss';

const Card = ({icon, title, children}) => {
    return(
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
    );
}

export default Card;