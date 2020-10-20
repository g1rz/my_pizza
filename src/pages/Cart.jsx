import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartEmpty from '../components/CartEmpty/CartEmpty';
import CartFull from '../components/CartFull/CartFull';
import { plusProduct, minusProduct, deleteProduct } from '../redux/actions/cart';

const Cart = () => {
    const dispatch = useDispatch();
    const { items, totalCount, totalPrice } = useSelector(({ cart }) => cart);

    const onClickPlusProduct = (id) => {
        dispatch(plusProduct(id));
    };
    const onClickMinusProduct = (id) => {
        const curentCount = items.find((item) => item.id === id).count;
        if (curentCount === 1) {
            dispatch(deleteProduct(id));
        } else {
            dispatch(minusProduct(id));
        }
    };

    const onClickDeleteProduct = (id) => {
        dispatch(deleteProduct(id));
    };

    const content =
        items.length > 0 ? (
            <CartFull
                items={items}
                totalCount={totalCount}
                totalPrice={totalPrice}
                onClickPlusProduct={onClickPlusProduct}
                onClickMinusProduct={onClickMinusProduct}
                onClickDeleteProduct={onClickDeleteProduct}
            />
        ) : (
            <CartEmpty />
        );
    return (
        <div>
            <h1>Корзина</h1>
            {content}
        </div>
    );
};

export default Cart;
