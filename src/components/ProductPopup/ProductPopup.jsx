import React from 'react';
import axios from 'axios';
import classNames from 'classnames';
import Button from '../Button';
import './ProductPopup.sass';

const ProductPopup = ({ itemID, onCloseProduct }) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const availableSizes = ['Маленькая', 'Средняя', 'Большая'];

    const [item, setItem] = React.useState(null);
    const [product, setProduct] = React.useState(null);
    const [type, setType] = React.useState(null);

    const popupRef = React.useRef(null);

    const onClickSize = (size) => {
        const choseProduct = item.products.filter((product) => product.size.name === size)[0];
        setProduct(choseProduct);
        setType(choseProduct.types[0]);
    };

    const onClickType = (type) => {
        setType(type);
    };

    const handleOutsideclick = (e) => {
        const path = e.path || (e.composedPath && e.composedPath());
        if (!path.includes(popupRef.current)) {
            onCloseProduct();
        }
    };

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideclick);

        setIsLoading(false);
        axios.get(`http://localhost:3001/pizzas/${itemID}`).then(({ data }) => {
            setItem(data);
            setProduct(data.products[0]);
            setType(data.products[0].types[0]);
            setIsLoading(true);
        });
        return () => document.body.removeEventListener('click', handleOutsideclick);
    }, []);

    if (!isLoading) {
        return 'loading';
    } else
        return (
            <div className="popup-wrap">
                <div className="popup-inner">
                    <div className="popup" ref={popupRef}>
                        <Button className="popup__close" onClick={onCloseProduct}>
                            Закрыть
                        </Button>
                        <div className="popup__image-wrap">
                            <img src={item.imageUrl} alt={item.name} className="popup__image" />
                        </div>
                        <div className="popup__body">
                            <p className="popup__title">{item.name} </p>
                            <p className="popup__desc">
                                {product.size.name} {product.size.diametr} см,{' '}
                                {type.name.toLowerCase()} тесто, {type.weight} г
                            </p>
                            <p className="popup__contain">{item.contain}</p>
                            <ul className="selector">
                                {availableSizes.map((availableSize, index) => {
                                    const className = classNames('selector__item', {
                                        active: product.size.name === availableSize,
                                    });
                                    return (
                                        <li
                                            className={className}
                                            key={index}
                                            onClick={() => onClickSize(availableSize)}>
                                            <span>{availableSize}</span>
                                        </li>
                                    );
                                })}
                            </ul>

                            <ul className="selector">
                                {product.types.map((productType, index) => {
                                    const className = classNames('selector__item', {
                                        active: productType.name === type.name,
                                    });
                                    return (
                                        <li
                                            className={className}
                                            key={index}
                                            onClick={() => onClickType(productType)}>
                                            <span>{productType.name}</span>
                                        </li>
                                    );
                                })}
                            </ul>

                            <Button className="popup__buy">
                                В корзину за{' '}
                                <span className="popup__buy-price">{product.price}</span> ₽
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default ProductPopup;
