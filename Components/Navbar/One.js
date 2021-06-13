import React from 'react';

const One = () => {
    return (
        <div className="flex justify-center mt-6 bg-white container mx-auto">


            <div className="px-10">
                <p className="font-bold">ЧТО НОВОГО</p>
                <div className="text-sm text-gray-500">
                    <p className="hover:border-red-500 border-b border-transparent cursor-pointer py-1">
                        Отпускной Стиль
                    </p>
                    <p className="hover:border-red-500 border-b border-transparent cursor-pointer py-1">
                        Повседневный Стиль
                    </p>
                    <p className="hover:border-red-500 border-b border-transparent cursor-pointer py-1">
                        Уличный Стиль
                    </p>
                    <p className="hover:border-red-500 border-b border-transparent cursor-pointer py-1">
                        Классический Стиль
                    </p>
                    <p className="hover:border-red-500 border-b border-transparent cursor-pointer py-1">
                        Винтажный Стиль
                    </p>
                    <p className="hover:border-red-500 border-b border-transparent cursor-pointer py-1">
                        Домашний Стиль
                    </p>
                </div>
            </div>
            <div className="px-10">
                <p className="font-bold">Одежды</p>
                <div className="text-sm text-gray-500">
                    <p className="hover:border-red-500 border-b border-transparent cursor-pointer py-1">
                        Топы
                    </p>
                    <p className="hover:border-red-500 border-b border-transparent cursor-pointer py-1">
                        Рубашки
                    </p>
                    <p className="hover:border-red-500 border-b border-transparent cursor-pointer py-1">
                        Футболки
                    </p>
                    <p className="hover:border-red-500 border-b border-transparent cursor-pointer py-1">
                        Толстовки
                    </p>
                    <p className="hover:border-red-500 border-b border-transparent cursor-pointer py-1">
                        Брюки
                    </p>
                    <p className="hover:border-red-500 border-b border-transparent cursor-pointer py-1">
                        Нижнее Бельё
                    </p>
                    <p className="hover:border-red-500 border-b border-transparent cursor-pointer py-1">
                        Пижама
                    </p>
                    <p className="hover:border-red-500 border-b border-transparent cursor-pointer py-1">
                        Большой Размер
                    </p>
                    <p className="hover:border-red-500 border-b border-transparent cursor-pointer py-1">
                        Купальник
                    </p>

                </div>
            </div>
            <div className="px-10">
                <p className="font-bold mt-2.5">
                    Обуви
                </p>
                <p className="font-bold mt-2.5">
                    Сумки
                </p>
                <p className="font-bold mt-2.5">
                    Аксессуары
                </p>
                <p className="font-bold mt-2.5">
                    Ювелирные Изделия
                </p>
            </div>
            <div className="ml-6">
                <img src="https://imgaz1.chiccdn.com/os/202105/20210524040330_317.png.webp" alt=""/>
                <p className="text-center font-bold">От $16.99</p>
            </div>
        </div>
    );
};

export default One;