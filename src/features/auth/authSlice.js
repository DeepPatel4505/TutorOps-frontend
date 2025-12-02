import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
    loadingUser: true,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // login user
            .addCase('auth/login/pending', (state) => {
                console.log('Login pending');
                state.loading = true;
                state.error = null;
            })
            .addCase('auth/login/fulfilled', (state, action) => {
                console.log('Login fulfilled');
                console.log(action.payload.user);
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
            })
            .addCase('auth/login/rejected', (state, action) => {
                console.log('Login rejected');
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
                state.user = null;;
                state.loading = false;
                state.error = null;
            })
            .addCase('auth/logout/rejected', (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })

            //load user
            .addCase('auth/loadUser/pending', (state) => {
                state.loadingUser = true;
            })
            .addCase('auth/loadUser/fulfilled', (state, action) => {
                state.loadingUser = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
            })
            .addCase('auth/loadUser/rejected', (state) => {
                state.loadingUser = false;
                state.isAuthenticated = false;
                state.user = null;
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
