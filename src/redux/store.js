import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger';

import userReducer from './user/userSlice';
import cartReducer from './cart/cartSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // Cart will be persisted
}


const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    // automatically combines reducers into root reducer
    reducer: persistedReducer, 
    middleware: [logger],
});

// Ensures redux state is saved to persisted storage
export const persistor = persistStore(store);

export default store;