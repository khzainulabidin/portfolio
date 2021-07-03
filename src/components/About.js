import React from "react";
import {Fade} from 'react-reveal';
import styles from './styles/About.module.scss';
//import my_photo from "../assets/images/zain_ul_abidin.jpg";
import resume from '../assets/documents/ZainUlAbidin_Resume.pdf';
import {Element} from 'react-scroll';
import ProgressBar from "./ProgressBar";

const About = () => {
    return(
        <Element name={'about'}>
            <Fade>
                <div className={styles.about}>
                    <div>
                        <ProgressBar title={'React JS'} progress={95}/>
                        <ProgressBar title={'JavaScript'} progress={88}/>
                        <ProgressBar title={'Git'} progress={90}/>
                        <ProgressBar title={'HTML/CSS'} progress={87}/>
                        <ProgressBar title={'Node/Express'} progress={80}/>
                        <ProgressBar title={'PHP'} progress={70}/>
                        <ProgressBar title={'Databases'} progress={75}/>
                        <ProgressBar title={'Adobe XD & Illustrator'} progress={65}/>
                    </div>

                    <Fade>
                        <div className={styles.info}>
                            <Fade>
                                <p>Who I am</p>
                                {/*<img src={my_photo} alt={'Zain Ul Abidin'} onContextMenu={e => e.preventDefault()}/>*/}
                            </Fade>

                            <Fade>
                                <h4>
                                    I’m Zain Ul Abidin, a designer who codes. I care deeply about creating world-class,
                                    useful, and beautiful products that help people and make a difference. I can be as involved
                                    in your project as you need me to be; from the seed of the idea, to the deployment of your application
                                </h4>
                                <a href={resume}>
                                    <button className={'primary-button'}>My Resumé</button>
                                </a>
                            </Fade>
                        </div>
                    </Fade>
                </div>
            </Fade>
        </Element>
    );
}

export default About;
