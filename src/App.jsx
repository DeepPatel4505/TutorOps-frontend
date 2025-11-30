import { setupAxiosInterceptors } from '@services/API/axiosConfig';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

// Layouts
import HomePageLayout from '@layouts/HomePageLayout';

// Pages
import Homepage from '@pages/Landing/HomePage';
import LoginPage from '@pages/Auth/LoginPage';
import SignUp from '@pages/Auth/SignUpPage';



function App() {
    const navigate = useNavigate();

    useEffect(() => {
        setupAxiosInterceptors(navigate);
    }, [navigate]);

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

                // 404 Route
                <Route path="*" element={<div className="">404 | Not Found</div>} />
            </Routes>
        </>
    );
}

export default App;
