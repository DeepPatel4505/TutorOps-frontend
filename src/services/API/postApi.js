// src/services/API/postApi.js
import { axiosInstance } from './axiosConfig';
import { toast } from 'sonner';

export default async function postApi(path, body = {}, parameters = {}) {
    try {
        const response = await axiosInstance.post(path, body, parameters);
        return response;
    } catch (err) {
        console.error(err);

        const message =
            err?.response?.data?.message ||
            (err.request ? 'Network error. Please try again.' : 'Unexpected error.');

        toast.error(message);

        // Always return err.response so caller gets expected axios response shape
        return err?.response ?? { status: 500, data: { message } };
    }
}
