import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../components/Categories/Categories';
import ProductBlock from '../components/ProductBlock/ProductBlock';
import ProductPopup from '../components/ProductPopup/ProductPopup';
import LoadingBlock from '../components/LoadingBlock/LoadingBlock';
import { useLocation, useHistory } from 'react-router-dom';

import { fetchProducts } from '../redux/actions/products';

const Home = () => {
    const dispatch = useDispatch();
    const [activeCategory, setActiveCategory] = React.useState('all');

    const items = useSelector(({ products }) => products.items);
    const isLoaded = useSelector(({ products }) => products.isLoaded);

    let query = new URLSearchParams(useLocation().search);
    let history = useHistory();

    React.useEffect(() => {
        dispatch(fetchProducts());
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

    const visibleItems = isLoaded
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
