import { axiosInstance } from "./axiosConfig";
import { toast } from "sonner";

async function postApi(path, body, parameters = {}) {
    let response;
    try {
        response = await axiosInstance.post(path, body, { ...parameters });
    } catch (err) {
        console.error(err);
        toast.error(err.response?.data?.message || "An error occurred.");
        response = err;
    }
    return response;
}

export default postApi;