import React from "react";
import {Link} from "react-scroll";

const MenuItem = ({to, name, className, closeMenu=null}) => {
    return(
        <React.Fragment>
            <Link
                to={to}
                className={className}
                activeClass={'active'}
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
            >
                <span onClick={closeMenu}>{name}</span>
            </Link>
        </React.Fragment>
    );
}

export default MenuItem;