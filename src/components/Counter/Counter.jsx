import React from 'react';

import Button from '../Button';

import './Counter.sass';

const Counter = ({ count }) => {
    return (
        <div className="counter">
            <Button className="counter__btn counter__btn--minus">
                <svg width="10" height="10" class="counter__btn-icon">
                    <rect y="4" width="10" height="2" rx="1"></rect>
                </svg>
            </Button>
            <div className="counter__num">{count}</div>
            <Button className="counter__btn counter__btn--plus">
                <svg width="10" height="10" class="counter__btn-icon">
                    <g>
                        <rect x="4" width="2" height="10" ry="1"></rect>
                        <rect y="4" width="10" height="2" rx="1"></rect>
                    </g>
                </svg>
            </Button>
        </div>
    );
};

export default Counter;
