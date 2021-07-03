import React from "react";
import styles from './styles/Services.module.scss';
import {Element} from 'react-scroll';
import {BiCodeAlt, BiRocket, AiOutlineExperiment} from 'react-icons/all';
import Card from "./Card";
import {Fade} from 'react-reveal';

const Services = () => {
    return(
        <Element name={'services'} className={styles.services}>
            <Fade>
                <p>What I do</p>
            </Fade>

            <div className={styles.container}>
                <Card icon={<BiCodeAlt/>} title={'Web Designing'}>
                    These days, online presence is a must for any business. Using my design skills, I can design an
                    awesome website for your business.
                </Card>
                <Card icon={<BiRocket/>} title={'Web Development'}>
                    Are you looking for more than a static website? I can develop a secure and efficient website for your
                    business depending on your needs.
                </Card>
                <Card icon={<AiOutlineExperiment/>} title={'Graphic Designing'}>
                    With 5+ years of freelancing experience as graphic designer, I can design an eye-catching brand identity for
                    your business.
                </Card>
            </div>
        </Element>
    );
}

export default Services;
