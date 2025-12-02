// src/services/API/getApi.js
import { axiosInstance } from './axiosConfig';

export default async function getApi(path, parameters = {}) {
    try {
        return await axiosInstance.get(path, {
            ...parameters,
            responseType: parameters.responseType || 'json',
        });
    } catch (err) {
        console.error(err);

        // Return axios-like structure even on network errors
        return (
            err?.response ?? {
                status: 500,
                data: { message: 'Network error. Please try again.' },
            }
        );
    }
}
