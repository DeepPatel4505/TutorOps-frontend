const API_INFO = {
    baseURL: `${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}/api` || "http://localhost:3000/api",
    timeout: import.meta.env.VITE_API_TIMEOUT || 5000, // default value? if none then 5 seconds timeout
    headers: {
        "Content-Type": "application/json",
    },
};

export default API_INFO;