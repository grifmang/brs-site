import React from "react";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <a
            href='mailto:ccutlerbrs@aol.com'
            style={{ color: 'rgba(255, 255, 255, 0.75)' }}
        >
            {label}
        </a>
    );
};

export default ButtonMailto;
