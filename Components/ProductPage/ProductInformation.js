import React, {useState} from 'react';
import {FaStar} from "react-icons/fa";
import {AiOutlineArrowRight} from "react-icons/ai";
import {TiFlash} from "react-icons/ti";
import {FiClock} from "react-icons/fi";
import {BiShoppingBag} from "react-icons/bi";
import {RiTruckLine} from "react-icons/ri";
import {BsClockHistory} from "react-icons/bs";

const ProductInformation = () => {
    const [color, setColor] = useState()
    const [size, setSize] = useState()
    console.log(size)
    return (
        <div className="px-5">
            <p className="text-sm font-bold">Mens Cotton Solid Baggy Elastic Waist Casual Wide Leg Pants</p>
            <div className="flex gap-5 items-center">
                <p>SKUA41526</p>
                <div className="flex gap-1">
                    <FaStar color="red" size={15}/>
                    <FaStar color="red" size={15}/>
                    <FaStar color="red" size={15}/>
                    <FaStar color="red" size={15}/>
                    <FaStar color="red" size={15}/>
                </div>
                <p>49 Reviews</p>
            </div>
            <div className="bg-gray-50 w-full mt-4 p-2">
                <div className="flex items-center gap-2">
                    <p className="text-red-500 text-3xl font-bold">US$ 26.99</p>
                    <del>US$30.99</del>
                    <p className="bg-red-200 opacity-75 z-10">- 13%</p>
                </div>

                <div className="ml-3 ">
                    <div className="flex flex-wrap gap-2 mt-2 ml-3">
                        <img src="/images/mens/Screenshot_1.png" alt=""/>
                        <p>New user US$22.94 by coupon</p>
                        <p className="hover:text-red-500 flex items-center gap-2 cursor-pointer">Get
                            it <AiOutlineArrowRight/></p>
                    </div>
                    <div className="mt-2 gap-2 flex">
                        <TiFlash size={20} color="red"/>
                        <p className="flex items-center gap-2"><FiClock/> 04 : 19 : 09 : 05</p>
                        <p className="hover:text-red-500 flex items-center gap-2 cursor-pointer">More
                            Deals <AiOutlineArrowRight/></p>
                    </div>
                </div>
            </div>
            <p className="my-4 font-bold">COLOR</p>
            <div className="flex gap-2">
                <img src="/images/mens/product-9.jpg" className="w-8 border" alt="" onClick={() => setColor('red')}/>
                <img src="/images/mens/product-9.jpg" className="w-8 border" alt="" onClick={() => setColor('blue')}/>
                <img src="/images/mens/product-9.jpg" className="w-8 border" alt="" onClick={() => setColor('yellow')}/>
                <img src="/images/mens/product-9.jpg" className="w-8 border" alt="" onClick={() => setColor('green')}/>
            </div>
            <div className="flex mt-4 items-center gap-2">
                <p className="my-4 font-bold">Size</p>
                <select
                    className="block w-14 h-6 bg-gray-200 border border-gray-200 text-gray-700  focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state">
                    <option>US</option>
                    <option>UK</option>
                    <option>AU</option>
                    <option>BR</option>
                    <option>CA</option>
                    <option>Eu</option>
                </select>
            </div>
            <div className="flex gap-2">
                <div className="w-14 h-6 text-xs border p-1" onClick={() => setSize('34')}>CA 34</div>
                <div className="w-14 h-6 text-xs border p-1" onClick={() => setSize('36')}>CA 36</div>
                <div className="w-14 h-6 text-xs border p-1" onClick={() => setSize('38')}>CA 38</div>
                <div className="w-14 h-6 text-xs border p-1" onClick={() => setSize('40')}>CA 40</div>
                <div className="w-14 h-6 text-xs border p-1" onClick={() => setSize('42')}>CA 42</div>
                <div className="w-14 h-6 text-xs border p-1" onClick={() => setSize('44')}>CA 44</div>
            </div>
            <div className="flex gap-3 my-4">
                <button className="flex justify-center items-center bg-gray-800 text-white py-3 px-12 font-bold gap-2">
                    <BiShoppingBag/> ADD TO BAG
                </button>
            </div>
            <p className="text-xs">Order it get 27 points</p>

            <div className="flex gap-2 mt-3 items-center">
                <RiTruckLine/>
                <p>In stock, Dispatched on Jun 17 - Jun 19</p>
            </div>
            <div className="flex gap-2 items-center">
                <BsClockHistory/>
                <p>30-day Return Policy, Learn More</p>
            </div>

        </div>
    );
};

export default ProductInformation;