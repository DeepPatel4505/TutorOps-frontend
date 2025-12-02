// src/services/API/putApi.js
import { axiosInstance } from './axiosConfig';
import { toast } from 'sonner';

export default async function putApi(path, data = {}, parameters = {}) {
    try {
        return await axiosInstance.put(path, data, parameters);
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
