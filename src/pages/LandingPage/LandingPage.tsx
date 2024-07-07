import { useGSAP } from '@gsap/react';
import styles from './LandingPage.module.css';
import gsap from 'gsap';
import { Fragment } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { ScrollTrigger } from 'gsap/all';
import { FaAws, FaJava } from 'react-icons/fa';
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoAngular, IoLogoNodejs } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

const LandingPage = (): React.JSX.Element => {
    const icons = [
        { Icon: IoLogoHtml5, color: '#d84925' },
        { Icon: IoLogoCss3, color: '#006eb5' },
        { Icon: IoLogoJavascript, color: '#e8d44d' },
        { Icon: SiTypescript, color: '#2f73c0' },
        { Icon: IoLogoReact, color: '#05d1f6' },
        { Icon: IoLogoAngular, color: '#bd032d' },
        { Icon: IoLogoNodejs, color: '#388537' },
        { Icon: FaJava, color: '#1b84b4' },
        { Icon: FaAws, color: '#f79200' },
        { Icon: FaAws, color: '#f79200' },
        { Icon: SiTypescript, color: 'red' },
    ];

    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline();

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
                start: 'top 50%',
                end: 'bottom 100%',
                scrub: 3,
            },
            opacity: 1,
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
                    <h1 className={styles.heading}>About</h1>
                    <p className={styles.description}>
                        I graduated in 2021 and I have Bachelors degree in Computer Science. With around 3
                        years of full time experience as a full stack developer and more than 5 years of
                        freelancing experience, I can assist you with the development of any kind of small
                        to large scale web applications. I have strong grip over multiple stacks including MERN,
                        MEAN and Java Spring, and I'm always eager to learn and work with latest technologies
                    </p>
                </div>
            </div>
        </Fragment>
    );
}

export default LandingPage;