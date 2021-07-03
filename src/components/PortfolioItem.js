import React, {useState} from "react";
import styles from './styles/PortfolioItem.module.scss';
import {Fade} from "react-reveal";
import {IoCloseSharp} from "react-icons/all";

const PortfolioItem = ({item: {image, name, tag, description, link}}) => {
    const [hoverShown, setHoverShown] = useState(false);
    const [detailsBoxOpen, setDetailsBoxOpen] = useState(false);

    return(
        <Fade>
            <div
                className={styles.portfolioItem}
                onMouseEnter={() => setHoverShown(true)}
                onMouseLeave={() => setHoverShown(false)}
                style={{backgroundImage: `url(${image})`}}
                onClick={() => setDetailsBoxOpen(true)}
            >
                {hoverShown ? (
                    <Fade>
                        <div className={styles.itemHover}>
                            <p>{name}</p>
                            <div className={styles.tags}>
                                <span>{tag}</span>
                            </div>
                        </div>
                    </Fade>
                ) : null}
            </div>

            <div className={styles.wrapper}>
                {detailsBoxOpen ? (
                    <Fade>
                        <div className={styles.detailsBox}>
                            <Fade>
                                <span className={styles.closeIcon} onClick={() => setDetailsBoxOpen(false)}><IoCloseSharp/></span>
                            </Fade>
                            <Fade>
                                <img src={image} alt={'Portfolio Item'} onContextMenu={e => e.preventDefault()}/>
                                <div className={styles.details}>
                                    <h2>{name} {link ? <span onClick={() => window.open(link, '_blank')}>Visit</span> : null}</h2>
                                    <p>{description}</p>
                                </div>
                            </Fade>
                        </div>
                    </Fade>
                ) : null}
            </div>
        </Fade>
    );
}

export default PortfolioItem;
