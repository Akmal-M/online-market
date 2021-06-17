import React from 'react';
import ProductMain from "../../Components/CardProductWoman/ProductMain";
import Main from "../main";
import Footer from "../../Components/Footer/Footer";
import LandingWomen from "../../Components/Women/LandingWomen";
import Navbar from "../../Components/Navbar/Navbar";

const Woman = () => {
    return (
        <div className="container mx-auto">
            <LandingWomen/>
            <ProductMain/>
            <Main/>
        </div>


    );
};

export default Woman;