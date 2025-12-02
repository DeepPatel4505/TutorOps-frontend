// src/features/auth/authThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, register, logout, load_user } from './authService';
import { fetchAndStoreCsrf } from '@/services/API/csrf';

export const loginUser = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        console.log('Logging in with credentials:', credentials);
        const res = await login(credentials);
        if(res.data){
            //update the csrf token in the axios instance
            await fetchAndStoreCsrf();
            return res.data;
        }
        return thunkAPI.rejectWithValue('Invalid login response');
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Login failed');
    }
});

export const registerUser = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
    try {
        console.log('Registering with data:', userData);
        const res = await register(userData);
        if(res.data){
            //update the csrf token in the axios instance
            await fetchAndStoreCsrf();
            return res.data;
        }
        return thunkAPI.rejectWithValue('Invalid registration response');
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Registration failed');
    }
});

export const logoutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        const res = await logout();
        if(res.status === 200){
            //update the csrf token in the axios instance
            await fetchAndStoreCsrf();
        }
        return true; //data is undefined in logout response so better return true
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Logout failed');
    }
});

export const loadUser = createAsyncThunk(
    "auth/loadUser",
    async (_, thunkAPI) => {
        try {
            const res = await load_user();
            if(res.data) return res.data;
            return thunkAPI.rejectWithValue("Invalid load user response");
        } catch (err) {
            return thunkAPI.rejectWithValue("Not authenticated");
        }
    }
);
