import React from 'react';
import axios from 'axios';
import Categories from '../components/Categories/Categories';
import ProductBlock from '../components/ProductBlock/ProductBlock';
import ProductPopup from '../components/ProductPopup/ProductPopup';
import LoadingBlock from '../components/LoadingBlock/LoadingBlock';

const Home = () => {
    const [activeCategory, setActiveCategory] = React.useState('all');
    const [isShowPopup, setIsShowPopup] = React.useState(false);
    const [openProduct, setOpenProduct] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        setIsLoading(false);
        axios.get('http://localhost:3001/pizzas').then(({ data }) => {
            setItems(data);
            setIsLoading(true);
        });
    }, []);

    const onSelectCategory = (category) => {
        setActiveCategory(category);
        console.log(category);
    };

    const filterCategory = (items, category) => {
        if (category === 'all') return items;
        return items.filter((item) => item.category === category);
    };

    const onOpenProduct = (id) => {
        setIsShowPopup(true);
        setOpenProduct(id);
    };

    const onCloseProduct = () => {
        setIsShowPopup(false);
    };

    const filterItems = filterCategory(items, activeCategory);

    const visibleItems = isLoading
        ? filterItems.map((item) => (
              <ProductBlock key={item.id} {...item} onOpenProduct={onOpenProduct} />
          ))
        : new Array(10).fill(0).map((_, index) => <LoadingBlock key={index} />);
    return (
        <React.Fragment>
            <Categories activeCategory={activeCategory} onSelectCategory={onSelectCategory} />
            <div className="pizza-list row row--wrap ">{visibleItems && visibleItems}</div>

            {isShowPopup && (
                <ProductPopup
                    item={items.filter((item) => item.id === openProduct)}
                    onCloseProduct={onCloseProduct}
                />
            )}
        </React.Fragment>
    );
};

export default Home;
