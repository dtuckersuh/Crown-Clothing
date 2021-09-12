import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger';

import userReducer from './user/userSlice';
import cartReducer from './cart/cartSlice';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // components to be persisted 
}


const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = configureStore({
    // automatically combines reducers into root reducer
    reducer: persistedReducer, 
    middleware: middlewares 
});

// Ensures redux state is saved to persisted storage
export const persistor = persistStore(store);

export default store;