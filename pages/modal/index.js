import React from 'react';

const Modal = () => {
    return (
        <div>

            <div>
                <div>
                    <p className="font-bold">Ship to</p>
                    <select className="w-56 border py-1 outline-none text-lg mt-1" name="" id="">
                        <option>Uzbekistan</option>
                        <option>USA</option>
                        <option>Russia</option>
                    </select>
                    <p className="text-xs">30-day return or refund guarantee.</p>
                    <p className="font-bold mt-4">Language</p>
                    <select className="w-56 border py-1 outline-none text-lg mt-1" name="" id="">
                        <option>English</option>
                        <option>Uzbek</option>
                        <option>Russia</option>
                    </select>
                    <p className="font-bold mt-4">Currency

                    </p>
                    <select className="w-56 border py-1 outline-none text-lg mt-1" name="" id="">
                        <option>USD US $</option>
                        <option>RUB Ryb.</option>
                        <option>EUR</option>
                    </select>

                    <button className="w-56 bg-gray-700 text-white p-2 mt-4">
                        OK
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Modal;