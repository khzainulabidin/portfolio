import React from "react";
import {LightSpeed, Fade} from 'react-reveal';
import styles from './styles/About.module.scss';
import my_photo from "../assets/images/zain_ul_abidin.png";
import resume from '../assets/documents/ZainUlAbidin_Resume.pdf';
import {Element} from 'react-scroll';
import ProgressBar from "./ProgressBar";

const About = () => {
    return(
        <Element name={'about'}>
            <Fade>
                <div className={styles.about}>
                    <LightSpeed left>
                        <div>
                            <ProgressBar title={'HTML'} progress={90}/>
                            <ProgressBar title={'CSS'} progress={80}/>
                            <ProgressBar title={'JavaScript'} progress={85}/>
                            <ProgressBar title={'React JS'} progress={90}/>
                            <ProgressBar title={'Node/Express'} progress={70}/>
                            <ProgressBar title={'PHP'} progress={75}/>
                            <ProgressBar title={'Java'} progress={65}/>
                            <ProgressBar title={'Databases'} progress={75}/>
                            <ProgressBar title={'Adobe XD & Illustrator'} progress={65}/>
                        </div>
                    </LightSpeed>

                    <LightSpeed right>
                        <div className={styles.info}>
                            <p>Who I am</p>
                            <img src={my_photo} alt={'Zain Ul Abidin'} onContextMenu={e => e.preventDefault()}/>
                            <h4>
                                I’m Zain Ul Abidin, a designer who codes. I care deeply about creating world-class,
                                useful, and beautiful products that help people and make a difference. I can be as involved
                                in your project as you need me to be; from the seed of the idea, to the deployment of your application
                            </h4>
                            <a href={resume}>
                                <button className={'primary-button'}>My Resumé</button>
                            </a>
                        </div>
                    </LightSpeed>
                </div>
            </Fade>
        </Element>
    );
}

export default About;