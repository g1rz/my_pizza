import React from 'react';
import './Header.sass';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row row--space-b">
                    <a href="/" className="logo">
                        <span>My</span> pizza
                    </a>

                    <div className="cart-btn-wrap">
                        <button className="cart-btn btn">
                            <span>Корзина</span>
                            <span className="cart-btn__sep"></span>
                            <span className="cart-btn__count">2</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
