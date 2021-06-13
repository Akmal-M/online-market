import React, {useEffect, useState} from 'react';
import {BiSearch} from "react-icons/bi";
import Link from 'next/link'
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Six from "./Six";
import Seven from "./Seven";


const NavbarDropdown = () => {

    const [dropdown, setDropdown] = useState('')

    console.log(dropdown)
    return (
        <div className='flex justify-between items-center py-3 inline-block relative'>
            <div className='flex items-center px-20 dropdown'>
                <div className="flex items-center cursor-pointer " onMouseOver={() => setDropdown('one')}>
                    <Link href='/'>
                        <a className="hover:border-gray-500 border-transparent border-b-2 delay-100 py-2">Новинки</a>
                    </Link>
                </div>
                <div className="flex px-5 items-center cursor-pointer" onMouseOver={() => setDropdown('two')}>
                    <Link href='/'>
                        <a className="hover:border-gray-500 border-transparent border-b-2 delay-100 py-2">
                            Весенняя Коллекция</a>
                    </Link>
                </div>
                <div className="flex px-5 items-center cursor-pointer" onMouseOver={() => setDropdown('three')}>
                    <Link href='/'>
                        <a className="hover:border-gray-500 border-transparent border-b-2 delay-100 py-2">Одежды</a>
                    </Link>
                </div>
                <div className="flex px-5 items-center cursor-pointer" onMouseOver={() => setDropdown('four')}>
                    <Link href='/'>
                        <a className="hover:border-gray-500 border-transparent border-b-2 delay-100 py-2">
                            Обуви</a>
                    </Link>
                </div>
                <div className="flex px-5 items-center cursor-pointer" onMouseOver={() => setDropdown('five')}>
                    <Link href='/'>
                        <a className="hover:border-gray-500 border-transparent border-b-2 delay-100 py-2">Сумки И
                            Аксессуары</a>
                    </Link>
                </div>
                <div className="flex px-5 items-center cursor-pointer" onMouseOver={() => setDropdown('six')}>
                    <Link href='/'>
                        <a className="hover:border-gray-500 border-transparent border-b-2 delay-100 py-2">Дом И Сад</a>
                    </Link>
                </div>
                <div className="flex px-5 items-center cursor-pointer" onMouseOver={() => setDropdown('seven')}>
                    <Link href='/'>
                        <a className="hover:border-gray-500 border-transparent border-b-2 delay-100 py-2">Акция</a>
                    </Link>
                </div>


                <div className="dropdown-content absolute top-14 hidden bg-white text-gray-800 left-0 w-full ">
                    {
                        dropdown === 'one' ? <One/> :
                            dropdown === 'two' ? <Two/> :
                                dropdown === 'three' ? <Three/> :
                                    dropdown === 'four' ? <Four/> :
                                        dropdown === 'five' ? <Five/> :
                                            dropdown === 'six' ? <Six/> :
                                                dropdown === 'seven' && <Seven/>
                    }

                </div>

            </div>
            <div className="flex mr-12">
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