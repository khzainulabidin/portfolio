import React from "react";
import styles from './styles/NavBar.module.scss';
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import {Fade} from 'react-reveal';

const NavBar = ({pagePosition}) => {
    return(
        <Fade>
            <nav className={styles.navbar} style={{height: pagePosition < 20 ? '100px' : '50px'}}>
                <Logo size={50}/>
                <div className={styles.menu}>
                    <MenuItem to={'about'} name={'About'}/>
                    <MenuItem to={'services'} name={'Services'}/>
                    <MenuItem to={'portfolio'} name={'Portfolio'}/>
                    <MenuItem to={'contact'} name={'Contact'}/>
                </div>
            </nav>
        </Fade>
    );
}

export default NavBar;