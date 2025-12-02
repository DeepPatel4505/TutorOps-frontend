// src/services/API/apiInfo.js
export const API_BASE =
    `${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}/api`;

export const API_TIMEOUT =
    Number(import.meta.env.VITE_API_TIMEOUT || 5000);

// Auth endpoints
export const LOGIN_ENDPOINT = "/auth/login";
export const REGISTER_ENDPOINT = "/auth/register";
export const LOGOUT_ENDPOINT = "/auth/logout";
export const ME_ENDPOINT = "/auth/me";
export const CSRF_ENDPOINT = "/auth/csrf-token";

export default {
    baseURL: API_BASE,
    timeout: API_TIMEOUT,
    headers: { "Content-Type": "application/json" },
};
