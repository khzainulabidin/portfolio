import React from "react";
import styles from './styles/Landing.module.scss';
import landing_icon from "../assets/images/landingIcon.png";
import {Element} from 'react-scroll';

const Contact = () => {
    return(
        <Element name={'contact'} className={styles.landing}>
            <div>
                <h4>Hi, my name is Zain.</h4>
                <p>I'm a freelance full stack web developer, graphic designer & a student</p>
                <div className={styles.buttons}>
                    <button className={'secondary-button'}>Contact</button>
                    <button className={'primary-button'}>Let's Talk</button>
                </div>
            </div>
            <img src={landing_icon} alt={'Programmer'} onContextMenu={e => e.preventDefault()}/>
        </Element>
    );
}

export default Contact;