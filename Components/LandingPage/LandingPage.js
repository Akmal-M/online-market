import React from 'react';
import Link from 'next/link'
import NewComponent from "./NewComponent";

const LandingPage = () => {
    return (
        <div>
            <Link href='/about'>
                <a>
                    <img className="w-full"
                        src="https://imgaz1.chiccdn.com/nc/myos_newchic_affiliate_activity/202106/20210605005214_540.jpg"
                        alt=""/>
                </a>
            </Link>
            <Link href='./about'>
                <a>
                    <div
                        className="flex justify-center text-center gap-5 items-center text-gray-800 bg-gray-50 py-2 opacity-75">
                        <div>
                            <p className="text-2xl font-bold">$6 OFF</p>
                            <p className="text-sm">ORDER OVER $60</p>
                        </div>
                        <div className="h-12 bg-gray-800 w-px"></div>
                        <div>
                            <p className="text-2xl font-bold">$20 OFF</p>
                            <p className="text-sm">ORDER OVER $120</p>
                        </div>
                        <div className="h-12 bg-gray-800 w-px"></div>
                        <div>
                            <p className="text-2xl font-bold">$30 OFF</p>
                            <p className="text-sm">ORDER OVER $150</p>
                        </div>
                        <button className="bg-yellow-600 text-white outline-none text-lg py-1 px-8 ml-16">
                            GET IT >
                        </button>
                    </div>
                </a>
            </Link>
            <div>
                <NewComponent/>
            </div>
        </div>
    );
};

export default LandingPage;