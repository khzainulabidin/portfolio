import React, {useState} from "react";
import styles from './styles/Contact.module.scss';
import {Element} from 'react-scroll';
import emailjs from 'emailjs-com';
import {FiInstagram} from 'react-icons/fi';
import {GrTwitter} from 'react-icons/gr';
import {FaFacebook,FaLinkedinIn,FaGithub} from 'react-icons/fa';
import SocialIcon from "./SocialIcon";
import {Fade} from 'react-reveal';

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
            <Fade>
                <div className={styles.contactForm}>
                    <Fade>
                        <p>Let's get in touch</p>
                    </Fade>

                    {status !== '' ? (
                        <Fade>
                            <div className={styles.notification} style={{background: status === 'OK' ? '#1BB596' : '#CF3B3E'}}>
                                <span>{status === 'OK' ? 'Your message has been sent successfully!' : 'Your message was not delivered. Please try again!'}</span>
                            </div>
                        </Fade>
                    ) : null}

                    {status !== 'OK' ? (
                        <Fade>
                            <form onSubmit={sendEmail} id={'contact-form'}>
                                <input type={'text'} placeholder={'Your Name'} name={'name'} required/>
                                <input type={'email'} placeholder={'Your Email'} name={'email'} required/>
                                <input type={'text'} placeholder={'Subject'} name={'subject'} required/>
                                <textarea placeholder={'Message'} name={'message'} required/>
                                <button type={'submit'} className={'primary-button'}>Send</button>
                            </form>
                        </Fade>
                    ) : null}
                </div>
            </Fade>

            <Fade>
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
                            icon={<FaGithub/>}
                            title={'Github'}
                            url={'https://github.com/khzainulabidin'}
                        />
                    </div>

                    <div className={styles.address}>
                        <span>Edison, NJ, USA</span>
                    </div>
                </div>
            </Fade>
        </Element>
    );
}

export default Contact;
