import React, { useContext, useState } from "react";
import propsTypes from "prop-types";
import CapstoneContext from "../context/capstone/capstoneContext";

const Image = ({ className, img }) => {
	const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(CapstoneContext);
	const { isFavorite, id } = img;

	const [hovered, setHovered] = useState(false);
	// const [isCarted, setIsCarted] = useState(false);

	const handleFavorite = () => {
		toggleFavorite(img);
	};

	// setIsCarted(() => cartItems.some(item => item.id === id))

	const handleAddToCart = () => {
		addToCart(img);
	};

	const handleRemoveToCart = () => {
		removeFromCart(id);
	}

	function cartIcon() {
		const alreadyInCart = cartItems.some(item => item.id === id);
		if (alreadyInCart && hovered) {
			return <i className="fas fa-plus-square cart" onClick={handleRemoveToCart}></i>;
		} else if (alreadyInCart) {
			return <i className="fas fa-plus-square cart" onClick={handleRemoveToCart}></i>;
		} else if (hovered){
			return <i className="far fa-plus-square cart" onClick={handleAddToCart}></i>;
		} else { 
			return null;
		}
	}

	const heartAwesome =
		hovered && isFavorite ? (
			<i className="fas fa-heart favorite" onClick={handleFavorite}></i>
		) : isFavorite ? (
			<i className="fas fa-heart favorite" onClick={handleFavorite}></i>
		) : hovered ? (
			<i className="far fa-heart favorite" onClick={handleFavorite}></i>
		) : null;

	return (
		<div
			className={`${className} image-container`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<img src={img.url} className="image-grid" alt="display-img" />
			{heartAwesome}
			{cartIcon()}
		</div>
	);
};

Image.propsTypes = {
	className: propsTypes.string,
	img: propsTypes.shape({
		id: propsTypes.string.isRequired,
		url: propsTypes.string.isRequired,
		isFavorite: propsTypes.bool
	})
};

export default Image;
