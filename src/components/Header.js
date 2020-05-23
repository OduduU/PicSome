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
			<h1>
				<Link to="/">Pic Some</Link>
			</h1>
			<ul>
				<li>
					<Link to="/register">Register</Link>
				</li>
				<li>
					<Link to="/Login">Login</Link>
				</li>
				<li>
					<Link to="/cart">{cartIcon()}</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;
