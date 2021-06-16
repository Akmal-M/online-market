import React from 'react';

const NewComponentWoman = () => {
    return (
        <div>
            <p className="text-2xl text-center font-bold mt-10">Новинки</p>

            <div className="flex justify-center items-center container mx-auto grid grid-cols-6 gap-5 px-8 mt-4 ">
                <div className="hover:opacity-75">
                    <img src="https://imgaz1.chiccdn.com/os/202106/20210607035041_702.jpg.webp" alt=""/>

                </div>
                <div className="hover:opacity-75">
                    <img src="https://imgaz1.chiccdn.com/os/202106/20210607035050_112.jpg.webp" alt=""/>

                </div>
                <div className="hover:opacity-75">
                    <img src="https://imgaz1.chiccdn.com/os/202106/20210607035058_316.jpg.webp" alt=""/>

                </div>
                <div className="hover:opacity-75">
                    <img src="https://imgaz1.chiccdn.com/os/202106/20210607221412_299.jpg.webp" alt=""/>

                </div>
                <div className="hover:opacity-75">
                    <img src="https://imgaz1.chiccdn.com/os/202106/20210607221511_976.jpg.webp" alt=""/>

                </div>
                <div className="hover:opacity-75">
                    <img src="https://imgaz1.chiccdn.com/os/202106/20210607221502_358.jpg.webp" alt=""/>

                </div>
            </div>
            <div className="flex justify-center items-center container mx-auto gap-5 px-8 mt-4 ">
                <div className="hover:opacity-75">
                    <img src="https://imgaz1.chiccdn.com/os/202106/20210607055114_617.jpg.webp" alt=""/>
                </div>
                <div className="hover:opacity-75">
                    <img src="https://imgaz1.chiccdn.com/os/202106/20210607055130_880.jpg.webp" alt=""/>
                </div>
            </div>
        </div>

    );
};

export default NewComponentWoman;