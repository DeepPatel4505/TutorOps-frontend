// src/services/API/csrf.js

import { axiosInstance } from "./axiosConfig";

let csrfToken = null;

export const getCsrfToken = () => csrfToken;

export const setCsrfToken = (token) => {
    csrfToken = token;
};

export const fetchAndStoreCsrf = async () => {
    try {
        const res = await axiosInstance.get("/auth/csrf-token");
        const token = res?.data?.csrfToken;

        if (token) {
            setCsrfToken(token);
        }

        return token;
    } catch (err) {
        console.error("Failed to fetch CSRF:", err);
        return null;
    }
};


let csrfPromise = null;
export async function ensureCsrfLoaded() {
    if (!getCsrfToken()) {
        if (!csrfPromise) csrfPromise = fetchAndStoreCsrf();
        await csrfPromise;
        csrfPromise = null;
    }
}
