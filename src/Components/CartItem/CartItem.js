import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './CartItem.css';

const CartItem = () => {
    const [ cartArr, setCartArr ] = useState([]);

    useEffect(() => {
        axios
            .get('/api/cart')
            .then(response => {
                setCartArr(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    const mappedCart = cartArr.map((cartProduct) => {
       
        return (
            <div key={cartProduct.tour_id} className='cart-tour-box'>
                <div className='cart-individual-product'>
                    <div className='cart-product-name'>{cartProduct.name}</div>
                    <div className='cart-product-price'>${cartProduct.price}</div>
                    <div className='cart-product-description'>{cartProduct.description}</div>
                </div>
            </div>
        )
    });

    return (
        <div className='CartItem'>
            <div className='cart-product-list'>{mappedCart}
                <div className='checkout-box'> 
                    <button type='button' id='checkout-button' style={{textDecoration: 'none'}} checkout> </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;