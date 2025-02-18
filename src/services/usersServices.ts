import {axiosInstance} from "@/services/axiosService";
import {IUsersResponse} from "@/interfaces/usersResponseInterface";

export const usersServices = {
    getUsers: async ():Promise<IUsersResponse> => {
        const {users} = await axiosInstance.get("/users", {
            /*headers:{
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3Mzk4MzE0MzgsImV4cCI6MTczOTgzNTAzOH0.j4dzhlrVv_Zr4aGJ_0ytWJFI5MQdUyY9jJRs-ytD0bk`
            }*/
        }).then((res) => res.data);
        return users;
    },
    getSearchUsers: async (search:string):Promise<IUsersResponse> => {
        const {users} = await axiosInstance.get(`users/search?q=${search}`).then((res) => res.data);
        return users;
    }
}