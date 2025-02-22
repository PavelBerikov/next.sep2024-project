import { axiosInstance } from "@/services/axiosService";
import { IUsersResponse } from "@/interfaces/usersResponseInterface";

export const usersServices = {
    getUsers: async (token: string | undefined): Promise<IUsersResponse> => {
        //console.log("Токен пришел в usersServices.getUsers", token);

        const users: IUsersResponse = await axiosInstance.get(`/auth/users`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        }).then((res) => res.data);

        return users;
    },

    getSearchUsers: async (search: string, token: string|undefined): Promise<IUsersResponse> => {
        const  users  = await axiosInstance.get(`/users/search?q=${search}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        }).then((res) => res.data);
        console.log(users);
        return users;
    }
};
