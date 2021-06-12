import React from 'react';

const Footer = ({icon, name, info}) => {
    return (
        <div className="px-16 py-10">
            <div className="flex justify-center items-center py-2">{icon}</div>
            <div className="text-center font-bold text-lg">{name}</div>
            <div className="text-center text-gray-700">{info}</div>
        </div>
    );
};

export default Footer;