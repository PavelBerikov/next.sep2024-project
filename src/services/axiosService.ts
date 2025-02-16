import axios from "axios";
import {getCookie} from "cookies-next";

export const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/",
    headers:{}
});

/*axiosInstance.interceptors.request.use((value) => {
    if (localStorage.getItem('user')) {
        if (value.method?.toUpperCase() === 'GET') {
            value.headers.Authorization = `Bearer `+ JSON.parse(getCookie('user')).accessToken;
        }
    }
    return value;
})*/

