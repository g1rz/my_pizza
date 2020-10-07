import React from 'react';
import CartButton from '../CartButton/CartButton';

import './Header.sass';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row row--space-b">
                    <a href="/" className="logo">
                        <span>My</span> pizza
                    </a>
                    <CartButton />
                </div>
            </div>
        </header>
    );
};

export default Header;
