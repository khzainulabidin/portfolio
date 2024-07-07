import { useGSAP } from '@gsap/react';
import styles from './LandingPage.module.css';
import gsap from 'gsap';
import { Fragment } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { ScrollTrigger } from 'gsap/all';
import {
    BiLogoTypescript,
    BiLogoJavascript,
    BiLogoHtml5,
    BiLogoCss3,
    BiLogoReact,
    BiLogoAngular,
    BiLogoNodejs,
    BiLogoJava,
    BiLogoPostgresql,
    BiLogoMongodb,
    BiLogoAws
} from "react-icons/bi";
import { IconType } from 'react-icons';

interface SkillIcon {
    icon: IconType;
    color: string;
    title: string;
}

const LandingPage: React.FunctionComponent = (): React.JSX.Element => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline();
    const icons: SkillIcon[] = [
        { icon: BiLogoHtml5, color: '#d84925', title: 'HTML' },
        { icon: BiLogoCss3, color: '#006eb5', title: 'CSS' },
        { icon: BiLogoJavascript, color: '#e8d44d', title: 'JavaScript' },
        { icon: BiLogoTypescript, color: '#2f73c0', title: 'TypeScript' },
        { icon: BiLogoReact, color: '#05d1f6', title: 'React JS & React Native' },
        { icon: BiLogoAngular, color: '#bd032d', title: 'Angular' },
        { icon: BiLogoNodejs, color: '#388537', title: 'Node JS & Express JS' },
        { icon: BiLogoJava, color: '#1b84b4', title: 'Java & Spring Boot' },
        { icon: BiLogoMongodb, color: '#579035', title: 'NoSQL' },
        { icon: BiLogoPostgresql, color: '#31648c', title: 'SQL' },
        { icon: BiLogoAws, color: '#f79200', title: 'AWS Cloud' },
    ];

    useGSAP(() => {
        timeline.to('#landing', {
            opacity: 1,
            delay: 0.5,
            duration: 1,
        });
        timeline.to('#navbar', {
            opacity: 1,
            delay: 0.5,
            duration: 1,
        });
        gsap.to('#about', {
            scrollTrigger: {
                trigger: '#about',
                start: 'top 60%',
                end: 'bottom 100%',
                scrub: 3,
            },
            opacity: 1,
            duration: 0.5,
        });
        gsap.to('#skills', {
            scrollTrigger: {
                trigger: '#about',
                start: 'top 20%',
                end: 'bottom 100%',
                scrub: 3,
            },
            marginLeft: 0,
            duration: 0.5,
        });
    }, []);

    return (
        <Fragment>
            <div id='navbar' className={styles.navbar}>
                <a href='#landing' title='Home'><IoHomeOutline /></a>
                <a href='#about' title='About'><IoInformationCircleOutline /></a>
                <a href='#' title='Projects'><TbListDetails /></a>
                <a href='#' title='Contact'><MdOutlineAlternateEmail /></a>
            </div>

            <div className={styles.landing}>
                <div id='landing' className={styles.container}>
                    <h1 className={styles.heading}>Hello, I'm Zain</h1>
                    <p className={styles.description}>
                        A full stack developer, an ex graphic designer, and a hobbyist photographer
                        based in the city that never sleeps
                    </p>
                </div>

                <div id='about' className={styles.container}>
                    <h1 className={[styles.heading, styles.sectionHeading].join(' ')}>About</h1>
                    <p className={styles.description}>
                        I graduated in 2021 with <b>Bachelors degree in Computer Science</b>. With <b>3
                            years of full time experience</b> as a full stack developer and more than <b>5 years of
                                freelancing experience</b>, I can assist you with the development of any kind of small
                        to large scale web applications. I have strong grip over multiple stacks including MERN,
                        MEAN and Java Spring, and I'm always eager to learn and work with latest and emerging technologies
                    </p>

                    <div id='skills' className={styles.skillIcons}>
                        {icons.map((icon: SkillIcon, index: number): React.JSX.Element => (
                            <span title={icon.title}><icon.icon color={icon.color} key={index} /></span>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default LandingPage;