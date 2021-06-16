import React from 'react';

const NewComponentWoman = () => {
    return (
        <div>
            <p className="text-2xl text-center font-bold mt-10">Новинки</p>

            <div className="flex justify-center items-center container mx-auto grid grid-cols-6 gap-5 px-8 mt-4 ">
                <div className="hover:opacity-75">
                    <img src="/images/woman/shopby1.jpg" alt=""/>

                </div>
                <div className="hover:opacity-75">
                    <img src="/images/woman/shopby2.jpg" alt=""/>

                </div>
                <div className="hover:opacity-75">
                    <img src="/images/woman/shopby3.jpg" alt=""/>

                </div>
                <div className="hover:opacity-75">
                    <img src="/images/woman/shopby4.jpg" alt=""/>

                </div>
                <div className="hover:opacity-75">
                    <img src="/images/woman/shopby5.jpg" alt=""/>

                </div>
                <div className="hover:opacity-75">
                    <img src="/images/woman/shopby6.jpg" alt=""/>

                </div>
            </div>
            <div className="flex justify-center items-center container mx-auto gap-5 px-8 mt-4 ">
                <div className="hover:opacity-75">
                    <img src="/images/woman/section3.jpg" alt=""/>
                </div>
                <div>
                    <div className="flex gap-5">
                        <div className="hover:opacity-75">
                            <img src="/images/woman/section3-1.jpg" alt=""/>
                        </div>
                        <div className="hover:opacity-75">
                            <img src="/images/woman/section3-2.jpg" alt=""/>
                        </div>

                    </div>
                    <div className="flex gap-5 mt-5">
                        <div className="hover:opacity-75">
                            <img src="/images/woman/section3-3.jpg" alt=""/>
                        </div>
                        <div className="hover:opacity-75">
                            <img src="/images/woman/section3-4.jpg" alt=""/>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default NewComponentWoman;