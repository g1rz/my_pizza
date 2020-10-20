import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { plusProduct, minusProduct, deleteProduct } from '../../redux/actions/cart';
import CartPopup from '../CartPopup/CartPopup';

import './CartButton.sass';

const CartButton = () => {
    const dispatch = useDispatch();
    const [isVisibleCart, setIsVisibleCart] = React.useState(false);
    const itemsCart = useSelector(({ cart }) => cart.items);
    const totalCount = useSelector(({ cart }) => cart.totalCount);
    const totalPrice = useSelector(({ cart }) => cart.totalPrice);

    const onMouseEnter = () => {
        setIsVisibleCart(true);
    };

    const onMouseLeave = () => {
        setIsVisibleCart(false);
    };

    const onClickPlusProduct = (id) => {
        dispatch(plusProduct(id));
    };
    const onClickMinusProduct = (id) => {
        const curentCount = itemsCart.find((item) => item.id === id).count;
        if (curentCount === 1) {
            dispatch(deleteProduct(id));
        } else {
            dispatch(minusProduct(id));
        }
    };

    const onClickDeleteProduct = (id) => {
        dispatch(deleteProduct(id));
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
                    <span className="cart-btn__count">{totalCount}</span>
                </Button>
            </Link>
            {isVisibleCart && (
                <CartPopup
                    products={itemsCart}
                    totalPrice={totalPrice}
                    onClickPlusProduct={onClickPlusProduct}
                    onClickMinusProduct={onClickMinusProduct}
                    onClickDeleteProduct={onClickDeleteProduct}
                />
            )}
        </div>
    );
};

export default CartButton;
