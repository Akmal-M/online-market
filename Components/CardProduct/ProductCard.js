import React from 'react';

const ProductCard = ({img, info, price}) => {
    return (
        <div>
            <div className="text-xs">
                <div className="container mx-auto mt-10">
                    <div className="w-48">{img}</div>
                    <div>{info}</div>
                    <div className="flex justify-center items-center">{price}</div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;