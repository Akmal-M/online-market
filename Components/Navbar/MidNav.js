import React, {useState} from 'react';
import useTranslation from "next-translate/useTranslation";
import Link from 'next/link'
import {AiOutlineHeart} from "react-icons/ai";
import {BiHeadphone, BiShoppingBag} from "react-icons/bi";
import {BsPerson} from "react-icons/bs";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Six from "./Six";
import Seven from "./Seven";
import Flag from "../FlagDropdown/Flag";
import Heart from "../FlagDropdown/heart";
import Bag from "../FlagDropdown/Bag";
import Modal from "../../pages/modal";


const MidNav = () => {
    const [modal, setModal] = useState(false)
    const [dropdown, setDropdown] = useState('')
    const {t} = useTranslation();
    return (
        <div>
            <div className=' bg-gray-50 items-center h-20 flex justify-between px-20'>
                <div className='flex '>
                    <div>
                        <Link href='/woman'>
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
                    <Link href='/'>
                        <a>
                            <span className='text-black '>New</span>market
                        </a>
                    </Link>
                </div>
                <div className='flex text-3xl items-center inline-block relative'>
                    <div className="dropdown flex gap-5 items-center">
                        <div className="flex items-center cursor-pointer " onMouseOver={() => setDropdown('flag')}>
                            <Link href='/login'>
                                <a className="border-transparent delay-100 py-2">
                                    <BsPerson/>
                                </a>
                            </Link>
                        </div>
                        <div className="flex items-center cursor-pointer " onMouseOver={() => setDropdown('heart')}>
                            <Link href='/'>
                                <a className=" border-transparent  py-2">
                                    <AiOutlineHeart/>
                                </a>
                            </Link>
                        </div>
                        <div
                            className="dropdown-content absolute top-12 hidden bg-white text-gray-800 left-0 w-full z-10">
                            {
                                dropdown === 'flag' ? <Flag/> :
                                    dropdown === 'heart' ? <Heart/> :
                                        dropdown === 'Bag' && <Bag/>
                            }
                        </div>
                        <div className="flex items-center cursor-pointer " onMouseOver={() => setDropdown('Bag')}>
                            <Link href='/'>
                                <a className="py-2">
                                    <BiShoppingBag/>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <div className="flex items-center cursor-pointer " onMouseOver={() => setDropdown('heart')}>
                                <Link href='/'>
                                    <a className="hover:border-gray-500 border-transparent border-b-2 delay-100 py-2">
                                        <BiHeadphone/>
                                    </a>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="flex items-center cursor-pointer rounded-full px-4"
                         onClick={() => setModal(!modal)}>
                        <Link href='/'>
                            <a className="py-2">
                                <img className='max-h-5'
                                     src="https://res.cloudinary.com/bulutvoy/image/upload/v1623482463/test/1500px-Flag_of_Uzbekistan__3-2_.svg_gabjs4.png"
                                     alt="uzbek"/>
                            </a>
                        </Link>

                    </div>
                </div>

            </div>
            <div>
                {
                    modal &&
                    <div
                        className='w-64 p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-20'>
                        <Modal/>
                    </div>
                }
            </div>
        </div>

    );
};

export default MidNav;