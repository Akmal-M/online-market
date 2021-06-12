import React from 'react';
import useTranslation from "next-translate/useTranslation";
import Link from 'next/link'

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