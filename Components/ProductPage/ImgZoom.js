import React, {useState} from 'react';
import {GrFacebookOption} from "react-icons/gr";
import {AiOutlineTwitter, AiOutlineYoutube} from "react-icons/ai";
import {FaPinterestP} from "react-icons/fa";
import {SiTiktok} from "react-icons/si";
import data from "../../Data";

const ImgZoom = () => {
    const [tab, setTab] = useState(0)
    const isActive = (index) => {
        if (tab === index) return " active";
        return ""
    }
    return (
        <div>
            <div className="flex">
                {
                    data.map(product => (
                        <div className="flex">
                            <div className="cursor-pointer">

                                {product.images.map((img, index) => (
                                    <img key={index} src={img.url} alt={img.url}
                                         className={`img-thumbnail, rounded ${isActive(index)}` + "object-cover object-fit"}
                                         style={{height: '80px', width: '100%',}}
                                         onClick={() => setTab(index)}/>
                                ))}

                            </div>

                            <img src={product.images[tab].url} alt={product.images[tab].url}
                                 className="d-block img-thumbnail rounded pl-3 object-cover w-100"
                                 style={{height: '550px', width: '100%'}}/>


                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default ImgZoom;