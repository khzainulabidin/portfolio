import { useGSAP } from '@gsap/react';
import styles from './LandingPage.module.css';
import gsap from 'gsap';
import { ChangeEvent, Fragment, useState } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { TbListDetails } from 'react-icons/tb';
import { MdOutlineAlternateEmail } from 'react-icons/md';
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
    BiLogoAws,
    BiLogoLinkedin,
    BiLogoGithub,
    BiBadgeCheck,
    BiXCircle
} from 'react-icons/bi';
import { IconType } from 'react-icons';
import emailjs from '@emailjs/browser';

interface ISkillIcon {
    icon: IconType;
    color: string;
    title: string;
}

interface IContactFormData {
    name: string;
    email: string;
    message: string;
    [key: string]: string;
}

const LandingPage: React.FunctionComponent = (): React.JSX.Element => {
    gsap.registerPlugin(ScrollTrigger);
    const landingTimeline = gsap.timeline();
    const aboutTimeline = gsap.timeline();
    const contactTimeline = gsap.timeline();
    const [messageStatus, setMessageStatus] = useState<'success' | 'error' | null>(null);
    const [isDirtyForm, setIsDirtyForm] = useState<boolean>(false);
    const [contactFormData, setContactFormData] = useState<IContactFormData>({
        name: '',
        email: '',
        message: '',
    });
    const icons: ISkillIcon[] = [
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

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setContactFormData({
            ...contactFormData,
            [e.target.name]: e.target.value,
        });
    };

    const sendMessage = (): void => {
        setIsDirtyForm(false);
        const { name, email, message } = contactFormData;
        if (!name || !email || !message) return setIsDirtyForm(true);

        emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, contactFormData).then(
            () => {
                setMessageStatus('success');
            },
            () => {
                setMessageStatus('error');
            },
        );
    }

    useGSAP(() => {
        landingTimeline.to('#landing', {
            opacity: 1,
            delay: 0.5,
            duration: 1,
        });
        landingTimeline.to('#navbar', {
            opacity: 1,
            delay: 0.5,
            duration: 1,
        });

        aboutTimeline.to('#about', {
            scrollTrigger: {
                trigger: '#about',
                start: 'top 60%',
                end: 'bottom 100%',
                scrub: 3,
            },
            opacity: 1,
            duration: 0.5,
        });
        aboutTimeline.to('#skills', {
            scrollTrigger: {
                trigger: '#about',
                start: 'top 20%',
                end: 'bottom 100%',
                scrub: 3,
            },
            marginLeft: 0,
            duration: 0.5,
        });

        contactTimeline.to('#contact', {
            scrollTrigger: {
                trigger: '#contact',
                start: 'top 60%',
                end: 'bottom 100%',
                scrub: 3,
            },
            opacity: 1,
            duration: 1,
        });
        contactTimeline.to('#contactForm', {
            scrollTrigger: {
                trigger: '#contact',
                start: 'top 20%',
                end: 'bottom 100%',
                scrub: 3,
            },
            marginLeft: 0,
            duration: 0.5,
        });
        contactTimeline.to('#social', {
            scrollTrigger: {
                trigger: '#contact',
                start: 'top 20%',
                end: 'bottom 100%',
                scrub: 3,
            },
            opacity: 1,
            duration: 0.5,
        });
    }, []);

    return (
        <Fragment>
            <nav id='navbar' className={styles.navbar}>
                <a href='#landing' title='Home'><IoHomeOutline /></a>
                <a href='#about' title='About'><IoInformationCircleOutline /></a>
                <a href='#' title='Projects'><TbListDetails /></a>
                <a href='#contact' title='Contact'><MdOutlineAlternateEmail /></a>
            </nav>

            <h1>{import.meta.env.VITE_TEST}</h1>

            <main className={styles.landing}>
                <div id='landing' className={styles.container}>
                    <h1 className={styles.heading}>
                        Hello, I'm <span className={styles.gradientText}>Zain</span>
                    </h1>
                    <p className={styles.description}>
                        A full stack developer, an ex graphic designer, and a hobbyist photographer
                        based in the city that never sleeps
                    </p>
                </div>

                <div id='about' className={styles.container}>
                    <h1 className={[styles.heading, styles.sectionHeading].join(' ')}>
                        About <span className={styles.gradientText}>me</span>
                    </h1>
                    <p className={styles.description}>
                        I graduated in 2021 with <b>Bachelors degree in Computer Science</b>. With <b>3
                            years of full time experience</b> as a full stack developer and more than <b>5 years of
                                freelancing experience</b>, I can assist you with the development of any kind of small
                        to large scale web applications. I have strong grip over multiple stacks including MERN,
                        MEAN and Java Spring, and I'm always eager to learn and work with latest and emerging technologies
                    </p>

                    <div id='skills' className={styles.skillIcons}>
                        {icons.map((icon: ISkillIcon, index: number): React.JSX.Element => (
                            <span title={icon.title} key={index}><icon.icon color={icon.color} /></span>
                        ))}
                    </div>
                </div>

                <div id='contact' className={styles.container}>
                    <h1 className={[styles.heading, styles.sectionHeading].join(' ')}>
                        Get in <span className={styles.gradientText}>touch</span>
                    </h1>
                    {!messageStatus && <p className={styles.description}>
                        Let's discuss your project requirements and how may I assist you in implementing the solution
                    </p>}

                    {isDirtyForm && <p className={[styles.description, styles.error].join(' ')}>All fields are required</p>}

                    <div className={styles.contactContainer}>
                        {messageStatus === 'success' ? (
                            <div className={styles.messageStatus}>
                                <span><BiBadgeCheck color='#A9DBB8' /></span>
                                <p className={styles.description}>
                                    Thanks for reaching out! I have received your message and will get back to you shortly.
                                </p>
                            </div>
                        ) : messageStatus === 'error' ? (
                            <div className={styles.messageStatus}>
                                <span><BiXCircle color='#AB274F' /></span>
                                <p className={styles.description}>
                                    Apologies! Something went wrong and your message wasn't sent. You can reach out
                                    to me on <a href='https://www.linkedin.com/in/khzainulabidin/' target='_blank'>Linkedin.com</a>
                                </p>
                            </div>
                        ) : (
                            <div id='contactForm' className={styles.formContainer}>
                                <form className={styles.contactForm}>
                                    <input
                                        type='text'
                                        placeholder='Name *'
                                        title='Enter your name'
                                        name='name'
                                        value={contactFormData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type='email'
                                        placeholder='Email *'
                                        title='Enter your email address'
                                        name='email'
                                        value={contactFormData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <textarea
                                        placeholder='Message *'
                                        rows={12}
                                        title='Enter your message'
                                        name='message'
                                        value={contactFormData.message}
                                        onChange={handleChange}
                                        required>
                                    </textarea>
                                    <button
                                        type='button'
                                        title='Send message'
                                        onClick={sendMessage}
                                    >
                                        Send message
                                    </button>
                                </form>
                            </div>
                        )}

                        <div id='social' className={styles.socialContainer}>
                            <p className={styles.description}>Or we can also connect on social media</p>

                            <div className={styles.socialIconsContainer}>
                                <a href='https://github.com/khzainulabidin' target='_blank' title='Github'>
                                    <BiLogoGithub color='#000000' />
                                </a>
                                <a href='https://www.linkedin.com/in/khzainulabidin/' target='_blank' title='Linkedin'>
                                    <BiLogoLinkedin color='#0070ae' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}

export default LandingPage;