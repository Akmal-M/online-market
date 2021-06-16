import React from 'react';
import useTranslation from "next-translate/useTranslation";

const Navbar = () => {
    const {t} = useTranslation();
    return (
        <div>
            <div>

                      <p>{t('ЖЕНЩИНАМ')}</p>

                        <p>{t('МУЖЧИНАМ')}</p>


            </div>

        </div>
    );
};

export default Navbar;