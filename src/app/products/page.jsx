import Link from 'next/link';
import React from 'react';

const Product = () => {
    return (
        <div className='inline'>
            <Link href='/products/1'>Product 1</Link>
            <Link href='/products/2'>Product 2</Link>
            <Link href='/products/3'>Product 3</Link>
            <Link href='/products/4'>Product 4</Link>
            <Link href='/products/5'>Product 5</Link>
        </div>
    );
};

export default Product;