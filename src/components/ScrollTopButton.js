import React from 'react';
import styles from './styles/ScrollTopButton.module.scss';
import {Fade} from "react-reveal";
import {FiArrowUp} from "react-icons/fi";
import {animateScroll as scroll} from 'react-scroll';

const ScrollTopButton = ({pagePosition}) => {

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return(
        <React.Fragment>
            {pagePosition > 300 ? (
                <Fade>
                    <button onClick={scrollToTop} className={[styles.toTopBtn, 'primary-button'].join(' ')}>
                        <FiArrowUp/>
                    </button>
                </Fade>
            ) : null}
        </React.Fragment>
    );
}

export default ScrollTopButton;
