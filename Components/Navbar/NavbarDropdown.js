import React from 'react';
import {BiSearch} from "react-icons/bi";
import Link from 'next/link'
import Discount from "./Discount";
import NewInNav from "./NewInNav";


const NavbarDropdown = () => {
    return (
        <div className='flex justify-between px-20 items-center py-3'>
            <div className='flex items-center relative'>
                <div className='mx-3 w-full h-auto dropdown inline-block relative'>
                    <div className="flex items-center cursor-pointer">
                        <Link href='/'>
                            <a className="hover:border-gray-500 border-transparent border-b-2 delay-100 py-2">Новинки</a>
                        </Link>
                    </div>
                    <div className="dropdown-content absolute hidden bg-red-500 text-gray-800 left-0 ">
                        <NewInNav/>
                    </div>
                </div>
                <div className='mx-3 dropdown inline-block relative'>
                    <div className="flex items-center cursor-pointer">
                        <Link href='/'>
                            <a className="hover:border-gray-500 border-transparent border-b-2 delay-100 py-2">Новинки</a>
                        </Link>
                    </div>
                    <div className="dropdown-content absolute hidden bg-white text-gray-800">
                        <NewInNav/>
                    </div>
                </div>
                <div className='mx-3 dropdown inline-block relative'>
                    <div className="flex items-center cursor-pointer">
                        <Link href='/'>
                            <a className="hover:border-gray-500 border-transparent border-b-2 delay-100 py-2">Новинки</a>
                        </Link>
                    </div>
                    <div className="dropdown-content absolute hidden bg-white text-gray-800">
                        <NewInNav/>
                    </div>
                </div>
                <div className='mx-3 dropdown inline-block relative'>
                    <div className="flex items-center cursor-pointer">
                        <Link href='/'>
                            <a className="hover:border-gray-500 border-transparent border-b-2 delay-100 py-2">Новинки</a>
                        </Link>
                    </div>
                    <div className="dropdown-content absolute hidden bg-white text-gray-800">
                        <NewInNav/>
                    </div>
                </div>
                <div className='mx-3 dropdown inline-block relative'>
                    <div className="flex items-center cursor-pointer">
                        <Link href='/'>
                            <a className="hover:border-gray-500 border-transparent border-b-2 delay-100 py-2">Новинки</a>
                        </Link>
                    </div>
                    <div className="dropdown-content absolute hidden bg-white text-gray-800">
                        <NewInNav/>
                    </div>
                </div>
                <div className='mx-3 dropdown inline-block relative'>
                    <div className="flex items-center cursor-pointer">
                        <Link href='/'>
                            <a className="hover:border-gray-500 border-transparent border-b-2 delay-100 py-2">Новинки</a>
                        </Link>
                    </div>
                    <div className="dropdown-content absolute hidden bg-white text-gray-800">
                        <NewInNav/>
                    </div>
                </div>


            </div>

            <div className="flex">
                <div>
                    <input className="outline-none border p-2 w-52	text-sm"
                           type="text" name="name" placeholder="комбинезон женский"/>
                </div>
                <div>
                    <button
                        className="bg-gray-700 h-9 px-2 justify-center items-center outline-none hover:bg-gray-500 delay-100"
                        type="button">
                        <BiSearch color="white"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavbarDropdown;