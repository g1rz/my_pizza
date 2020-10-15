import React from 'react';
import Button from '../Button';

import './ProductBlock.sass';

const ProductBlock = ({ id, imageUrl, name, contain, products, onOpenProduct }) => {
    products.sort((a, b) => (a.price > b.price ? 1 : -1));

    return (
        <div className="product-wrap">
            <div className="product">
                <div className="product__img-wrap" onClick={() => onOpenProduct(id)}>
                    <img src={imageUrl} alt={name} className="product__img" />
                </div>
                <p className="product__title">{name}</p>
                <p className="product__desc">{contain}</p>
                <div className="product__row row row--space-b row--align-c">
                    <div className="product__price-start">от {products[0].price} ₽</div>
                    <Button className="product__btn" onClick={() => onOpenProduct(id)}>
                        Выбрать
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductBlock;
