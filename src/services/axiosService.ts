import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/",
    headers:{}
});
/*const userCookie = await getCookie('user');
const token = userCookie ? JSON.parse(userCookie).accessToken : null;

axiosInstance.interceptors.request.use((value) => {
    if (token) {
        if (value.method?.toUpperCase() === 'GET') {
            value.headers.Authorization = `Bearer `+ token;
        }
    }
    return value;
})*/

