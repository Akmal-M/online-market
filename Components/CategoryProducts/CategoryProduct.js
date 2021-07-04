import React, {useState} from 'react';
import ProductMain from "../CardProduct/ProductMain";

const CategoryProduct = () => {
    const [category, setCategory] = useState('')
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    console.log(category)
    console.log(color)
    return (
        <div>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-10 mt-6 mb-20">
                <div className="col-span-1">
                    <div className="flex flex-wrap gap-3">
                        <p className="font-bold ">Categories</p>
                        <p>Henley Shirts</p>
                        <p>T-Shirts</p>
                        <p>Tanks</p>
                        <p>Shirts</p>
                        <p>Golf Shirts</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <hr className="bg-gray-900 w-32 mt-2"/>
                        <div className="flex flex-wrap gap-5 mt-4">
                            <button className="bg-yellow-900 w-6 rounded-full" onClick={() => setColor('brown')}>.
                            </button>
                            <button className="bg-blue-600 w-6 rounded-full" onClick={() => setColor('blue')}>.</button>
                            <button className="bg-yellow-100 w-6 rounded-full" onClick={() => setColor('beige')}>.
                            </button>
                            <button className="bg-red-500 w-6 rounded-full" onClick={() => setColor('red')}>.</button>
                            <button className="bg-green-500 w-6 rounded-full" onClick={() => setColor('green')}>.
                            </button>
                            <button className="bg-gray-900 w-6 rounded-full" onClick={() => setColor('black')}>.
                            </button>
                            <button className="bg-gray-400 w-6 rounded-full" onClick={() => setColor('gray')}>.</button>
                            <button className="bg-gray-100 w-6 rounded-full" onClick={() => setColor('white')}>.
                            </button>
                            <button className="bg-pink-400 w-6 rounded-full" onClick={() => setColor('pink')}>.</button>
                            <button className="bg-indigo-700 w-6 rounded-full" onClick={() => setColor('purple')}>.
                            </button>
                            <button className="bg-yellow-600 w-6 rounded-full" onClick={() => setColor('orange')}>.
                            </button>
                            <button className="bg-yellow-500 w-6 rounded-full" onClick={() => setColor('yellow')}>.
                            </button>
                        </div>
                    </div>
                    <div>
                        <hr className="bg-gray-900 w-32 mt-4"/>
                        <p className="font-bold">Size</p>
                        <div className="cursor-pointer flex-wrap flex gap-3">
                            <div className="flex gap-2 hover:text-red-600">
                                <input type="checkbox"
                                       className="block mt-3  bg-red-500 checked:bg-blue-600 checked:border-transparent"
                                       onClick={() => setColor('36')}/>
                                <p className="mt-1.5">CA 36 (787)</p>
                            </div>
                            <div className="flex gap-2 hover:text-red-600">
                                <input type="checkbox"
                                       className="block mt-3  bg-red-500 checked:bg-blue-600 checked:border-transparent"
                                       onClick={() => setColor('38')}/>
                                <p className="mt-1.5">CA 38 (623)</p>
                            </div>
                            <div className="flex gap-2 hover:text-red-600">
                                <input type="checkbox"
                                       className="block mt-3  bg-red-500 checked:bg-blue-600 checked:border-transparent"
                                       onClick={() => setColor('40')}/>
                                <p className="mt-1.5">CA 40 (624)</p>
                            </div>
                            <div className="flex gap-2 hover:text-red-600">
                                <input type="checkbox"
                                       className="block mt-3  bg-red-500 checked:bg-blue-600 checked:border-transparent"
                                       onClick={() => setColor('46')}/>
                                <p className="mt-1.5">CA 46 (52)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-1 lg:ml-10 col-span-9">
                    <div className="flex flex-wrap gap-2">
                        <p className="font-bold">Categories:</p>
                        <div className="gap-3 flex flex-wrap">
                            <button className="bg-gray-100 p-2 h-10" onClick={() => setCategory('accessories')}>
                                Accessories
                            </button>
                            <button className="bg-gray-100 p-2 h-10" onClick={() => setCategory('men')}>
                                Men
                            </button>
                            <button className="bg-gray-100 p-2 h-10" onClick={() => setCategory('women')}>
                                Women
                            </button>
                            <button className="bg-gray-100 p-2 h-10" onClick={() => setCategory('bags')}>
                                Bags
                            </button>
                            <button className="bg-gray-100 p-2 h-10" onClick={() => setCategory('shoes')}>
                                Shoes
                            </button>
                            <button className="bg-gray-100 p-2 h-10" onClick={() => setCategory('beauty')}>
                                Beauty
                            </button>
                            <button className="bg-gray-100 p-2 h-10" onClick={() => setCategory('jewelry')}>
                                Jewelry & Watch
                            </button>
                            <button className="bg-gray-100 p-2 h-10" onClick={() => setCategory('home')}>
                                Home & Garden
                            </button>
                            <button className="bg-gray-100 p-2 h-10" onClick={() => setCategory('kids')}>
                                Kids & Mom
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 items-center mt-4">
                        <div>
                            <select className="h-10 p-1.5 bg-gray-100" name="" id="">
                                <option value="">Recommend</option>
                                <option value="">New Arrival</option>
                                <option value="">Price High to low</option>
                                <option value="">Price Low to High</option>
                            </select>
                        </div>
                        <div className="flex gap-2 hover:text-red-600">
                            <input type="checkbox"
                                   className="block mt-3  bg-red-500 checked:bg-blue-600 checked:border-transparent"/>
                            <p className="mt-1.5">Ship in 24 hours</p>
                        </div>
                        <div className="flex gap-2 hover:text-red-600">
                            <input type="checkbox"
                                   className="block mt-3  bg-red-500 checked:bg-blue-600 checked:border-transparent"/>
                            <p className="mt-1.5">SALE</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <ProductMain/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CategoryProduct;