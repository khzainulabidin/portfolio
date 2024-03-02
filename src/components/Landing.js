import React from "react";
import styles from './styles/Landing.module.scss';
//import landing_icon from '../assets/images/landingIcon.png';
import {Element, Link} from 'react-scroll';
import {Fade} from "react-reveal";

const Landing = () => {
    return(
        <Element name={'home'}>
            <Fade>
                <div className={styles.landing}>
                    <Fade>
                        <div>
                            <h4>Hi, I'm Zain.</h4>
                            <p>The Coding Virtuoso Redefining Digital Landscapes with Full Stack Brilliance!</p>
                            <div className={styles.buttons}>
                                <Link to="portfolio" spy={true} smooth={true} offset={50} duration={700}>
                                    <button className={'secondary-button'}>My Work</button>
                                </Link>
                                <Link className={styles.contactBtn} to="contact" spy={true} smooth={true} offset={50} duration={700}>
                                    <button className={'primary-button'}>Let's Talk</button>
                                </Link>
                            </div>
                        </div>
                    </Fade>

                    {/*<Fade>
                        <img src={landing_icon} alt={'Programmer'} onContextMenu={e => e.preventDefault()}/>
                    </Fade>*/}
                </div>
            </Fade>
        </Element>
    );
}

export default Landing;
