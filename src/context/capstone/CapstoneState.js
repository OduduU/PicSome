import React, { useReducer, useEffect } from "react";
import axios from "axios";
import capstoneContext from "./capstoneContext";
import capstoneReducer from "./capstoneReducer";

import { GET_PICTURES, SET_FAVORITE, ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../types.js";

function CapstoneState(props) {
	const initialState = {
		allPhotos: [],
		cartItems: [],
		loading: true,
	};

	const [state, dispatch] = useReducer(capstoneReducer, initialState);

	useEffect(() => {
		async function fetchData() {
			const res = await axios.get(
				`https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json`
			);

			dispatch({ type: GET_PICTURES, payload: res.data });
		}
		fetchData();
		// eslint-disable-next-line
	}, []);
    
	// Toggle Favorite
	const toggleFavorite = (img) => {		
        img.isFavorite = !img.isFavorite;
		dispatch({ type: SET_FAVORITE, payload: img });
	};

	// Add picture(s) to cart
	function addToCart(img) {
		dispatch({ type: ADD_TO_CART, payload: img });
	};

	// Remove picture from cart
	function removeFromCart(id) {
		dispatch({ type: REMOVE_FROM_CART, payload: id });
	}

	//  Clear cart
	function clearCart() {
		dispatch({ type: CLEAR_CART });
	}

	return (
		<capstoneContext.Provider
			value={{
				allPhotos: state.allPhotos,
				cartItems: state.cartItems,
				loading: state.loading,
				toggleFavorite,
				addToCart,
				removeFromCart,
				clearCart
			}}
		>
			{props.children}
		</capstoneContext.Provider>
	);
}

export default CapstoneState;
