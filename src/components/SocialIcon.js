import React from "react";

const SocialIcon = ({title, url, icon, className}) => {
    return(
        <span
            className={className}
            title={title}
            onClick={() => window.open(url, '_blank')}
        >
            {icon}
        </span>
    );
}

export default SocialIcon;