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

import software from '../assets/images/software/Medberry.jpg';

const Portfolio = () => {
    const [items] = useState([
        {name: 'A-Deo-Nobis Logo', image: graphic, tag: 'graphic design'},
        {name: 'AB-Property Logo', image: graphic1, tag: 'graphic design'},
        {name: 'Asphalt-Society Logo', image: graphic2, tag: 'graphic design'},
        {name: 'BakeAway Logo', image: graphic3, tag: 'graphic design'},
        {name: 'Barones-Carriages Logo', image: graphic4, tag: 'graphic design'},
        {name: 'BCC-Hotel Logo', image: graphic5, tag: 'graphic design'},
        {name: 'Beyond Logo', image: graphic6, tag: 'graphic design'},
        {name: 'Equidae Logo', image: graphic7, tag: 'graphic design'},
        {name: 'Expat-Infinity Logo', image: graphic8, tag: 'graphic design'},
        {name: 'Gadchitz Logo', image: graphic9, tag: 'graphic design'},
        {name: 'Giovez Logo', image: graphic10, tag: 'graphic design'},
        {name: 'Jewellery-Marvels Logo', image: graphic11, tag: 'graphic design'},
        {name: 'Leclat Logo', image: graphic12, tag: 'graphic design'},
        {name: 'Lyfted-Legion Logo', image: graphic13, tag: 'graphic design'},
        {name: 'Mane Packaging', image: graphic14, tag: 'graphic design'},
        {name: 'Nick-Chorneau Logo', image: graphic15, tag: 'graphic design'},
        {name: 'ProudMasculine Logo', image: graphic16, tag: 'graphic design'},
        {name: 'Sebastian-Azul Logo', image: graphic17, tag: 'graphic design'},

        {name: 'MedBerry - Music Player', image: software, tag: 'software dev'},
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
                    <PortfolioItem key={index} image={item.image} name={item.name} tag={item.tag}/>
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