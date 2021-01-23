import React, {useState, useEffect} from "react";
import styles from './styles/Portfolio.module.scss';
import {Element} from 'react-scroll';
import PortfolioItem from "./PortfolioItem";
import {LightSpeed} from 'react-reveal';
import Filters from "./Filters";

import graphic from '../assets/images/graphic/A-Deo-Nobis-4.jpg';
import graphic1 from '../assets/images/graphic/AB-Property-2.jpg';
import graphic2 from '../assets/images/graphic/Asphalt-Society-1.jpg';
import graphic3 from '../assets/images/graphic/BakeAway-4.jpg';
import graphic4 from '../assets/images/graphic/Barones-Carriages-3.jpg';
import graphic5 from '../assets/images/graphic/BCC-Hotel.jpg';
import graphic6 from '../assets/images/graphic/Beyond-2.jpg';
import graphic7 from '../assets/images/graphic/Equidae-8.jpg';
import graphic8 from '../assets/images/graphic/Expat-Infinity-3.jpg';
import graphic9 from '../assets/images/graphic/Gadchitz-3.jpg';
import graphic10 from '../assets/images/graphic/Giovez-4.jpg';
import graphic11 from '../assets/images/graphic/Jewellery-Marvels.jpg';
import graphic12 from '../assets/images/graphic/Leclat-2.jpg';
import graphic13 from '../assets/images/graphic/Lyfted-Legion.jpg';
import graphic14 from '../assets/images/graphic/Mane-2.jpg';
import graphic15 from '../assets/images/graphic/Nick-Chorneau-A-3.jpg';
import graphic16 from '../assets/images/graphic/ProudMasculine-7.jpg';
import graphic17 from '../assets/images/graphic/Sebastian-Azul-5.jpg';

import web from '../assets/images/web/7a.png';
import web1 from '../assets/images/web/1a.png';
import web2 from '../assets/images/web/3a.png';
import web3 from '../assets/images/web/4a.png';
import web4 from '../assets/images/web/5a.png';
import web5 from '../assets/images/web/6a.png';

import software from '../assets/images/software/Medberry.jpg';

const Portfolio = () => {
    const [items] = useState([
        {name: 'Asphalt-Society Logo', image: graphic2, tag: 'graphic design', description: 'Logo designed for a client using Adobe Illustrator'},
        {name: 'BakeAway Logo', image: graphic3, tag: 'graphic design', description: 'Logo designed for a client using Adobe Illustrator'},
        {name: 'Barones-Carriages Logo', image: graphic4, tag: 'graphic design', description: 'Logo designed for a client using Adobe Illustrator'},
        {name: 'BCC-Hotel Logo', image: graphic5, tag: 'graphic design', description: 'Logo designed for a client using Adobe Illustrator'},
        {name: 'Beyond Logo', image: graphic6, tag: 'graphic design', description: 'Logo designed for a client using Adobe Illustrator'},
        {name: 'Equidae Logo', image: graphic7, tag: 'graphic design', description: 'Logo designed for a client using Adobe Illustrator'},
        {name: 'A-Deo-Nobis Logo', image: graphic, tag: 'graphic design', description: 'Logo designed for a client using Adobe Illustrator'},
        {name: 'AB-Property Logo', image: graphic1, tag: 'graphic design', description: 'Logo designed for a client using Adobe Illustrator'},
        {name: 'Expat-Infinity Logo', image: graphic8, tag: 'graphic design', description: 'Logo designed for a client using Adobe Illustrator'},
        {name: 'Gadchitz Logo', image: graphic9, tag: 'graphic design', description: 'Logo designed for a client using Adobe Illustrator'},
        {name: 'Giovez Logo', image: graphic10, tag: 'graphic design', description: 'Logo designed for a client using Adobe Illustrator'},
        {name: 'Jewellery-Marvels Logo', image: graphic11, tag: 'graphic design', description: 'Logo designed for a client using Adobe Illustrator'},
        {name: 'Leclat Logo', image: graphic12, tag: 'graphic design', description: 'Logo designed for a client using Adobe Illustrator'},
        {name: 'Lyfted-Legion Logo', image: graphic13, tag: 'graphic design', description: 'Logo designed for a client using Adobe Illustrator'},
        {name: 'Mane Packaging', image: graphic14, tag: 'graphic design', description: 'Logo designed for a client using Adobe Illustrator'},
        {name: 'Nick-Chorneau Logo', image: graphic15, tag: 'graphic design', description: 'Logo designed for a client using Adobe Illustrator'},
        {name: 'ProudMasculine Logo', image: graphic16, tag: 'graphic design', description: 'Logo designed for a client using Adobe Illustrator'},
        {name: 'Sebastian-Azul Logo', image: graphic17, tag: 'graphic design', description: 'Logo designed for a client using Adobe Illustrator'},

        {name: 'Portfolio Website', image: web, tag: 'web design', description: 'My portfolio website built using React JS'},
        {name: 'Taskoo Website', image: web5, tag: 'web design', description: 'Website designed for a client using React JS & Ant Design'},
        {name: 'Facebook Clone Website', image: web4, tag: 'web design', description: 'Website designed using React JS & Firebase'},
        {name: 'Neon Website', image: web3, tag: 'web design', description: 'Website designed for a client using React JS'},
        {name: 'Coach Carter Website', image: web2, tag: 'web design', description: 'Website designed for a client using React JS'},
        {name: 'CashMe Website', image: web1, tag: 'web design', description: 'Website designed for a client using React JS'},

        {name: 'MedBerry - Music Player', image: software, tag: 'software dev', description: 'A modern music player desktop application developed using Java, JavaFX and using OOP programming concepths'},
    ]);
    const [updatedItems, setUpdatedItems] = useState([]);
    const [itemsLimit, setItemsLimit] = useState(8);

    useEffect(() => {
        setUpdatedItems(items);
        // eslint-disable-next-line
    }, []);

    const loadMore = () => {
        setItemsLimit(itemsLimit+4);
    }

    return(
        <Element name={'portfolio'} className={styles.portfolio}>
            <LightSpeed left>
                <h1>My work</h1>
                <div className={styles.tagsFilter}>
                    <Filters items={items} setUpdatedItems={setUpdatedItems}/>
                </div>
            </LightSpeed>

            <div className={styles.container}>
                {updatedItems.slice(0, itemsLimit).map((item, index) => (
                    <PortfolioItem key={index} item={item}/>
                ))}
            </div>

            {itemsLimit < updatedItems.length ? (
                <div className={styles.tagsFilter}>
                    <button className={styles.loadMoreBtn} onClick={loadMore}>Load More</button>
                </div>
            ) : null}
        </Element>
    );
}

export default Portfolio;