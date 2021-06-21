import React, {useState} from 'react';
import {FcGoogle} from "react-icons/fc";
import {ImFacebook2} from "react-icons/im";
import {FaInstagram} from "react-icons/fa";
import useTranslation from "next-translate/useTranslation";

const Register = () => {
    const initialState = {
        name: '',
        phone: '',
        password: '',
        confirm_password: ''
    }
    const [userData, setUserData] = useState(initialState)
    const { name, phone, password, confirm_password } = userData

    const {t} = useTranslation();

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUserData({...userData, [name]:value})
        // dispatch({ type: 'NOTIFY', payload: {} })
    }
    console.log(initialState)

    const handleSubmit = () => {

    }
    return (
        <div className="px-24 py-5">
            <p className="font-bold text-3xl">{t('Зарегистрируйтесь')}</p>
            <form onClick={handleSubmit}>
                <div>
                    <input type="text" name='name' value={name}
                           onChange={handleChangeInput}
                           placeholder="Ваше имя"
                           className="border-b border-gray-700 outline-none p-1 w-72 mt-4"/>
                </div>
                <div>
                    <input type="tel" name='phone' value={phone}
                           onChange={handleChangeInput}
                           placeholder="Номер телефона"
                           className="border-b border-gray-700 outline-none p-1 w-72 mt-4"/>
                </div>
                <div>
                    <input type="password" name='password' value={password}
                           onChange={handleChangeInput}
                           placeholder="Придумайте надежный пароль"
                           className="border-b border-gray-700 outline-none p-1 w-72 mt-4"/>
                </div>
                <div>
                    <input type="password" name='confirm_password' value={confirm_password}
                           onChange={handleChangeInput}
                           placeholder="Повторите пароль"
                           className="border-b border-gray-700 outline-none p-1 w-72 mt-4"/>
                </div>
                <button type='submit' className="w-72 h-9 text-white text-sm mt-6 font-bold bg-gray-800">
                    Зарегистрируйтесь
                </button>
                <p className="mt-2 text-gray-500">Забыли пароль?</p>
                <p>-------------------- OR --------------------</p>
                <div className="flex gap-4 mt-2">
                    <div className="flex bg-gray-100 justify-center items-center gap-2 p-1">
                        <FcGoogle size={20}/>Google
                    </div>
                    <div className="flex bg-gray-100 justify-center items-center gap-2 p-1">
                        <ImFacebook2 size={20} color="blue"/>Google
                    </div>
                    <div className="flex bg-gray-100 justify-center items-center gap-2 p-1">
                        <FaInstagram size={20}/>Google
                    </div>
                </div>
                <p className="w-80 mt-3">подписываясь таким образом, вы соглашаетесь с нашими Условия
                    пользования и
                    Политика
                    конфиденциальности</p>

            </form>


        </div>

    );
};

export default Register;