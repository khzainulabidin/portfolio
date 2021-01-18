import React from "react";
import styles from './styles/Services.module.scss';
import {Element} from 'react-scroll';
import {LightSpeed} from 'react-reveal';
import {BiCodeAlt, BiRocket, AiOutlineExperiment} from 'react-icons/all';
import Card from "./Card";

const Services = () => {
    return(
        <Element name={'services'} className={styles.services}>
            <LightSpeed left>
                <p>What I do</p>
            </LightSpeed>

            <LightSpeed right>
                <div className={styles.container}>
                    <Card icon={<BiCodeAlt/>} title={'Web Designing'}>
                        These days, online presence is a must for any business. Using my design skills, I can design an
                        awesome website for your business. Although my favorite stack is MERN but I can design your website
                        using core HTML, CSS, JavaScript, Bootstrap and even WordPress.
                    </Card>
                    <Card icon={<BiRocket/>} title={'Web Development'}>
                        Are you looking for more than a static website? I can develop a secure and efficient website for your
                        business depending on your needs. I do prefer REST APIs but I can implement the traditional backends as well.
                        I usually work with Node/Express & PHP.
                    </Card>
                    <Card icon={<AiOutlineExperiment/>} title={'Graphic Designing'}>
                        With 5+ years of freelancing experience as graphic designer, I can design an eye-catching brand identity for
                        your business. I can design awesome Logos, Business Cards, Flyers and Social Media Kits.
                    </Card>
                </div>
            </LightSpeed>
        </Element>
    );
}

export default Services;