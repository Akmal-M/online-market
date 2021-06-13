import React from 'react';

const ProductCard = ({img, info, price}) => {
    return (
        <div>
            <div className="container mx-auto grid grid-cols-6 flex gap-4 mt-10">

                <div>{img}</div>
                <div></div>
                <div className="flex justify-center items-center">{price}</div>

            </div>
        </div>
    );
};

export default ProductCard;