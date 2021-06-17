import React from 'react';
import ProductMain from "../../Components/CardProductWoman/ProductMain";
import Main from "../main";
import Footer from "../../Components/Footer/Footer";
import LandingWomen from "../../Components/Women/LandingWomen";
import Navbar from "../../Components/Navbar/Navbar";

const Women = () => {
    return (
        <div>
            <Navbar/>
            <LandingWomen/>
            <ProductMain/>
            <Main/>
            <Footer/>
        </div>


    );
};

export default Women;