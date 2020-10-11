import React from 'react';
import './App.sass';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import ProductBlock from './components/ProductBlock/ProductBlock';
import ProductPopup from './components/ProductPopup/ProductPopup';

function App() {
    const [activeCategory, setActiveCategory] = React.useState('all');
    const [isShowPopup, setIsShowPopup] = React.useState(false);

    const onSelectCategory = (category) => {
        setActiveCategory(category);
    };

    return (
        <div className="App">
            <Header />
            <div className="container">
                <Categories activeCategory={activeCategory} onSelectCategory={onSelectCategory} />
                <div className="pizza-list row row--wrap ">
                    <ProductBlock />
                    <ProductBlock />
                    <ProductBlock />
                    <ProductBlock />
                    <ProductBlock />
                    <ProductBlock />
                </div>
            </div>
            {isShowPopup && <ProductPopup />}
        </div>
    );
}

export default App;
