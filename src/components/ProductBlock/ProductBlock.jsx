import React from 'react';
import Button from '../Button';

import './ProductBlock.sass';

const ProductBlock = () => {
    return (
        <div className="product-wrap">
            <div className="product">
                <div className="product__img-wrap">
                    <img
                        src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg"
                        alt=""
                        className="product__img"
                    />
                </div>
                <p className="product__title">Крэйзи пепперони</p>
                <p className="product__desc">
                    Ветчина, шампиньоны, увеличенная порция моцареллы, томатный соус
                </p>
                <div className="product__row row row--space-b row--align-c">
                    <div className="product__price-start">от 345 ₽</div>
                    <Button className="product__btn">Выбрать</Button>
                </div>
            </div>
        </div>
    );
};

export default ProductBlock;
