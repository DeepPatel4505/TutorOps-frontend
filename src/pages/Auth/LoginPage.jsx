import Login from '@components/Auth/Login';
import { useDispatch } from 'react-redux';
import { loginUser } from '@/features/auth/authThunk';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, user, loading, error } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isAuthenticated && user) {
            console.log("Login successful, redirecting…", user);
            // Navigate to dashboard or another page
            navigate('/dashboard');
        }
    }, [isAuthenticated, user]);

    const handleLogin = (email, password) => {
        dispatch(loginUser({ email, password }));
    };

    return (
        <Login
            handleLogin={handleLogin}
            loading={loading}
            error={error}
        />
    );
};

export default LoginPage;