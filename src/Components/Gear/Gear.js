import React from 'react';
import Product from '../Product/Product';
import './Gear.css';

const Gear = () => {

    return (
        <div className='Gear'>
            <div className='gear-box'></div>
            <div className='product-render'>
                <header className='header'>Gear</header>
                <Product />
            </div>
        </div>
    );
}

export default Gear;