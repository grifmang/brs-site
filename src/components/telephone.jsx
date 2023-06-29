import React from "react";
import { Link } from "react-router-dom";

const Telephone = ({ label }) => {
    return (
        <Link
            to='tel:14133485650'
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

export default Telephone;