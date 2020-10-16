import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import CartPopup from '../CartPopup/CartPopup';

import './CartButton.sass';

const pizzas = [
    {
        id: 1,
        image:
            'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg',
        name: 'Крэйзи пепперони',
        size: 'Средняя 30 см',
        type: 'традиционное тесто',
        price: 700,
        count: 1,
    },
    {
        id: 2,
        image:
            'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg',
        name: 'Крэйзи пепперони',
        size: 'Средняя 30 см',
        type: 'традиционное тесто',
        price: 400,
        count: 1,
    },
    {
        id: 3,
        image:
            'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg',
        name: 'Крэйзи пепперони',
        size: 'Средняя 30 см',
        type: 'традиционное тесто',
        price: 1000,
        count: 1,
    },
];

const CartButton = () => {
    const [isVisibleCart, setIsVisibleCart] = React.useState(false);

    const onMouseEnter = () => {
        setIsVisibleCart(true);
    };

    const onMouseLeave = () => {
        setIsVisibleCart(false);
    };

    return (
        <div
            className="cart-btn-wrap"
            onMouseEnter={() => onMouseEnter()}
            onMouseLeave={() => onMouseLeave()}>
            <Link to="/cart">
                <Button className="cart-btn">
                    <span>Корзина</span>
                    <span className="cart-btn__sep"></span>
                    <span className="cart-btn__count">{pizzas.length}</span>
                </Button>
            </Link>
            {isVisibleCart && <CartPopup pizzas={pizzas} />}
        </div>
    );
};

export default CartButton;
