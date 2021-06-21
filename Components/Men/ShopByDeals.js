import React from 'react';
import Link from 'next/link'
import {BsFillLightningFill, BsPlus} from "react-icons/bs";

const ShopByDeals = () => {
    return (
        <div>
            <p className="text-center font-bold text-2xl mt-4 mb-2">Быстрые сделки</p>
            <div className="container mx-auto p-8 opacity-90">
                <div className="grid grid-cols-5 gap-3">


                    <img src="/images/mens/skidka.jpg" alt=""/>

                    <div className="bg-gray-100">
                        <Link href='/productPage'>
                            <a>
                                <div className="card-header relative"><img src="/images/mens/byshop-2.jpg" alt=""/>
                                    <div
                                        className="overflow delay-150 bottom-0 left-0 pt-44 pl-16 h-full w-full absolute hover:opacity-75 opacity-0">
                                        <button className="bg-white p-1 flex justify-center items-center gap-3 gap-3">
                                            <BsPlus/> См. все
                                        </button>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <div className="px-1">

                            <p>Свободные брюки из хлопка</p>
                            <div className="flex justify-center items-center gap-3">
                                <p className="text-lg font-bold">US$26.99</p>
                                <p className="text-sm">US$31.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100">
                        <Link href='/productPage'>
                            <a>
                                <div className="card-header relative"><img src="/images/mens/byshop-1.jpg" alt=""/>
                                    <div
                                        className="overflow delay-150 bottom-0 left-0 pt-44 pl-16 h-full w-full absolute hover:opacity-75 opacity-0">
                                        <button className="bg-white p-1 flex justify-center items-center gap-3">
                                            <BsPlus/> См. все
                                        </button>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <div className="px-1">

                            <p>Свободные брюки из хлопка</p>
                            <div className="flex justify-center items-center gap-3">
                                <p className="text-lg font-bold">US$35.06</p>
                                <p className="text-sm">US$31.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100">
                        <Link href='/productPage'>
                            <a>
                                <div className="card-header relative"><img src="/images/mens/byshop-3.jpg" alt=""/>
                                    <div
                                        className="overflow delay-150 bottom-0 left-0 pt-44 pl-16 h-full w-full absolute hover:opacity-75 opacity-0">
                                        <button className="bg-white p-1 flex justify-center items-center gap-3">
                                            <BsPlus/> См. все
                                        </button>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <div className="px-1">

                            <p>Свободные брюки из хлопка</p>
                            <div className="flex justify-center items-center gap-3">
                                <p className="text-lg font-bold">US$18.99
                                </p>
                                <p className="text-sm">US$31.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100">
                        <Link href='/productPage'>
                            <a>
                                <div className="card-header relative"><img src="/images/mens/byshop-4.jpg" alt=""/>
                                    <div
                                        className="overflow delay-150 bottom-0 left-0 pt-44 pl-16 h-full w-full absolute hover:opacity-75 opacity-0">
                                        <button className="bg-white p-1 flex justify-center items-center gap-3">
                                            <BsPlus/> См. все
                                        </button>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <div className="px-1">

                            <p>Свободные брюки из хлопка</p>
                            <div className="flex justify-center items-center gap-3">
                                <p className="text-lg font-bold">US$17.99</p>
                                <p className="text-sm">US$31.99</p>
                            </div>
                        </div>
                    </div>
                </div>

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