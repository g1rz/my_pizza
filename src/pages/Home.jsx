import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../components/Categories/Categories';
import ProductBlock from '../components/ProductBlock/ProductBlock';
import ProductPopup from '../components/ProductPopup/ProductPopup';
import LoadingBlock from '../components/ProductBlock/LoadingBlock';
import { useLocation, useHistory } from 'react-router-dom';

import { fetchProducts } from '../redux/actions/products';
import { addProduct, plusProduct } from '../redux/actions/cart';

const Home = () => {
    const dispatch = useDispatch();
    const [activeCategory, setActiveCategory] = React.useState('all');

    const items = useSelector(({ products }) => products.items);
    const isLoaded = useSelector(({ products }) => products.isLoaded);
    const itemsCart = useSelector(({ cart }) => cart.items);

    let query = new URLSearchParams(useLocation().search);
    const openProductID = query.get('product');
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

    const handleAddProductToCart = (obj) => {
        if (itemsCart.find((item) => item.id === obj.id)) {
            console.log('uzhe est` takoi tovar');
            dispatch(plusProduct(obj.id));
        } else {
            dispatch(addProduct(obj));
        }
        console.log(obj);
        console.log(itemsCart);
    };

    const filterItems = filterCategory(items, activeCategory);

    const visibleItems = isLoaded
        ? filterItems.map((item) => <ProductBlock key={item.id} {...item} />)
        : new Array(10).fill(0).map((_, index) => <LoadingBlock key={index} />);

    return (
        <React.Fragment>
            <Categories activeCategory={activeCategory} onSelectCategory={onSelectCategory} />
            <div className="pizza-list row row--wrap ">{visibleItems && visibleItems}</div>

            {openProductID && (
                <ProductPopup
                    itemID={openProductID}
                    onCloseProduct={onCloseProduct}
                    onAddProduct={handleAddProductToCart}
                />
            )}
        </React.Fragment>
    );
};

export default Home;
