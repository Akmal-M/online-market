import React from 'react';
import Link from 'next/link'

const ShopByDeals = () => {
    return (
        <div>
            <p className="text-center font-bold text-2xl mt-4 mb-2">Быстрые сделки</p>
            <div className="container mx-auto p-8 opacity-90">
                <img src="/images/mens/skidka.jpg" alt=""/>
                <Link href='./about'>
                    <a>
                        <img className="mt-12" src="/images/mens/skidka-2.jpg"
                             alt=""/>
                    </a>
                </Link>
            </div>
            <p className="text-center font-bold text-2xl mt-2">Популярные бренды</p>
            <div className="container mx-auto p-8 opacity-90">
                <div>
                    <Link href='./about'>
                        <a>
                            <img src="/images/mens/flex-1.jpg"
                                 alt=""/>
                        </a>

                    </Link>
                </div>

                <div className="flex h-72 gap-10 -mt-80 pl-96 absolute">
                    <img className="ml-56" src="/images/mens/flex-2.jpg"
                         alt=""/>
                    <img src="/images/mens/flex-3.jpg" alt=""/>
                </div>

            </div>
            <div className="flex container mx-auto px-8">
                <img className="w-3/6 hover:opacity-75"
                     src="/images/mens/twoflex-1.jpg"
                     alt=""/>
                <img className="w-3/6 hover:opacity-75"
                     src="/images/mens/twoflex-2.jpg"
                     alt=""/>
            </div>
        </div>
    );
};

export default ShopByDeals;