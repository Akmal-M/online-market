import React from 'react';
import FooterCards from "./FooterCards";
import FooterLinks from "./FooterLinks";

const Footer = () => {
    return (
        <div className="bg-gray-100 py-4">
            <div className="mt-8">
                <FooterCards/>
            </div>
            <div className="mt-10">
                <FooterLinks/>
            </div>
        </div>
    );
};

export default Footer;