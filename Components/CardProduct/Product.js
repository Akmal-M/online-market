import React from 'react';

const Product = ({img, info, price}) => {
    return (
        <div>
            <p className="text-2xl items-center flex justify-center font-bold mt-6">Рекомендуем для вас</p>
            <div className="container mx-auto gap-4 mt-10">

                <div>{img}</div>
                <div>{info}</div>
                <div className="flex justify-center items-center">{price}</div>

            </div>
        </div>
    );
};

export default Product;