// src/features/auth/authThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { login,register,logout } from './authService';

export const loginUser = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const data = await login(credentials);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Login failed');
    }
});

export const registerUser = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
    try {
        const data = await register(userData);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Registration failed');
    }
});

export const logoutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await logout();
        return true;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Logout failed');
    }
});
