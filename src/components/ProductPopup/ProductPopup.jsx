import React from 'react';
import Button from '../Button';
import './ProductPopup.sass';

const ProductPopup = () => {
    return (
        <div className="popup-wrap">
            <div className="popup-inner">
                <div className="popup">
                    <Button className="popup__close" >Закрыть</Button>
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
                        <ul className="selector">
                            
                            <li className="selector__item active">
                                <span>Маленькая</span>   
                            </li> 
                            <li className="selector__item">
                                <span>Средняя</span>   
                            </li> 
                            <li className="selector__item disabled">
                                <span>Большая</span>   
                            </li> 
                        </ul>

                        <ul className="selector">
                            
                            <li className="selector__item active">
                                <span>Традиционное</span>   
                            </li> 
                            <li className="selector__item ">
                                <span>Тонкое</span>   
                            </li>
                        </ul>

                        <Button className="popup__buy">
                            В корзину за <span className="popup__buy-price">245</span> ₽
                        </Button>
                    </div>
                </div>
       
            </div>
        </div>
    );
};

export default ProductPopup;
