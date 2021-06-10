import React from 'react';
import useTranslation from "next-translate/useTranslation";

const Navbar = () => {
    const {t} = useTranslation();
    return (
        <div>
            <div>
                <p>ЖЕНЩИНАМ</p>
                <p>МУЖЧИНАМ</p>
            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Navbar;