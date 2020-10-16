import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';

import './ProductBlock.sass';

const ProductBlock = ({ id, imageUrl, name, contain, products }) => {
    products.sort((a, b) => (a.price > b.price ? 1 : -1));

    return (
        <div className="product-wrap">
            <div className="product">
                <Link
                    to={{
                        pathname: '/',
                        search: '?product=' + id,
                    }}>
                    <div className="product__img-wrap">
                        <img src={imageUrl} alt={name} className="product__img" />
                    </div>
                </Link>
                <p className="product__title">{name}</p>
                <p className="product__desc">{contain}</p>
                <div className="product__row row row--space-b row--align-c">
                    <div className="product__price-start">от {products[0].price} ₽</div>
                    <Link
                        to={{
                            pathname: '/',
                            search: '?product=' + id,
                        }}>
                        <Button className="product__btn">Выбрать</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductBlock;
