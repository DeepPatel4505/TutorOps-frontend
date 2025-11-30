import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user: null,
    accesstoken: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // login user
            .addCase('auth/login/pending', (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase('auth/login/fulfilled', (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
                state.accesstoken = action.payload.accesstoken;
            })
            .addCase('auth/login/rejected', (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // register user
            .addCase('auth/register/pending', (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase('auth/register/fulfilled', (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
                state.accesstoken = action.payload.accesstoken;
            })
            .addCase('auth/register/rejected', (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // logout user
            .addCase('auth/logout/pending', (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase('auth/logout/fulfilled', (state) => {
                state.isAuthenticated = false;
                state.user = null;
                state.accesstoken = null;
                state.loading = false;
                state.error = null;
            })
            .addCase('auth/logout/rejected', (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export const {
    loginStart,
    loginSuccess,
    loginFailure,
    logout,
    registerStart,
    registerSuccess,
    registerFailure,
    clearError,
} = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;