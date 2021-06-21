import React from 'react';
import ImgZoom from "./ImgZoom";
import ProductInformation from "./ProductInformation";
const Product = () => {
    return (
        <div>
            <div className="grid grid-cols-10 container mx-auto my-6">
                <div className="col-span-4">
                    <ImgZoom/>
                </div>
                <div className="col-span-6">
                    <ProductInformation/>
                </div>w
            </div>
        </div>
    );
};
export default Product;