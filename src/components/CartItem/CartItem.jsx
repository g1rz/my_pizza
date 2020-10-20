import React from 'react';

import Counter from '../Counter/Counter';

import './CartItem.sass';

const CartItem = ({ product, onClickPlusProduct, onClickMinusProduct, onClickDeleteProduct }) => {
    return (
        <div className="cart-item">
            <div className="cart-item__image">
                <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="cart-item__body">
                <p className="cart-item__title">{product.name}</p>
                <p className="cart-item__desc">
                    {product.size.name}, {product.type.name.toLowerCase()} тесто
                </p>
            </div>
            <div className="cart-item__row">
                <Counter
                    id={product.id}
                    count={product.count}
                    onClickPlusProduct={onClickPlusProduct}
                    onClickMinusProduct={onClickMinusProduct}
                />
                <div className="cart-item__price">{product.price} р.</div>
                <svg
                    height="512pt"
                    viewBox="0 0 512 512"
                    width="512pt"
                    className="delete"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => onClickDeleteProduct(product.id)}>
                    <path d="m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469s-132.667969 26.628906-181.019531 74.980469c-48.351563 48.351562-74.980469 112.640625-74.980469 181.019531 0 68.382812 26.628906 132.667969 74.980469 181.019531 48.351562 48.351563 112.640625 74.980469 181.019531 74.980469s132.667969-26.628906 181.019531-74.980469c48.351563-48.351562 74.980469-112.636719 74.980469-181.019531 0-68.378906-26.628906-132.667969-74.980469-181.019531zm-70.292969 256.386719c9.761719 9.765624 9.761719 25.59375 0 35.355468-4.882812 4.882813-11.28125 7.324219-17.679687 7.324219s-12.796875-2.441406-17.679687-7.324219l-75.367188-75.367187-75.367188 75.371093c-4.882812 4.878907-11.28125 7.320313-17.679687 7.320313s-12.796875-2.441406-17.679687-7.320313c-9.761719-9.765624-9.761719-25.59375 0-35.355468l75.371093-75.371094-75.371093-75.367188c-9.761719-9.765624-9.761719-25.59375 0-35.355468 9.765624-9.765625 25.59375-9.765625 35.355468 0l75.371094 75.367187 75.367188-75.367187c9.765624-9.761719 25.59375-9.765625 35.355468 0 9.765625 9.761718 9.765625 25.589844 0 35.355468l-75.367187 75.367188zm0 0" />
                </svg>
            </div>
        </div>
    );
};

export default CartItem;
