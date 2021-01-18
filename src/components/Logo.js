import React from "react";
import styles from './styles/Logo.module.scss';
import {animateScroll as scroll} from "react-scroll";

const Logo = ({size}) => {
    return(
        <span
            className={styles.logo}
            style={{fontSize: size ? `${size}px` : '70px'}}
            onClick={() => scroll.scrollToTop()}
        >
            zn
        </span>
    );
}

export default Logo;