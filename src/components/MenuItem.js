import React from "react";
import styles from './styles/MenuItem.module.scss';
import {Link} from "react-scroll";

const MenuItem = ({to, name}) => {
    return(
        <Link
            to={to}
            className={styles.menuItem}
            activeClass={'active'}
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
        >
            <span>{name}</span>
        </Link>
    );
}

export default MenuItem;