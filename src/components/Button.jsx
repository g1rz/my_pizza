import React from 'react';
import classNames from 'classnames';

const Button = ({ children, onClick, className }) => {
    return (
        <button className={classNames('btn', className)} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
