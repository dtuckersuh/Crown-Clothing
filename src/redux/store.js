import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import userReducer from './user/userSlice';
import cartReducer from './cart/cartSlice';

const store = configureStore({
    // automatically combines reducers into root reducer
    reducer: {
        user: userReducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;