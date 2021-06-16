import React from 'react';
import ImgZoom from "./ImgZoom";
import ProductInformation from "./ProductInformation";

const Product = () => {
    return (
        <div>
            <div className="flex container mx-auto px-8 my-6 gap-20">
                <ImgZoom/>
                <ProductInformation/>
            </div>
        </div>
    );
};

export default Product;