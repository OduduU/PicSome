import { GET_PICTURES, SET_FAVORITE, ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../types";

export default (state, action) => {
    switch (action.type) {
        case GET_PICTURES:
            return {
                ...state,
                allPhotos: [...state.allPhotos, action.payload],
                loading: false
            };
        case SET_FAVORITE:
            return {
                ...state,
                allPhotos: state.allPhotos.map(photo => (photo.id === action.payload.id) ? action.payload : photo)
            };
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            }
        case CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state;
    }
}