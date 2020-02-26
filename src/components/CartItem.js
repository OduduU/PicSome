import React, { useState, useContext } from 'react';
import PropsType from 'prop-types';
import CapstoneContext from '../context/capstone/capstoneContext';

function CartItem({ item }) {
    const { removeFromCart } = useContext(CapstoneContext);

    const [hovered, setHovered] = useState(false);    

    function handleRemoveItem() {
        removeFromCart(item.id);
    }

    const deletIcon = hovered ? (
        <i className="fas fa-trash-alt" onClick={handleRemoveItem}></i>
    ) : (
        <i className="far fa-trash-alt" onClick={handleRemoveItem}></i>
    );

    return (
        <div className="cart-item">
            <span
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {deletIcon}
            </span>
            <img src={item.url} alt="cart-img" width="130px" />
            <p>$5.99</p>
        </div>
    );
}

CartItem.propsType = {
    item: PropsType.shape({
        id: PropsType.number.isRequired,
        url: PropsType.string.isRequired
    })
}

export default CartItem;
