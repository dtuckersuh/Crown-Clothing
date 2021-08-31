import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import userReducer from './userSlice';

const store = configureStore({
    // automatically combines reducers into root reducer
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;