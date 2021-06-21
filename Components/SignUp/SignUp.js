import React from 'react';
import {FcGoogle} from "react-icons/fc";
import {ImFacebook2} from "react-icons/im";
import {FaInstagram} from "react-icons/fa";
import useTranslation from "next-translate/useTranslation";
import Register from "./Register";
import Login from "./Login";

const SignUp = () => {
    const {t} = useTranslation();





    return (
        <div className="bg-gray-100 p-8 px-20">
            <div className="bg-white px-8 mt-4 flex">
                <Register/>
                <div className="w-0.5 h-96 bg-gray-400 mt-8">

                </div>
                <Login/>
            </div>
        </div>
    );
};

export default SignUp;