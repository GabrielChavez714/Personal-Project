import React from 'react';
import CartItem from '../CartItem/CartItem'; 
import './Cart.css';

const Cart = () => {

    return (
        <div className='Cart'>
            <div className='Cart-box'></div>
            <div className='cart-product-render'>
                <header className='cart-product-header'>Cart</header>
                <CartItem />
            </div>
        </div>
    );
}

export default Cart;