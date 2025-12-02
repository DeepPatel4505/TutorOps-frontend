import getApi from "@/services/API/getApi";
import postApi from "@/services/API/postApi";


const API_URL = "/auth/";   

// Register user
export const register = async (userData) => {
    const response = await postApi(API_URL + "register", userData);
    return response.data;
};

// Login user
export const login = async (userData) => {
    const response = await postApi(API_URL + "login", userData);
    return response.data;
};

// Logout user
export const logout = async () => {
    const response = await postApi(API_URL + "logout");
    return response;
};

// load user
export const load_user = async () => {
    const response = await getApi(API_URL + "me");
    return response.data;
};
