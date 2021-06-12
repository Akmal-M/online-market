import React from 'react';
import useTranslation from "next-translate/useTranslation";
import Link from 'next/link'

const Navbar = () => {
    const {t} = useTranslation();
    return (
        <div>
            <div>
              <Link href='/mens'>
                  <a>
                      <p>{t('ЖЕНЩИНАМ')}</p>
                  </a>
              </Link>
                <Link href='/womens'>
                    <a>
                        <p>{t('МУЖЧИНАМ')}</p>
                    </a>
                </Link>

            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Navbar;