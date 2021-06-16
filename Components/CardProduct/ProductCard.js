import React from 'react';
import {BsFillLightningFill} from "react-icons/bs";
import Link from 'next/link'

const ProductCard = ({img, info, price}) => {
    return (
        <div>
            <div className="mb-3">
                <Link href='/productPage'>
                    <a>
                        <div className="card-header relative">{img}
                            <div
                                className="overflow delay-150 bottom-0 left-0 pt-44 pl-10 h-full w-full absolute hover:opacity-75 opacity-0">
                                <button className="bg-white p-1 flex justify-center items-center">
                                    <BsFillLightningFill/> Купить сейчас
                                </button>
                            </div>
                        </div>
                    </a>
                </Link>
                <div className="text-xs mt-2">{info}</div>
                <div className="flex justify-center items-center mt-1 text-sm font-bold">{price}</div>

            </div>


        </div>
    );
};

export default ProductCard;