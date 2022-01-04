import React, { useEffect,useState } from 'react';
import './Shop.css';
import Product from './../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);
    let productAraay = [];
    productAraay.push(product);
    let finalProduct = productAraay[0].slice(0, 10);



    const [cart, setCart] = useState([]);
    const handleCartButton = (cartProduct) => {
        const newCart = [...cart, cartProduct];
        setCart(newCart);
    }




    return (
        <div className='shop'>
            <div className="product">
                {finalProduct.map (product => <Product product={product} key={product.key} handleCartButton={handleCartButton} ></Product>)}
            </div>
            <div className="cart">
                <h1>Hello Cart</h1>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;