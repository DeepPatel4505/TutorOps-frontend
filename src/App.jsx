// src/App.jsx

// HTTP Services
import { setupAxiosInterceptors } from '@services/API/axiosConfig';

// Redux
import { loadUser } from '@/features/auth/authThunk';
import { useDispatch } from 'react-redux';

// React and Router
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

// Layouts
import HomePageLayout from '@layouts/HomePageLayout';

// Pages
import Homepage from '@pages/Landing/HomePage';
import LoginPage from '@pages/Auth/LoginPage';
import DashboardPage from '@pages/DashboardPage';
import SignUp from '@pages/Auth/SignUpPage';
import { fetchAndStoreCsrf } from './services/API/csrf';
import ProtectedRoute from './layouts/ProtectedRoute';

function App() {
    // Set up Axios interceptors
    const navigate = useNavigate();
    useEffect(() => {
        setupAxiosInterceptors(navigate);
    }, [navigate]);

    // Load User Session (if any)
    const dispatch = useDispatch();
    useEffect(() => {
        const initialize = async () => {
            await fetchAndStoreCsrf();
            dispatch(loadUser());
            console.log('Dispatched loadUser to restore session');
        };
        initialize();
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePageLayout />}>
                    <Route index element={<Homepage />} />
                    {/* <Route index element={<div className="">Home Page</div>} /> */}
                </Route>
                {/* <Route path="/login" element={<div className="">Login Page</div>} /> */}
                <Route path="/login" element={<LoginPage />} />
                //Register Route
                <Route path="/register" element={<SignUp />} />
                // Dashboard Route
                {/* <Route path="/dashboard" element={<div className="">Dashboard Page</div>} /> */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <DashboardPage />
                        </ProtectedRoute>
                    }
                />
                // 404 Route
                <Route path="*" element={<div className="">404 | Not Found</div>} />
            </Routes>
        </>
    );
}

export default App;
