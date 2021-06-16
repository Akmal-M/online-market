import Main from "./main";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import ProductMain from "../Components/CardProduct/ProductMain";
import LandingMen from "../Components/Men/LandingMen";
import React from "react";

export default function Home() {
    return (
        <div>
            <Navbar/>
            <LandingMen/>
            <ProductMain/>
            <Main/>
            <Footer/>
        </div>

    )
}
