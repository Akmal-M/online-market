import React from 'react';
import Link from 'next/link'

const Discount = () => {
    return (
        <div className='bg-blue-200 text-xl text-center uppercase'>
          <Link href='/'>
              <a>discount | discount | discount</a>
          </Link>
        </div>
    );
};

export default Discount;