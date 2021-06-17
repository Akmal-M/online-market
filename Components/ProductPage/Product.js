import React from 'react';
import ImgZoom from "./ImgZoom";
import ProductInformation from "./ProductInformation";

const Product = () => {
    return (
        <div>
            <div className="grid grid-cols-11  container mx-auto mt-10">
                <div className="col-span-5">
                    <div className=" ">

                        <ImgZoom/>
                    </div>
                </div>
                <div className="col-span-6">
                    <ProductInformation/>
                </div>
            </div>
        </div>
    );
};

export default Product;