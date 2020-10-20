import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import CartItem from '../CartItem/CartItem';
import './CartFull.sass';

const CartFull = ({
    items,
    totalPrice,
    onClickPlusProduct,
    onClickMinusProduct,
    onClickDeleteProduct,
}) => {
    return (
        <div className="cart-full">
            {items.map((item) => (
                <CartItem
                    key={item.id}
                    onClickPlusProduct={onClickPlusProduct}
                    onClickMinusProduct={onClickMinusProduct}
                    onClickDeleteProduct={onClickDeleteProduct}
                    product={item}
                />
            ))}
            <div className="cart-total-row cart-total-row--j-end">
                <div className="cart-total">
                    <span className="cart-total__title">Сумма заказа:</span>
                    <span className="cart-total__price">{totalPrice} ₽</span>
                </div>
            </div>
            <div className="cart-total-row">
                <Link to="/">
                    <Button className="cart-btn">Назад</Button>
                </Link>
                <Button className="cart-btn">Оформить заказ</Button>
            </div>
        </div>
    );
};

export default CartFull;
