// src/services/API/deleteApi.js
import { axiosInstance } from './axiosConfig';
import { toast } from 'sonner';

export default async function deleteApi(path, parameters = {}) {
    try {
        return await axiosInstance.delete(path, parameters);
    } catch (err) {
        console.error(err);

        const message =
            err?.response?.data?.message ||
            (err.request ? 'Network error. Please try again.' : 'Unexpected error.');

        toast.error(message);

        return (
            err?.response ?? {
                status: 500,
                data: { message },
            }
        );
    }
}
