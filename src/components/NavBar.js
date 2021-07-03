import React, {useState} from "react";
import styles from './styles/NavBar.module.scss';
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import {Fade} from 'react-reveal';
import {BiMenuAltRight, IoCloseSharp} from 'react-icons/all';

const NavBar = ({pagePosition, width}) => {
    const [mobMenuVisible, setMobMenuVisible] = useState(false);

    const openMobMenu = () => {
        setMobMenuVisible(true);
    }

    const closeMobMenu = () => {
        setMobMenuVisible(false);
    }

    return(
        <Fade>
            <nav className={styles.navbar} style={{height: pagePosition<20 && width>990 ? '100px' : '50px'}}>
                <Logo size={50}/>
                <div className={styles.menu}>
                    {width>990 ? (
                        <React.Fragment>
                            <MenuItem to={'about'} name={'About'} className={styles.menuItem}/>
                            <MenuItem to={'portfolio'} name={'Portfolio'} className={styles.menuItem}/>
                            <MenuItem to={'contact'} name={'Contact'} className={styles.menuItem}/>
                        </React.Fragment>
                    ) : (
                        <Fade>
                            <span className={styles.mobMenuIcon} onClick={openMobMenu}><BiMenuAltRight/></span>
                        </Fade>
                    )}
                </div>
            </nav>

            <div className={styles.wrapper}>
                {mobMenuVisible ? (
                    <div className={styles.mobMenu}>
                        <Fade>
                            <span className={styles.closeIcon} onClick={closeMobMenu}><IoCloseSharp/></span>
                        </Fade>
                        <MenuItem to={'about'} name={'About'} className={styles.mobMenuItem} closeMenu={closeMobMenu}/>
                        <MenuItem to={'portfolio'} name={'Portfolio'} className={styles.mobMenuItem} closeMenu={closeMobMenu}/>
                        <MenuItem to={'contact'} name={'Contact'} className={styles.mobMenuItem} closeMenu={closeMobMenu}/>
                    </div>
                ) : null}
            </div>
        </Fade>
    );
}

export default NavBar;
