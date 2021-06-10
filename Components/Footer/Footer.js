import React from 'react';
import FooterCard from "./FooterCard";
import {Ri24HoursLine} from "react-icons/ri";

const Footer = () => {
    return (
        <div className="bg-gray-300">
            <div className="bg-gray-50 container mx-auto">
                <div className="grid grid-cols-4">
                    <div>
                        <FooterCard
                            icon={<div><Ri24HoursLine size={35}/></div>}
                            name={'качественный товар'}
                            info={'Купить качественные товары с низкой ценой'}/>
                    </div>
                    <div>
                        <FooterCard
                            icon={<div><Ri24HoursLine/></div>}
                            name={'Круглосуточный сервис'}
                            info={'Получите мгновенную помощь, когда вам это нужно'}/>
                    </div>
                    <div>
                        <FooterCard
                            icon={<div><Ri24HoursLine/></div>}
                            name={'Экспресс-доставка'}
                            info={'Множественный выбор быстрой и надежной доставки'}/>
                    </div>
                    <div>
                        <FooterCard
                            icon={<div><Ri24HoursLine/></div>}
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