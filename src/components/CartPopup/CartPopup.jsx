import React from 'react';
import CartPopupItem from '../CartPopupItem/CartPopupItem';

import './CartPopup.sass';

const CartPopup = ({
    products,
    totalPrice,
    onClickPlusProduct,
    onClickMinusProduct,
    onClickDeleteProduct,
}) => {
    if (products.length > 0) {
        return (
            <div className="cart-popup">
                {products &&
                    products.map((product) => (
                        <CartPopupItem
                            key={product.id}
                            onClickPlusProduct={onClickPlusProduct}
                            onClickMinusProduct={onClickMinusProduct}
                            onClickDeleteProduct={onClickDeleteProduct}
                            product={product}
                        />
                    ))}
                <div className="cart-popup__total">
                    <span>Сумма заказа:</span>
                    <span className="cart-popup__price">{totalPrice} ₽</span>
                </div>
            </div>
        );
    } else {
        return <div className="cart-popup cart-popup--empty">Корзина пуста :(</div>;
    }
};

export default CartPopup;
