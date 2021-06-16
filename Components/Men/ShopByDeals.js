import React from 'react';
import Link from 'next/link'

const ShopByDeals = () => {
    return (
        <div>
            <p className="text-center font-bold text-2xl mt-4 mb-2">Быстрые сделки</p>
            <div className="container mx-auto p-8 opacity-90">
                <img src="https://imgaz1.chiccdn.com/os/202106/20210607040247_881.jpg" alt=""/>
                <Link href='./about'>
                    <a>
                        <img className="mt-12" src="https://imgaz1.chiccdn.com/os/202106/20210607034915_968.jpg.webp"
                             alt=""/>
                    </a>
                </Link>
            </div>
            <p className="text-center font-bold text-2xl mt-2">Популярные бренды</p>
            <div className="container mx-auto p-8 opacity-90">
                <div>
                    <Link href='./about'>
                        <a>
                            <img src="https://imgaz1.chiccdn.com/os/202106/20210607034931_816.jpg.webp"
                                 alt=""/>
                        </a>

                    </Link>
                </div>

                <div className="flex h-72 gap-10 -mt-80 pl-96 absolute">
                    <img className="ml-56" src="https://imgaz1.chiccdn.com/os/202106/20210607034952_435.jpg.webp"
                         alt=""/>
                    <img src="https://imgaz1.chiccdn.com/os/202106/20210607034952_435.jpg.webp" alt=""/>
                </div>

            </div>
            <div className="flex container mx-auto px-8">
                <img className="w-3/6 hover:opacity-75" src="https://imgaz1.chiccdn.com/os/202106/20210607035019_540.jpg.webp"
                     alt=""/>
                <img className="w-3/6 hover:opacity-75" src="https://imgaz1.chiccdn.com/os/202106/20210607035031_304.jpg.webp"
                     alt=""/>
            </div>
        </div>
    );
};

export default ShopByDeals;