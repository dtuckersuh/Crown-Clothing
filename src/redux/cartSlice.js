import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        hidden: true,
    },
    reducers: {
        toggleCartHidden: (state) => {
            state.hidden = !state.hidden;
        },
    },
})

export const { toggleCartHidden } = cartSlice.actions;
export default cartSlice.reducer;