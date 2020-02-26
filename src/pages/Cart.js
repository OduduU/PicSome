import React, {useState, useContext} from 'react';
import CapstoneContext from '../context/capstone/capstoneContext';
import CartItem from '../components/CartItem';

function Cart() {
    const [order, setOrder] = useState(false);
    const capstoneContext = useContext(CapstoneContext);
    const { cartItems, clearCart } = capstoneContext;

    const totalCost = 5.99 * cartItems.length;
    const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" });

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    
    function handleOrder() {
        if (cartItems.length > 0) {
            setOrder(true);
    
            setTimeout(() => {
                setOrder(false);
                console.log('Order placed!');
                clearCart();
            }, 3000);
        }
    }

    const buttonText = order ? 'Ordering...' : 'Place Order';

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            {(cartItems.length > 0) && <><p className="total-cost">Total: {totalCostDisplay}</p>
            <div className="order-button">
                <button onClick={handleOrder}>{buttonText}</button>
            </div></>}
        </main>
    )
}

export default Cart;
