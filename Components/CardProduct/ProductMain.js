import React from 'react';
import ProductCard from "./ProductCard";

const ProductMain = () => {
    return (
        <div>
            <p className="text-2xl flex items-center justify-center font-bold mt-6 mb-4">Рекомендуем для вас</p>

            <div className='gap-5 flex container mx-auto'>
                <ProductCard
                    img={<img
                        src="https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/A2/EB/4169ba28-4788-4b9d-aac7-f2a63eb1b4b8.jpeg.webp?s=240x320"
                        alt=""/>}
                    info={'Полоса Повседневная Хлопок'}
                    price={'US$17.99'}/>
                <ProductCard
                    img={<img
                        src="https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/B2/8E/97e28eba-225b-47de-a29a-af921ef4ee7c.jpeg.webp?s=240x320"
                        alt=""/>}
                    info={'Полосатый принт Белый Henley'}
                    price={'US$19.99'}/>
                <ProductCard
                    img={<img
                        src="https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/EE/E0/70ae0016-b2c3-472b-b969-a01809e973b5.jpg.webp?s=240x320"
                        alt=""/>}
                    info={'Мужские свободные рубашки в'}
                    price={'US$24.99'}/>
                <ProductCard
                    img={<img
                        src="https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/F8/75/195a5032-8d95-4cad-99bf-85f472683fa2.jpeg.webp?s=240x320"
                        alt=""/>}
                    info={'Рубашки Хенли в полоску'}
                    price={'US$24.99'}/>
                <ProductCard
                    img={<img
                        src="https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/C0/FB/9a364d06-0fa7-4a7a-9b28-a89fade88a17.jpg.webp?s=240x320"
                        alt=""/>}
                    info={'Рубашки с однотонным принтом'}
                    price={'US$21.99'}/>
                <ProductCard
                    img={<img
                        src="https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E2/6B/c3b5dc3b-5d9f-4e2f-8d36-d2cecb4c3acf.jpeg.webp?s=240x320"
                        alt=""/>}
                    info={'Рубашки с однотонным принтом '}
                    price={'US$21.99'}/>


            </div>
        </div>
    );
};

export default ProductMain;