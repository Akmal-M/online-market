import React from 'react';
import {Ri24HoursLine} from "react-icons/ri";

const Footer = ({icon, name, info}) => {
    return (
        <div>
            <div className="flex justify-center items-center py-2">{icon}</div>
            <div>{name}</div>
            <div>{info}</div>
        </div>
    );
};

export default Footer;