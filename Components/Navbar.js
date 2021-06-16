import React from 'react';
import useTranslation from "next-translate/useTranslation";
import Link from 'next/link'

const Navbar = () => {
    const {t} = useTranslation();
    return (
        <div>
            <div>
                <Link href="/WomenLandingPage">
                    <a>
                        <p>Ayol</p>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <p>{t('МУЖЧИНАМ')}</p>
                    </a>
                </Link>


            </div>
        </div>
    );
};

export default Navbar;