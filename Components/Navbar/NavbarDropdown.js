import React from 'react';
import {BiSearch} from "react-icons/bi";
import Link from 'next/link'

const NavbarDropdown = () => {
    return (
        <div className='flex justify-between px-20 items-center py-3'>
            <div className='flex items-center'>
                <div className='mx-7'>
                    <Link href='/'>
                        <a>Link1</a>
                    </Link>
                </div>

                <div className='mx-7'>
                    <Link href='/'>
                        <a>Link1</a>
                    </Link>
                </div>

                <div className='mx-7'>
                    <Link href='/'>
                        <a>Link1</a>
                    </Link>
                </div>

                <div className='mx-7'>
                    <Link href='/'>
                        <a>Link1</a>
                    </Link>
                </div>
                <div className='mx-7'>
                    <Link href='/'>
                        <a>Link1</a>
                    </Link>
                </div>
                <div className='mx-7'>
                    <Link href='/'>
                        <a>Link1</a>
                    </Link>
                </div>

                <div className='mx-7'>
                    <Link href='/'>
                        <a>Link1</a>
                    </Link>
                </div>

                <div className='mx-7'>
                    <Link href='/'>
                        <a>Link1</a>
                    </Link>
                </div>


            </div>
            <div className='flex'>
                <input type="text" className='border border-gray-300'/>
                <button>
                    <BiSearch/>
                </button>
            </div>
        </div>
    );
};

export default NavbarDropdown;