import axios from 'axios';
import { toast } from 'sonner';
import API_INFO from './apiInfo.js';
import { ensureCsrfLoaded, fetchAndStoreCsrf, getCsrfToken } from './csrf.js';
import store from '@/app/store.js';

const axiosInstance = axios.create({
    baseURL: API_INFO.baseURL,
    withCredentials: true,
    headers: {
        'Content-Type': API_INFO.headers['Content-Type'],
    },
    timeout: API_INFO.timeout,
});

axios.defaults.debug = false;

// Function to set up interceptors
const setupAxiosInterceptors = (navigate) => {
    /* Request interceptor */
    // 1. Attach CSRF token
    // 2. Handle FormData content type
    // 3. Remove undefined headers
    axiosInstance.interceptors.request.use(
        async (config) => {
            const method = config.method ? config.method.toUpperCase() : '';

            // 1. Attach CSRF token for state-changing requests
            if (!['GET', 'HEAD', 'OPTIONS'].includes(method)) {
                await ensureCsrfLoaded();
                const csrfToken = getCsrfToken();
                if (csrfToken) {
                    config.headers['X-CSRF-Token'] = csrfToken;
                }
            }

            // 2. Handle FormData content type
            if (config.data instanceof FormData) {
                // Let axios set the content type with boundary
                delete config.headers['Content-Type'];
            }

            //0.1 Remove Authorization header if exists
            if (config.headers?.Authorization) {
                delete config.headers.Authorization;
            }

            // 3. Remove undefined headers
            if (config.headers) {
                Object.keys(config.headers).forEach((key) => {
                    if (config.headers[key] === undefined) {
                        delete config.headers[key];
                    }
                });
            }

            // Return the modified config
            return config;
        },
        (error) => Promise.reject(error)
    );

    /* Response interceptor */
    // 1. Handle response errors globally
    axiosInstance.interceptors.response.use(
        (response) => {
            // Simply return the response if successful
            return response;
        },
        async (error) => {
            // Handle csrf token expiration
            const originalRequest = error.config;

            if (
                error.response &&
                error.response.status === 403 &&
                error.response.data?.message.toLowerCase() === ' invalid csrf token' &&
                !originalRequest._retry
            ) {
                originalRequest._retry = true;
                await fetchAndStoreCsrf();
                originalRequest.headers['X-CSRF-Token'] = getCsrfToken();
                return axiosInstance(originalRequest);
            }

            // Handle response errors globally
            toast.dismiss(); // Dismiss all toasts before showing a new one
            if (error.response) {
                switch (error.response.status) {
                    case 401:
                        // Check if the error is not from load user to avoid multiple toasts
                        const loadUser = store.getState().auth.loadingUser;
                        if (loadUser) {
                            console.log(loadUser);
                            return Promise.reject(error);
                        }
                        // Redirect to login page if unauthorized
                        console.log('Unauthorized - Redirecting to login');
                        toast.error('Session expired. Please log in again.');
                        navigate('/login');
                        // causes redirect on page reload even in home page
                        break;
                    case 403:
                        // Handle forbidden access
                        toast.error('You do not have permission to access this resource.');
                        break;
                    case 500:
                        // Handle server errors
                        toast.error('Server error. Please try again later.');
                        break;
                    default:
                        // Handle other errors
                        toast.error(error.response.data.message || 'An error occurred.');
                }
            } else {
                // Handle network errors
                toast.error('Network error. Please check your connection.');
            }
            return Promise.reject(error);
        }
    );
};

export { axiosInstance, setupAxiosInterceptors };
