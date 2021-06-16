import React from 'react';
import ProductCard from "./ProductCard";

const ProductMain = () => {
    return (
        <div>
            <p className="text-2xl flex items-center justify-center font-bold mt-6 mb-4">Рекомендуем для вас</p>

            <div className='gap-5 flex container mx-auto'>
                <ProductCard
                    img={<img
                        src="/images/woman/product1.jpg"
                        alt=""/>}
                    info={'Полоса Повседневная Хлопок'}
                    price={'US$17.99'}/>
                <ProductCard
                    img={<img
                        src="/images/woman/product2.jpg"
                        alt=""/>}
                    info={'Полосатый принт Белый Henley'}
                    price={'US$19.99'}/>
                <ProductCard
                    img={<img
                        src="/images/woman/product3.jpg"
                        alt=""/>}
                    info={'Мужские свободные рубашки в'}
                    price={'US$24.99'}/>
                <ProductCard
                    img={<img
                        src="/images/woman/product4.jpg"
                        alt=""/>}
                    info={'Рубашки Хенли в полоску'}
                    price={'US$24.99'}/>
                <ProductCard
                    img={<img
                        src="/images/woman/product5.jpg"
                        alt=""/>}
                    info={'Рубашки с однотонным принтом'}
                    price={'US$21.99'}/>
                <ProductCard
                    img={<img
                        src="/images/woman/product6.jpg"
                        alt=""/>}
                    info={'Рубашки с однотонным принтом '}
                    price={'US$21.99'}/>


            </div>
        </div>
    );
};

export default ProductMain;