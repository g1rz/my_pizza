import React from 'react';
import './ProductPopup.sass';

const ProductPopup = () => {
    return (
        <div className="popup-wrap">
            <div className="popup">
                <div className="popup__image-wrap">
                    <img
                        src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg"
                        alt=""
                        className="popup__image"
                    />
                </div>
                <div className="popup__body">
                    <p className="popup__title">Крэйзи пепперони</p>
                    <p className="popup__desc">Средняя 30 см, традиционное тесто, 410 г</p>
                    <p className="popup__contain">Ветчина, шампиньоны, увеличенная порция моцареллы, томатный соус</p>
                </div>
            </div>
        </div>
    );
};

export default ProductPopup;
