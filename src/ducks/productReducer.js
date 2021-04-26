import axios from 'axios';

const initialState = {
    productCart: []
};

const REQUEST_CART_DATA = 'REQUEST_CART_DATA';
const BOOK_PRODUCT = 'BOOK_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const requestCartData = () => {
    let data = axios.get('/api/cart')
        .then(response => response.data)
        .catch(err => console.log(err));

    return {
        type: REQUEST_CART_DATA,
        payload: data
    };
}

export const bookProduct = (product_id, product_name, product_price, description) => {
    let data = axios.post(`/api/product/${product_id}`, {
        product_name,
        product_price,
        description
    })
        .then(response => response.data)
        .catch(err => console.log(err));

    return {
        type: BOOK_PRODUCT,
        payload: data
    };
}

export const removeProduct = (product_id) => {
    let data = axios.delete(`/api/cart/${product_id}`)
        .then(response => response.data)
        .catch(err => console.log(err));

    return {
        type: REMOVE_PRODUCT,
        payload: data
    };
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_CART_DATA:
            return {
                ...state,
                ...action.payload
            };

        case BOOK_PRODUCT:
            return {
                ...state,
                productCart: action.payload
            };

        case REMOVE_PRODUCT:
            return {
                ...state,
                productCart: action.payload
            };

        default:
            return state;
    }
}