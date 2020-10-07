import React from 'react';
import './App.sass';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';

function App() {
    const [activeCategory, setActiveCategory] = React.useState('all');

    const onSelectCategory = (category) => {
        setActiveCategory(category);
    };

    return (
        <div className="App">
            <Header />
            <div className="container">
                <div className="row row--space-b">
                    <Categories
                        activeCategory={activeCategory}
                        onSelectCategory={onSelectCategory}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
