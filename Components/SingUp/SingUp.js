import React from 'react';
import {FcGoogle} from "react-icons/fc";
import {ImFacebook2} from "react-icons/im";
import {FaInstagram} from "react-icons/fa";

const SingUp = () => {
    return (
        <div className="bg-gray-100 p-8 px-20">
            <div className="bg-white px-8 mt-4 flex">
                <div className="px-24 py-5">
                    <p className="font-bold text-3xl">Зарегистрируйтесь</p>
                    <div>
                        <input type="text" placeholder="* Эл. адрес"
                               className="border-b border-gray-700 outline-none p-1 w-72 mt-8"/>
                        <div>

                            <input type="password" placeholder="* пароль"
                                   className="border-b border-gray-700 outline-none p-1 w-72 mt-4"/>
                        </div>
                        <button className="w-72 h-9 text-white text-sm mt-6 font-bold bg-gray-800">
                            Зарегистрируйтесь
                        </button>
                        <p className="mt-2 text-gray-500">Забыли пароль?</p>
                        <p>-------------------- OR --------------------</p>
                        <div className="flex gap-4 mt-2">
                            <div className="flex bg-gray-100 justify-center items-center gap-2 p-1"><FcGoogle
                                size={20}/>Google
                            </div>
                            <div className="flex bg-gray-100 justify-center items-center gap-2 p-1"><ImFacebook2
                                size={20} color="blue"/>Google
                            </div>
                            <div className="flex bg-gray-100 justify-center items-center gap-2 p-1"><FaInstagram
                                size={20}/>Google
                            </div>
                        </div>
                        <p className="w-80 mt-3">подписываясь таким образом, вы соглашаетесь с нашими Условия
                            пользования и
                            Политика
                            конфиденциальности</p>

                    </div>


                </div>
                <div className="w-0.5 h-96 bg-gray-400 mt-8"></div>
                <div className="px-24 py-5">
                    <p className="font-bold text-3xl">регистр</p>
                    <div>
                        <input type="text" placeholder="* Эл. адрес"
                               className="border-b border-gray-700 outline-none p-1 w-72 mt-8"/>
                        <div>

                            <input type="password" placeholder="* пароль"
                                   className="border-b border-gray-700 outline-none p-1 w-72 mt-4"/>
                        </div>
                        <p className="mt-3 w-80 text-sm mt-6">создавая свой аккаунт, вы соглашаетесь с нашими Условия пользования и
                            Политика
                            конфиденциальности</p>
                        <p className="mt-2 text-sm">ПРЕДПОЧТЕНИЕ СТИЛЯ</p>
                        <div className="flex gap-4 mt-3">

                            <button className="w-36 bg-gray-100 p-1.5">женская мода</button>
                            <button className="w-36 bg-gray-100 p-1.5 ">мужская мода</button>
                        </div>
                        <button className="w-72 h-9 text-white text-sm mt-6 font-bold bg-gray-800">
                            регистр
                        </button>


                    </div>


                </div>
            </div>
        </div>
    );
};

export default SingUp;