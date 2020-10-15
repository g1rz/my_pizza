import React from 'react';
import classNames from 'classnames';
import Button from '../Button';
import './ProductPopup.sass';

const ProductPopup = ({ item, onCloseProduct }) => {
    const availableSizes = ['Маленькая', 'Средняя', 'Большая'];

    const [product, setProduct] = React.useState(item[0].products[0]);
    const [size, setSize] = React.useState(item[0].products[0].size);
    const [type, setType] = React.useState(item[0].products[0].types[0]);
    const [price, setPrice] = React.useState(item[0].products[0].price);

    const popupRef = React.useRef(null);

    const onClickSize = (size) => {
        const choseProduct = item[0].products.filter((item) => item.size.name === size)[0];
        setProduct(choseProduct);
        setSize(choseProduct.size);
        setType(choseProduct.types[0]);
        setPrice(choseProduct.price);
        console.log(choseProduct);
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
        return () => document.body.removeEventListener('click', handleOutsideclick);
    }, []);

    return (
        <div className="popup-wrap">
            <div className="popup-inner">
                <div className="popup" ref={popupRef}>
                    <Button className="popup__close" onClick={onCloseProduct}>
                        Закрыть
                    </Button>
                    <div className="popup__image-wrap">
                        <img src={item[0].imageUrl} alt={item[0].name} className="popup__image" />
                    </div>
                    <div className="popup__body">
                        <p className="popup__title">{item[0].name} </p>
                        <p className="popup__desc">
                            {size.name} {size.diametr} см, {type.name.toLowerCase()} тесто,{' '}
                            {type.weight} г
                        </p>
                        <p className="popup__contain">{item[0].contain}</p>
                        <ul className="selector">
                            {availableSizes.map((availableSize, index) => {
                                const className = classNames('selector__item', {
                                    active: size.name === availableSize,
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
                            В корзину за <span className="popup__buy-price">{price}</span> ₽
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPopup;
