import React, {useContext} from "react";
import { Link } from 'react-router-dom';

import CapstoneContext from '../context/capstone/capstoneContext';

function Header() {
	const { cartItems } = useContext(CapstoneContext);

	function cartIcon() {
		if (cartItems.length) {
			return <i className="fas fa-shopping-cart"></i>;
		} else {
			return <i className="fas fa-cart-arrow-down"></i>;
		}
	}
	
	return (
		<header>
			<h2>
				<Link to="/">Pic Some</Link>
			</h2>
			<Link to="/cart">
				{cartIcon()}
			</Link>
		</header>
	);
}

export default Header;
