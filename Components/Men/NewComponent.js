import React from 'react';
import Link from 'next/link';

const NewComponent = () => {
    return (
        <div>
            <p className="text-2xl text-center font-bold mt-10">Новинки</p>

            <div
                className="flex flex-wrap justify-center items-center container mx-auto grid grid-cols-6 gap-5 px-8 mt-4 ">
                <div className="hover:opacity-75">
                    <Link href='/CategoryProduct'>
                        <a>
                            <img src="/images/mens/shopby-1.jpg" alt=""/>
                        </a>
                    </Link>

                </div>
                <div className="hover:opacity-75">
                    <Link href='/CategoryProduct'>
                        <a>
                            <img src="/images/mens/shopby-2.jpg" alt=""/>
                        </a>
                    </Link>

                </div>
                <div className="hover:opacity-75">
                    <Link href='/CategoryProduct'>
                        <a>
                            <img src="/images/mens/shopby-3.jpg" alt=""/>
                        </a>
                    </Link>

                </div>
                <div className="hover:opacity-75">
                    <Link href='/CategoryProduct'>
                        <a>
                            <img src="/images/mens/shopby-4.jpg" alt=""/>
                        </a>
                    </Link>

                </div>
                <div className="hover:opacity-75">
                    <Link href='/CategoryProduct'>
                        <a>
                            <img src="/images/mens/shopby-5.jpg" alt=""/>
                        </a>
                    </Link>

                </div>
                <div className="hover:opacity-75">
                    <Link href='/CategoryProduct'>
                        <a>
                            <img src="/images/mens/shopby-6.jpg" alt=""/> </a>
                    </Link>

                </div>
            </div>
            <div className="flex justify-center items-center container mx-auto gap-5 px-8 mt-4 ">
                <div className="hover:opacity-75">
                    <img src="/images/mens/threeimg.jpg" alt=""/>
                </div>
                <div className="hover:opacity-75">
                    <img src="/images/mens/threeimg2.jpg" alt=""/>
                </div>
            </div>
        </div>

    );
};

export default NewComponent;