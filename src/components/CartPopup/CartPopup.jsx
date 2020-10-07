import React from 'react';
import CartPopupItem from '../CartPopupItem/CartPopupItem';

import './CartPopup.sass';

const CartPopup = ({pizzas}) => {
    return (
        <div className="cart-popup">
        {
            pizzas && pizzas.map((pizza) => <CartPopupItem key={pizza.id} {...pizza}/>)
        }
    </div>
    )
}

export default CartPopup
