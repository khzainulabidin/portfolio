import React, {useState} from "react";
import styles from './styles/Contact.module.scss';
import {Element} from 'react-scroll';
import emailjs from 'emailjs-com';
import {
    FaFacebook,
    GrTwitter,
    FiInstagram,
    FaLinkedinIn,
    GoMarkGithub,
} from 'react-icons/all';
import SocialIcon from "./SocialIcon";
import {LightSpeed} from 'react-reveal';

const Contact = () => {
    const [status, setStatus] = useState('');

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAILJS_USER_ID)
            .then((result) => {
                if (result.status === 200){
                    document.getElementById('contact-form').reset();
                }
                setStatus(result.text);
            }, (error) => {
                setStatus(error.message);
            });
    }

    return(
        <Element name={'contact'} className={styles.contact}>
            <LightSpeed left>
                <div className={styles.contactForm}>
                    <p>Get in touch</p>

                    {status !== '' ? (
                        <LightSpeed left>
                            <div className={styles.notification} style={{background: status === 'OK' ? '#1BB596' : '#CF3B3E'}}>
                                <span>{status === 'OK' ? 'Your message has been sent successfully!' : 'Your message was not delivered. Please try again!'}</span>
                            </div>
                        </LightSpeed>
                    ) : null}

                    {status !== 'OK' ? (
                        <form onSubmit={sendEmail} id={'contact-form'}>
                            <input type={'text'} placeholder={'Your Name'} name={'name'} required/>
                            <input type={'email'} placeholder={'Your Email'} name={'email'} required/>
                            <input type={'text'} placeholder={'Subject'} name={'subject'} required/>
                            <textarea placeholder={'Message'} name={'message'} required/>
                            <button type={'submit'} className={'primary-button'}>Send</button>
                        </form>
                    ) : null}
                </div>
            </LightSpeed>

            <LightSpeed right>
                <div className={styles.info}>
                    <div className={styles.icons}>
                        <SocialIcon
                            className={styles.facebook}
                            icon={<FaFacebook/>}
                            title={'Facebook'}
                            url={'https://www.facebook.com/khzainulabidin/'}
                        />
                        <SocialIcon
                            className={styles.twitter}
                            icon={<GrTwitter/>}
                            title={'Twitter'}
                            url={'https://twitter.com/khzainulabidin'}
                        />
                        <SocialIcon
                            className={styles.instagram}
                            icon={<FiInstagram/>}
                            title={'Instagram'}
                            url={'https://www.instagram.com/khzainulabidin/'}
                        />
                        <SocialIcon
                            className={styles.linkedin}
                            icon={<FaLinkedinIn/>}
                            title={'LinkedIn'}
                            url={'http://linkedin.com/in/khzainulabidin'}
                        />
                        <SocialIcon
                            className={styles.github}
                            icon={<GoMarkGithub/>}
                            title={'Github'}
                            url={'https://github.com/khzainulabidin'}
                        />
                    </div>

                    <div className={styles.address}>
                        <span>Brooklyn, NY, USA</span>
                    </div>
                </div>
            </LightSpeed>
        </Element>
    );
}

export default Contact;