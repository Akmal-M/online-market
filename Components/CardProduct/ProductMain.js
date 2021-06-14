import React from 'react';
import ProductCard from "./ProductCard";

const ProductMain = () => {
    return (
        <div>
            <p className="text-2xl flex items-center justify-center font-bold mt-6">Рекомендуем для вас</p>

            <div className='gap-5 flex container mx-auto'>
                <ProductCard
                    img={<img
                        src="https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/07/78/491af027-ee89-4305-8208-2f4e560cbe42.jpg.webp?s=240x320"
                        alt=""/>}
                    info={'Рубашки с однотонным принтом и ул'}
                    price={'US$21.99'}/>
                <ProductCard
                    img={<img
                        src="https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/07/78/491af027-ee89-4305-8208-2f4e560cbe42.jpg.webp?s=240x320"
                        alt=""/>}
                    info={'Рубашки с однотонным принтом и ул'}
                    price={'US$21.99'}/>
                <ProductCard
                    img={<img
                        src="https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/07/78/491af027-ee89-4305-8208-2f4e560cbe42.jpg.webp?s=240x320"
                        alt=""/>}
                    info={'Рубашки с однотонным принтом и ул'}
                    price={'US$21.99'}/>
                <ProductCard
                    img={<img
                        src="https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/07/78/491af027-ee89-4305-8208-2f4e560cbe42.jpg.webp?s=240x320"
                        alt=""/>}
                    info={'Рубашки с однотонным принтом и ул'}
                    price={'US$21.99'}/>
                <ProductCard
                    img={<img
                        src="https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/07/78/491af027-ee89-4305-8208-2f4e560cbe42.jpg.webp?s=240x320"
                        alt=""/>}
                    info={'Рубашки с однотонным принтом и ул'}
                    price={'US$21.99'}/>
                <ProductCard
                    img={<img
                        src="https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/07/78/491af027-ee89-4305-8208-2f4e560cbe42.jpg.webp?s=240x320"
                        alt=""/>}
                    info={'Рубашки с однотонным принтом и ул'}
                    price={'US$21.99'}/>


            </div>
        </div>
    );
};

export default ProductMain;