import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import userReducer from './userSlice';
import cartReducer from './cartSlice';

const store = configureStore({
    // automatically combines reducers into root reducer
    reducer: {
        user: userReducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;