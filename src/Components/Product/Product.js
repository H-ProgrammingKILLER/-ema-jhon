import React from 'react';
import './Product.css';
const Product = (props) => {
    let {name, img, seller, price, stock} = props.product;
    return (
        <div className='product-card'>
            <div className="product-list">
                <div className="img-area">
                    <img src={img} alt={name} />
                </div>
                <div className="detait-area">
                    <p className="name">{name}</p>
                    <span>By: {seller}</span>
                    <p className="price">Price: ${price}</p>
                    <span>only {stock} left in stock - order soon</span>
                    <button className="buy" onClick={ () => props.handleCartButton(props.product)}>Buy Now</button>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Product;