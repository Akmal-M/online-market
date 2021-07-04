import Main from "./main";
import ProductMain from "../Components/CardProduct/ProductMain";
import LandingMen from "../Components/Men/LandingMen";
import React from "react";

export default function Home() {
    return (
        <div>
            <LandingMen/>
            <ProductMain/>
            <Main/>
        </div>

    )
}
