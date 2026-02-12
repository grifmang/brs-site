import React from "react";

const Telephone = ({ label }) => {
    return (
        <a
            href='tel:14133485650'
            style={{ color: 'rgba(255, 255, 255, 0.75)' }}
        >
            {label}
        </a>
    );
};

export default Telephone;
