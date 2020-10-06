import React from 'react';
import Button from '../Button';
import CartPopupItem from '../CartPopupItem/CartPopupItem';

import './CartButton.sass';

const CartButton = () => {
    return (
        <div className="cart-btn-wrap">
            <Button className="cart-btn">
                <span>Корзина</span>
                <span className="cart-btn__sep"></span>
                <span className="cart-btn__count">2</span>
            </Button>

            <div className="cart-popup">
                <CartPopupItem />
            </div>
        </div>
    );
};

export default CartButton;
