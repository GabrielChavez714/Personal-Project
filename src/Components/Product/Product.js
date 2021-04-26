import React, { useEffect, useState } from 'react';
import { bookProduct } from '../../ducks/productReducer';
import axios from 'axios';
import './Product.css';

const Product = (props) => {
    const [productArr, setProductArr] = useState([]);

    useEffect(() => {
        axios
            .get('/api/product')
            .then(response => {
                setProductArr(response.data)
            })
            .catch(err => console.log(err));
    }, []);

    function addProductToCart(product_id) {
        let body = { product_id };
        try {
            axios
                .post('/api/product', body)
            bookProduct()
        } catch (err) {
            console.log(err)
        }
    }

    const mappedProduct = productArr.map((product) => {
        return (
            <div key={product.product_id} className='product-box'>
                <div className='individual-product'>
                    <div className='product-name'>{product.name}</div>
                    <div className='product-price'>${product.price}</div>
                </div>
            </div>
        )
    });

    const productDescription = productArr.map((product) => {
        return (
            <div key={product.product_id} className='description-box'>
                <div className='individual-description'>
                    <div className='description-title'>{product.title}</div>
                    <div className='product-description'>{product.description}</div>
                </div>
            </div>
        )
    });

    return (
        <div className='Products'>
            <h2 className='product-list'>{mappedProduct}</h2>
            <div className='product-images'>

                <div className='image-box'>
                    <img className='snowboard1'
                        src='https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Arbor-Shiloh-Camber-Snowboard-2021-_333609-front-US.jpg'
                        alt='reflection-dot-snowboard' /> <button className='rent' onClick={() => addProductToCart(1)}>Rent</button>
                </div>

                <div className='image-box'>
                    <img className='snowboard2'
                        src='https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Burton-Skeleton-Key-Snowboard-2021-_332935-front-US.jpg'
                        alt='Sims Bowl Squad Snowboard 2021' /> <button className='rent' onClick={() => addProductToCart(2)}>Rent</button>
                </div>

                <div className='image-box'>
                    <img className='snowboard3'
                        src='https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Lib-Tech-T.-Rice-Orca-Snowboard-2021-_333775-front-US.jpg'
                        alt='Arbor Shiloh Camber Snowboard 2021' /> <button className='rent' onClick={() => addProductToCart(3)}>Rent</button>
                </div>

                <div className='image-box'>
                <img className='bindings1'
                    src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRVtoyUtTTB5SvWieF3pVx0urayEj8_Zqc2xE8dbf4i8RteSCJL8d9g5UcLyugR2P6HxstI77AaUw&usqp=CAc'
                    alt='Arbor Cadence Snowboard Women' /> <button className='rent' onClick={() => addProductToCart(4)}>Rent</button>
                </div>

                <div className='image-box'>
                <img className='bindings2'
                    src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQkD6DsJ3Nej_9UcnDmxA8ynGNeDAkEZ1hK2NvDCh5S_rP1uFDVKxPBh_ERy-FvMCZlASjXwYz88LI&usqp=CAc'
                    alt='Burton Skeleton Key Snowboard 2021' /> <button className='rent' onClick={() => addProductToCart(5)}>Rent</button>
                </div>

                <div className='image-box'>
                <img className='bindings3'
                    src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTAkt5_lHIrH25GooMjz81bNvBlxxmdVVGFVemexMa6cU3tQ9fu_Id0cWWO8iqev6lvVYJYaAfS7o4&usqp=CAc'
                    alt='Lib Tech T. Rice Orca Snowboard 2021' /> <button className='rent' onClick={() => addProductToCart(6)}>Rent</button>
                </div>

                <div className='image-box'>
                    <img className='boots1'
                        src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQtEWXECxo0hTTnK0AUI9HD9aYQJpYWNVniqzEpqVw2DU1J0divWPOmAAI0nke8_tJYPQYcMr_MOmA&usqp=CAc'
                        alt='reflection-dot-snowboard' /> <button className='rent' onClick={() => addProductToCart(7)}>Rent</button>
                </div>

                <div className='image-box'>
                    <img className='boots2'
                        src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQFGzfKnsOfSoAp0SjIBk9VFlZZboNNN21ZKvJM8Dh2k_aAlt5iG30COBj68nXskc4K4khIzErRTg&usqp=CAc'
                        alt='Sims Bowl Squad Snowboard 2021' /> <button className='rent' onClick={() => addProductToCart(8)}>Rent</button>
                </div>

                <div className='image-box'>
                    <img className='boots3'
                        src='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcResYip6xajRFrBKFUuJkxKcaXkj9OPAaxY6-exBNIJCK11Twa5Ykv7Lx3AuQYeftKClYNlJI74p9U&usqp=CAc'
                        alt='Arbor Shiloh Camber Snowboard 2021' /> <button className='rent' onClick={() => addProductToCart(9)}>Rent</button>
                </div>

                <div className='image-box'>
                <img className='helmet1'
                    src='https://cdn-fsly.yottaa.net/53c6d66786305e30e100018d/acd43500c5780136ec32123dfe2baf36.yottaa.net/v~4b.7c9/is/image/MoosejawMB/10459152x1119321_zm?$thumb225$&yocs=4u_4w_4y_'
                    alt='Arbor Cadence Snowboard Women' /> <button className='rent' onClick={() => addProductToCart(10)}>Rent</button>
                </div>

                <div className='image-box'>
                <img className='helmet2'
                    src='https://images.evo.com/imgp/250/189878/786973/anon-merak-wavecel-helmet-.jpg'
                    alt='Burton Skeleton Key Snowboard 2021' /> <button className='rent' onClick={() => addProductToCart(11)}>Rent</button>
                </div>

                <div className='image-box'>
                <img className='helmet3'
                    src='https://images-na.ssl-images-amazon.com/images/I/61dFcVAjNYL._AC_SY550_.jpg'
                    alt='Lib Tech T. Rice Orca Snowboard 2021' /> <button className='rent' onClick={() => addProductToCart(12)}>Rent</button>
                </div>
                    <div className='description-list'>{productDescription}</div>
            </div>
        </div >
    );
}

export default Product;