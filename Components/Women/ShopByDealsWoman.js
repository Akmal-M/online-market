import React from 'react';
import Link from 'next/link'
import {BsPlus} from "react-icons/bs";

const ShopByDealsWoman = () => {
    return (
        <div>

            <p className="text-center font-bold text-2xl mt-4 mb-2">Быстрые сделки</p>
            <div className="container mx-auto opacity-90 mt-4">
                <div className="flex flex-wrap gap-5 justify-center">


                    <img className="w-52" src="/images/woman/skidka.jpg" alt=""/>

                    <div className="bg-gray-100 w-52">
                        <Link href='/productPage'>
                            <a>
                                <div className="card-header relative"><img src="/images/woman/byshop-1.jpg" alt=""/>
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
                    <div className="bg-gray-100 w-52">
                        <Link href='/productPage'>
                            <a>
                                <div className="card-header relative"><img src="/images/woman/byshop-2.jpg" alt=""/>
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
                    <div className="bg-gray-100 w-52">
                        <Link href='/productPage'>
                            <a>
                                <div className="card-header relative"><img src="/images/woman/byshop-3.jpg" alt=""/>
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
                    <div className="bg-gray-100 w-52">
                        <Link href='/productPage'>
                            <a>
                                <div className="card-header relative"><img src="/images/woman/byshop-4.jpg" alt=""/>
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
                        <img className="mt-12" src="/images/woman/skidka-2.jpg"
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

                <div className="flex lg:h-72 gap-3 lg:gap-10 lg:-mt-80 -mt-24 lg:pl-96 pl-40 absolute">
                    <img className="lg:ml-56 lg:w-64 w-16" src="/images/woman/three-1.jpg"
                         alt=""/>

                    <img className="  lg:w-64 w-16" src="/images/woman/three-2.jpg" alt=""/>

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