import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            to='mailto:ccutlerbrs@aol.com'
            style={{ color: 'rgba(255, 255, 255, 0.75)' }}
            // onClick={(e) => {
            //     window.location.href = mailto;
            //     e.preventDefault();
            // }}
        >
            {label}
        </Link>
    );
};

export default ButtonMailto;