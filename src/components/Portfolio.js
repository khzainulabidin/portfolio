import React, {useState, useEffect} from "react";
import styles from './styles/Portfolio.module.scss';
import {Element} from 'react-scroll';
import PortfolioItem from "./PortfolioItem";
import {Fade} from 'react-reveal';
import Filters from "./Filters";
import myWork from "../assets/data/myWork";

const Portfolio = () => {
    const [items] = useState(myWork);
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
            <Fade>
                <h1>My work</h1>
                <div className={styles.tagsFilter}>
                    <Filters items={items} setUpdatedItems={setUpdatedItems}/>
                </div>
            </Fade>

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
