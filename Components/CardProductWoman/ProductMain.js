import React from 'react';
import ProductCard from "./ProductCard";

const ProductMain = () => {
    return (
        <div>
            <p className="text-2xl flex items-center justify-center font-bold mt-6 mb-4">Рекомендуем для вас</p>

            <div className='gap-5 flex flex-wrap justify-center container mx-auto'>
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

                <ProductCard
                    img={<img
                        src="/images/woman/product2.jpg"
                        alt=""/>}
                    info={'Полосатый принт Белый Henley'}
                    price={'US$19.99'}/>
                <ProductCard
                    img={<img
                        src="/images/woman/product-7.jpg"
                        alt=""/>}
                    info={'Полоса Повседневная Хлопок'}
                    price={'US$17.99'}/>
                <ProductCard
                    img={<img
                        src="/images/woman/product-8.jpg"
                        alt=""/>}
                    info={'Полосатый принт Белый Henley'}
                    price={'US$19.99'}/>
                <ProductCard
                    img={<img
                        src="/images/woman/product-9.jpg"
                        alt=""/>}
                    info={'Мужские свободные рубашки в'}
                    price={'US$24.99'}/>
                <ProductCard
                    img={<img
                        src="/images/woman/product-10.jpg"
                        alt=""/>}
                    info={'Рубашки Хенли в полоску'}
                    price={'US$24.99'}/>
                <ProductCard
                    img={<img
                        src="/images/woman/product-11.jpg"
                        alt=""/>}
                    info={'Рубашки с однотонным принтом'}
                    price={'US$21.99'}/>
                <ProductCard
                    img={<img
                        src="/images/woman/product-12.jpg"
                        alt=""/>}
                    info={'Рубашки с однотонным принтом '}
                    price={'US$21.99'}/>


                <ProductCard
                    img={<img
                        src="/images/woman/product-13.jpg"
                        alt=""/>}
                    info={'Полоса Повседневная Хлопок'}
                    price={'US$17.99'}/>
                <ProductCard
                    img={<img
                        src="/images/woman/product-14.jpg"
                        alt=""/>}
                    info={'Полосатый принт Белый Henley'}
                    price={'US$19.99'}/>
                <ProductCard
                    img={<img
                        src="/images/woman/product-15.jpg"
                        alt=""/>}
                    info={'Мужские свободные рубашки в'}
                    price={'US$24.99'}/>
                <ProductCard
                    img={<img
                        src="/images/woman/product-16.jpg"
                        alt=""/>}
                    info={'Рубашки Хенли в полоску'}
                    price={'US$24.99'}/>
                <ProductCard
                    img={<img
                        src="/images/woman/product-17.jpg"
                        alt=""/>}
                    info={'Рубашки с однотонным принтом'}
                    price={'US$21.99'}/>
                <ProductCard
                    img={<img
                        src="/images/woman/product-18.jpg"
                        alt=""/>}
                    info={'Рубашки с однотонным принтом '}
                    price={'US$21.99'}/>
                <ProductCard
                    img={<img
                        src="/images/woman/product-8.jpg"
                        alt=""/>}
                    info={'Полосатый принт Белый Henley'}
                    price={'US$19.99'}/>

            </div>
        </div>
    );
};

export default ProductMain;