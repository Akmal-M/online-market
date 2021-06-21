import React, {useState} from 'react';
import useTranslation from "next-translate/useTranslation";

const Login = () => {

    const initialState = {
        phone: '',
        password: ''
    }
    const [userData, setUserData] = useState(initialState)
    const { phone, password } = userData

    const {t} = useTranslation();


    const handleSubmit = () => {

    }

    console.log(userData)

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUserData({...userData, [name]:value})
        // dispatch({ type: 'NOTIFY', payload: {} })
    }

    return (
        <div className="px-24 py-5">
            <p className="font-bold text-3xl">{t('Вход')}</p>
            <form onClick={handleSubmit}>
                <div>
                    <input type="tel" name='phone' value={phone} onChange={handleChangeInput} placeholder="Номер телефона"
                           className="border-b border-gray-700 outline-none p-1 w-72 mt-4"/>
                </div>

                <div>
                    <input type="password" name='password' value={password} onChange={handleChangeInput} placeholder="Придумайте надежный пароль"
                           className="border-b border-gray-700 outline-none p-1 w-72 mt-4"/>
                </div>

                <p className="mt-2 text-sm">ПРЕДПОЧТЕНИЕ СТИЛЯ</p>
                <div className="flex gap-4 mt-3">
                    <button className="w-36 bg-gray-100 p-1.5">женская мода</button>
                    <button className="w-36 bg-gray-100 p-1.5 ">мужская мода</button>
                </div>
                <button type='submit' className="w-72 h-9 text-white text-sm mt-6 font-bold bg-gray-800">
                    {t('Вход')}
                </button>

            </form>


        </div>

    );
};

export default Login;