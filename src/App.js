import React from 'react';
import { Route } from 'react-router-dom';
import './App.sass';

import Home from './pages/Home';
import Cart from './pages/Cart';

import Header from './components/Header/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <main className="container">
                <Route exact path="/" component={Home} />
                <Route exact path="/cart" component={Cart} />
            </main>
        </div>
    );
}

export default App;
