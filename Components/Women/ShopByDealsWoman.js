import React from 'react';
import Link from 'next/link'

const ShopByDealsWoman = () => {
    return (
        <div>
            <p className="text-center font-bold text-2xl mt-4 mb-2">Быстрые сделки</p>
            <div className="container mx-auto p-8 opacity-90">
                <img src="/images/woman/skidka.jpg" alt=""/>
                <Link href='./about'>
                    <a>
                        <img className="mt-12" src="/images/woman/uptoimg.jpg"
                             alt=""/>
                    </a>
                </Link>
            </div>
            <p className="text-center font-bold text-2xl mt-2">Популярные бренды</p>
            <div className="container mx-auto p-8 opacity-90">
                <div>
                    <Link href='./about'>
                        <a>
                            <img src="/images/woman/three.jpg"
                                 alt=""/>
                        </a>

                    </Link>
                </div>

                <div className="flex h-72 gap-10 -mt-80 pl-96 absolute">
                    <img className="ml-56" src="/images/woman/three-1.jpg"
                         alt=""/>
                    <img src="/images/woman/three-2.jpg" alt=""/>
                </div>

            </div>
            <div className="flex container mx-auto px-8">
                <img className="w-3/6 hover:opacity-75"
                     src="/images/woman/twoflex.jpg"
                     alt=""/>
                <img className="w-3/6 hover:opacity-75"
                     src="/images/woman/twoflex-2.jpg"
                     alt=""/>
            </div>
        </div>
    );
};

export default ShopByDealsWoman;