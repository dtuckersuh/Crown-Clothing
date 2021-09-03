import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart, removeItemFromCart } from './cart.utils';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        hidden: true,
        cartItems: []
    },
    reducers: {
        toggleCartHidden: (state) => {
            state.hidden = !state.hidden;
        },
        addItem: (state, action) => {
            state.cartItems = addItemToCart(state.cartItems, action.payload);
        },
        clearItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(cartItem =>
                cartItem.id !== action.payload.id)
        },
        removeItem: (state, action) => {
            state.cartItems = removeItemFromCart(state.cartItems, action.payload);
        }
    },
})

export const { toggleCartHidden, addItem, clearItemFromCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;