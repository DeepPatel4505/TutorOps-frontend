import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
// import userReducer from './slices/userSlice';

const store = configureStore({
    reducer: {
        auth : authReducer,
        // user: null,
    },
});

export default store;
