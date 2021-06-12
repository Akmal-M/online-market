import React from 'react';
import {AiOutlineDoubleRight, AiOutlineInstagram} from "react-icons/ai";
import {FaTelegramPlane, FaYoutube} from "react-icons/fa";
import {GrFacebookOption} from "react-icons/gr";
import {IoLogoTwitter} from "react-icons/io";
import {SiPinterest, SiTiktok} from "react-icons/si";
import {CgMail} from "react-icons/cg";

const FooterLinks = () => {
    return (
        <div>
            <div className="container flex mx-auto">
                <div className="flex">
                    <div className="px-5 ">
                        <p className="font-bold">ИНФОРМАЦИЯ О КОМПАНИИ</p>
                        <div className="text-sm text-gray-500">
                            <p className="hover:border-red-500 border-b cursor-pointer py-1">О Newchic</p>
                            <p className="hover:border-red-500 border-b cursor-pointer py-1">политика
                                конфиденциальности</p>
                            <p className="hover:border-red-500 border-b cursor-pointer py-1">Политика возврата</p>
                            <p className="hover:border-red-500 border-b cursor-pointer py-1">Условия и положения</p>
                            <p className="hover:border-red-500 border-b cursor-pointer py-1">Интеллектуальная
                                собственность</p>
                        </div>
                    </div>
                    <div className="px-5">
                        <p className="font-bold">ОБСЛУЖИВАНИЕ КЛИЕНТОВ</p>
                        <div className="text-sm text-gray-500">
                            <p className="hover:border-red-500 border-b hover:text-gray-700 cursor-pointer py-1">Отследить
                                заказ</p>
                            <p className="hover:border-red-500 border-b cursor-pointer py-1">Доставка FAQ</p>
                            <p className="hover:border-red-500 border-b cursor-pointer py-1">Заказать Часто задаваемые
                                вопросы</p>
                            <p className="hover:border-red-500 border-b cursor-pointer py-1">Методы доставки</p>
                            <p className="hover:border-red-500 border-b cursor-pointer py-1">Способы оплаты</p>
                        </div>
                    </div>
                    <div className="px-5">
                        <p className="font-bold">ИНФОРМАЦИЯ О КОМПАНИИ</p>
                        <div className="text-sm text-gray-500 ">
                            <p className="hover:border-red-500 border-b cursor-pointer py-1">О Newchic</p>
                            <p className="hover:border-red-500 border-b cursor-pointer py-1">политика
                                конфиденциальности</p>
                            <p className="hover:border-red-500 border-b cursor-pointer py-1">Политика возврата</p>
                            <p className="hover:border-red-500 border-b cursor-pointer py-1">Условия и положения</p>
                            <p className="hover:border-red-500 border-b cursor-pointer py-1">Интеллектуальная
                                собственность</p>
                        </div>
                    </div>
                </div>
                <div className="ml-20">
                    <div className="flex">
                        <div>
                            <input className="outline-none p-2 w-80	text-sm"
                                   type="text" name="name" placeholder="подпишитесь и получите купон на скидку 15%"/>
                        </div>
                        <div>
                            <button
                                className="bg-gray-700 h-9 px-2 justify-center items-center outline-none hover:bg-red-500"
                                type="button">
                                <AiOutlineDoubleRight color="white"/>
                            </button>
                        </div>
                    </div>
                    <p className="text-xs w-80 text-gray-500 mt-1.5">когда вы подписываетесь, это означает, что вы
                        соглашаетесь с полученным
                        письмом. пожалуйста, прочтите наш политика конфиденциальности</p>
                    <div className="flex gap-5 mt-2.5">
                        <AiOutlineInstagram size={20}/>
                        <GrFacebookOption size={20}/>
                        <FaYoutube size={20}/>
                        <IoLogoTwitter size={20}/>
                        <SiPinterest size={20}/>
                        <FaTelegramPlane size={20}/>
                        <SiTiktok/>
                    </div>
                    <div className="flex mt-2.5">

                        <img className="w-12 mt-1.5 mr-1.5"
                             src="https://static.chiccdn.com/web/assets/images/footer/footer-qr-code-new.png" alt=""/>
                        <p className="w-80">получить бесплатный подарок и использовать купон 20% OFF прямо сейчас
                        </p>
                    </div>
                </div>

            </div>
            <div className="flex gap-2 mt-10 justify-center">
                <img src="https://static.chiccdn.com/web/assets/images/footer/paypal-1.png" alt=""/>
                <img src="https://static.chiccdn.com/web/assets/images/footer/visa-a.png" alt=""/>
                <img src="https://static.chiccdn.com/web/assets/images/footer/mastercard-1.png" alt=""/>
                <img src="https://static.chiccdn.com/web/assets/images/footer/norton-1.png" alt=""/>
                <img src="https://static.chiccdn.com/web/assets/images/footer/afterpay-1.png" alt=""/>
                <img src="https://static.chiccdn.com/web/assets/images/footer/dmca-1.png" alt=""/>
                <img src="https://static.chiccdn.com/web/assets/images/footer/pc-mnp-1x.png" alt=""/>
            </div>
        </div>
    );
};

export default FooterLinks;