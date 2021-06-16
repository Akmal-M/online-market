import React from 'react';
import useTranslation from "next-translate/useTranslation";
import Link from 'next/link'
import {AiOutlineHeart} from "react-icons/ai";
import {BiHeadphone, BiShoppingBag} from "react-icons/bi";
import {BsPerson} from "react-icons/bs";

const MidNav = () => {
    const {t} = useTranslation();
    return (
        <div className=' bg-gray-50 items-center h-20 flex justify-between px-20'>
            <div className='flex '>
                <div>
                    <Link href='/women'>
                        <a>
                            <button
                                className="outline-none hover:bg-white delay-100 text-gray-700 h-20 px-2 font-bold">{t('ЖЕНЩИНАМ')}</button>
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href='/'>
                        <a>
                            <button
                                className="outline-none hover:bg-white delay-100 text-gray-700 h-20 px-2 font-bold">{t('МУЖЧИНАМ')}</button>
                        </a>
                    </Link>
                </div>
            </div>

            <div className='text-red-500 text-4xl'>
                <span className='text-black '>New</span>market
            </div>
            <div className='flex text-3xl items-center'>
                <div className='mx-3'>
                    <BsPerson/>
                </div>
                <div className='mx-3'>
                    <AiOutlineHeart/>
                </div>
                <div className='mx-3'>
                    <BiShoppingBag/>
                </div>
                <div className='mx-3'>
                    <BiHeadphone/>

                </div>
                <div className='rounded-full  mx-3'>
                    <img className='max-h-5'
                         src="https://res.cloudinary.com/bulutvoy/image/upload/v1623482463/test/1500px-Flag_of_Uzbekistan__3-2_.svg_gabjs4.png"
                         alt="uzbek"/>
                </div>

            </div>

        </div>
    );
};

export default MidNav;