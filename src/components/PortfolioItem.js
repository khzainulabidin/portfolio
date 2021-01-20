import React, {useState} from "react";
import styles from './styles/PortfolioItem.module.scss';
import {Fade, Bounce} from "react-reveal";

const PortfolioItem = ({image, name, tag}) => {
    const [hoverShown, setHoverShown] = useState(false);

    return(
        <Bounce>
            <div
                className={styles.portfolioItem}
                onMouseEnter={() => setHoverShown(true)}
                onMouseLeave={() => setHoverShown(false)}
                style={{backgroundImage: `url(${image})`}}
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
        </Bounce>
    );
}

export default PortfolioItem;