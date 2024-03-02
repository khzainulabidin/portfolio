import React from "react";
import {Fade} from 'react-reveal';
import styles from './styles/About.module.scss';
//import my_photo from "../assets/images/zain_ul_abidin.jpg";
// import resume from '../assets/documents/ZainUlAbidin_Resume.pdf';
import {Element, Link} from 'react-scroll';
import ProgressBar from "./ProgressBar";
import Card from "./Card";
import {AiOutlineExperiment} from "react-icons/ai";
import {BiCodeAlt, BiRocket} from "react-icons/bi";

const About = () => {
    return(
        <Element name={'about'}>
            <Fade>
                <div className={styles.about}>
                    <div>
                        <ProgressBar title={'React JS'} progress={95}/>
                        <ProgressBar title={'JavaScript/TypeScript'} progress={88}/>
                        <ProgressBar title={'HTML/CSS'} progress={87}/>
                        <ProgressBar title={'Node/Express'} progress={80}/>
                        <ProgressBar title={'Java'} progress={80}/>
                        <ProgressBar title={'Angular'} progress={70}/>
                        <ProgressBar title={'Bootstrap/Material UI'} progress={75}/>
                        <ProgressBar title={'Git'} progress={70}/>
                    </div>

                    <Fade>
                        <div className={styles.info}>
                            <Fade>
                                <p>Who I am</p>
                                {/*<img src={my_photo} alt={'Zain Ul Abidin'} onContextMenu={e => e.preventDefault()}/>*/}
                            </Fade>

                            <Fade>
                                <h4>As an accomplished Software Engineer, I excel in the realm of full-stack web development, 
                                    with a specialized focus on leveraging React JS and crafting responsive UI solutions. My 
                                    expertise is built upon a robust understanding of software engineering principles, enabling 
                                    me to approach projects with efficiency and precision.
                                </h4>
                                <h4>I am passionate about delivering high-quality, user-centric applications and have a proven 
                                    track record of success in collaborative team environments. I am dedicated to bringing innovation 
                                    and excellence to every aspect of web development.
                                </h4>
                                {/* <a href={resume}>
                                    <button className={'primary-button'}>My Resumé</button>
                                </a> */}
                                <Link to="portfolio" spy={true} smooth={true} offset={50} duration={700}>
                                    <button className={'primary-button'}>My Work</button>
                                </Link>
                            </Fade>
                        </div>
                    </Fade>
                </div>
            </Fade>

            <div className={styles.services}>
                <Fade>
                    <p>What I do</p>
                </Fade>

                <div className={styles.container}>
                    <Card icon={<BiCodeAlt/>} title={'Web Designing'}>
                        Crafting digital brilliance: Elevate your online presence with my expert Web Designing service. 
                        Explore captivating layouts and user-centric designs that leave a lasting impression
                    </Card>
                    <Card icon={<BiRocket/>} title={'Web Development'}>
                        Unlocking digital possibilities: Navigate through my Web Development expertise. From coding intricacies 
                        to seamless functionality, witness the dynamic world where ideas transform into interactive and robust online solutions.
                    </Card>
                    <Card icon={<AiOutlineExperiment/>} title={'Graphic Designing'}>
                        Where creativity takes form: Immerse yourself in the realm of Graphic Designing. Explore my portfolio to witness visually 
                        compelling designs that communicate stories, evoke emotions, and elevate brands to new heights.
                    </Card>
                </div>
            </div>
        </Element>
    );
}

export default About;
