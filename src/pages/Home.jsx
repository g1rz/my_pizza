import React from 'react';
import axios from 'axios';
import Categories from '../components/Categories/Categories';
import ProductBlock from '../components/ProductBlock/ProductBlock';
import ProductPopup from '../components/ProductPopup/ProductPopup';
import LoadingBlock from '../components/LoadingBlock/LoadingBlock';
import { useLocation, useHistory } from 'react-router-dom';

const Home = () => {
    const [activeCategory, setActiveCategory] = React.useState('all');
    const [isLoading, setIsLoading] = React.useState(false);

    const [items, setItems] = React.useState([]);

    let query = new URLSearchParams(useLocation().search);
    let history = useHistory();

    React.useEffect(() => {
        setIsLoading(false);
        axios.get('http://localhost:3001/pizzas').then(({ data }) => {
            setItems(data);
            setIsLoading(true);
        });
    }, []);

    const onSelectCategory = (category) => {
        setActiveCategory(category);
    };

    const filterCategory = (items, category) => {
        if (category === 'all') return items;
        return items.filter((item) => item.category === category);
    };

    const onCloseProduct = () => {
        history.push('/');
    };

    const filterItems = filterCategory(items, activeCategory);

    const visibleItems = isLoading
        ? filterItems.map((item) => <ProductBlock key={item.id} {...item} />)
        : new Array(10).fill(0).map((_, index) => <LoadingBlock key={index} />);

    const openProductID = query.get('product');

    return (
        <React.Fragment>
            <Categories activeCategory={activeCategory} onSelectCategory={onSelectCategory} />
            <div className="pizza-list row row--wrap ">{visibleItems && visibleItems}</div>

            {openProductID && (
                <ProductPopup itemID={openProductID} onCloseProduct={onCloseProduct} />
            )}
        </React.Fragment>
    );
};

export default Home;
