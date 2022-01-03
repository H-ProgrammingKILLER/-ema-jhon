import React, { useEffect,useState } from 'react';
import './Shop.css';
const Shop = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    return (
        <div className='shop'>
            {product.length}
        </div>
    );
};

export default Shop;