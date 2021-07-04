import React from 'react';
import FooterCard from "./FooterCard";
import {Ri24HoursLine, RiTruckLine} from "react-icons/ri";
import {AiOutlineCreditCard} from "react-icons/ai";
import {HiShoppingBag} from "react-icons/hi";

const Footer = () => {
    return (
        <div className="">
            <div className="bg-white container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 ">
                    <div>
                        <FooterCard
                            icon={<div><HiShoppingBag size={35}/></div>}
                            name={'качественный товар'}
                            info={'Купить качественные товары с низкой ценой'}/>
                    </div>
                    <div>
                     
                        <FooterCard
                            icon={<div><Ri24HoursLine size={35}/></div>}
                            name={'Круглосуточный сервис'}
                            info={'Получите мгновенную помощь, когда вам это нужно'}/>
                    </div>
                    <div>
                        <FooterCard
                            icon={<div><RiTruckLine size={35}/></div>}
                            name={'Экспресс-доставка'}
                            info={'Множественный выбор быстрой и надежной доставки'}/>
                    </div>

                    <div>
                        <FooterCard
                            icon={<div><AiOutlineCreditCard size={35}/></div>}
                            name={'Безопасная оплата'}
                            info={'Множественный выбор надежного спасоба оплаты'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;