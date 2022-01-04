import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    const mathDigitFixed = (number) => {
        const praction = number.toFixed(2);
        return Number(praction);
    }
    const totalPrice = cart.reduce((total, cartItem) => total + cartItem.price , 0);

    //shippiing
    let shippingFee = 0;
    if(totalPrice <= 20){
        shippingFee = 0;
    }
    else if(totalPrice > 21 && totalPrice <= 50 ){
        shippingFee = 12.89;
    }
    else if(totalPrice > 50 && totalPrice <= 100 ){
        shippingFee = 25.78;
    }
    else if(totalPrice > 100 && totalPrice <= 500 ){
        shippingFee = 40.98;
    }
    else if(totalPrice > 501 ){
        shippingFee = 100.02;
    }

    //tax 
    const tax = (totalPrice / 100) * 7;

    return (
        <div>
            <h4>Items ordered: {props.cart.length}</h4>
            <p>Items:	${mathDigitFixed(totalPrice)}</p>
            <p> Shipping & Handling:	${mathDigitFixed(shippingFee)}</p>
            <p>Total before tax:	${mathDigitFixed(totalPrice) + mathDigitFixed(shippingFee)}</p>
            <p>Estimated Tax:	${mathDigitFixed(tax)}</p>
            <p>Order Total:	${mathDigitFixed(totalPrice) + mathDigitFixed(shippingFee) + mathDigitFixed(tax)}</p>
        </div>
    );
};

export default Cart;