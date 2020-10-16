import React from 'react';
import { Link, Route } from 'react-router-dom';

import CartButton from '../CartButton/CartButton';

import './Header.sass';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row row--space-b">
                    <Link to="/" className="logo">
                        <span>My</span> pizza
                    </Link>

                    <Route exact path="/">
                        <CartButton />
                    </Route>
                </div>
            </div>
        </header>
    );
};

export default Header;
