import React from 'react';
import {GrFacebookOption} from "react-icons/gr";
import {AiOutlineTwitter, AiOutlineYoutube} from "react-icons/ai";
import {FaPinterestP} from "react-icons/fa";
import {SiTiktok} from "react-icons/si";

const ImgZoom = () => {
    return (
        <div>
            <div className="flex gap-2 w-96">
                <div>
                    <img className="w-12 border" src="/images/mens/product-9.jpg" alt=""/>
                    <img className="w-12 mt-2 border" src="/images/mens/product-9.jpg" alt=""/>
                    <img className="w-12 mt-2 border" src="/images/mens/product-9.jpg" alt=""/>
                    <img className="w-12 mt-2 border" src="/images/mens/product-9.jpg" alt=""/>
                    <img className="w-12 mt-2 border" src="/images/mens/product-9.jpg" alt=""/>
                    <img className="w-12 mt-2 border" src="/images/mens/product-9.jpg" alt=""/>
                </div>
                <div>
                    <img className="w-96" src="/images/mens/product-9.jpg" alt=""/>

                    <div className="mt-8 flex gap-4 justify-center">
                        <div className="bg-gray-100 hover:bg-gray-300 p-2 rounded-full">
                            <GrFacebookOption/>
                        </div>
                        <div className="bg-gray-100 hover:bg-gray-300 p-2 rounded-full">
                            <FaPinterestP/>
                        </div>
                        <div className="bg-gray-100 hover:bg-gray-300 p-2 rounded-full">
                            <AiOutlineTwitter/>
                        </div>
                        <div className="bg-gray-100 hover:bg-gray-300 p-2 rounded-full">
                            <AiOutlineYoutube/>
                        </div>
                        <div className="bg-gray-100 hover:bg-gray-300 p-2 rounded-full">
                            <SiTiktok/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImgZoom;