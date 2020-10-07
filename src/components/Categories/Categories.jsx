import React from 'react';
import classNames from 'classnames';

import './Categories.sass';
import Button from '../Button';

const categories = [
    {
        name: 'Все',
        type: 'all',
    },
    {
        name: 'Мясные',
        type: 'meat',
    },
    {
        name: 'Вегетарианская',
        type: 'vegetarian',
    },
    {
        name: 'Гриль',
        type: 'grill',
    },
    {
        name: 'Острые',
        type: 'spicy',
    },
    {
        name: 'Закрытые',
        type: 'close',
    },
];

const Categories = ({ activeCategory, onSelectCategory }) => {
    return (
        <ul className="categories">
            {categories.map((item) => {
                const activeClass = activeCategory === item.type ? 'active' : '';
                return (
                    <li key={item.type} className="categories__item">
                        <Button
                            className={classNames('categories__btn', activeClass)}
                            onClick={() => onSelectCategory(item.type)}>
                            {item.name}
                        </Button>
                    </li>
                );
            })}
        </ul>
    );
};

export default Categories;
