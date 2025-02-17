import {axiosInstance} from "@/services/axiosService";
import {IUsersResponse} from "@/interfaces/usersResponseInterface";

export const usersServices = {
    getUsers: async ():Promise<IUsersResponse> => {
        const {users} = await axiosInstance.get("/auth/users", {
            headers:{
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3Mzk4Mjc3MzYsImV4cCI6MTczOTgzMTMzNn0.YomiF6VpwuQapt1xK-EhkehxsFIFkV-6EdXzVFlOOuM`
            }
        }).then((res) => res.data);
        console.log('getUsers Log',users);
        return users;

    }

}