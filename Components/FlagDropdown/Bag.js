import React from 'react';

const Bag = () => {
    return (
        <div className="flex justify-center bg-white container mx-auto text-sm w-60">
            <div className="bg-gray-50 h-4 w-60 z-10 absolute"></div>
            <img className="filter grayscale  contrast-100 " src="/images/bag-header.png" alt=""/>
            <div className="absolute px-6 text-gray-800 mt-12 text-lg font-bold text-center">
                <p>Your Shopping Bag is Empty.</p>
                <p>
                    Shop now OR Sign in to check your shopping bag
                </p>
            </div>
        </div>
    );
};

export default Bag;