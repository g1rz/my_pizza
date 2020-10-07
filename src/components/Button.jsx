import React from 'react';
import classNames from 'classnames';

const Button = ({ children, onClick,onMouseOver ,  className }) => {
    return (
        <button className={classNames('btn', className)} onClick={onClick} onMouseOver={onMouseOver }>
            {children}
        </button>
    );
};

export default Button;
