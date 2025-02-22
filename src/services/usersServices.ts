import { axiosInstance } from "@/services/axiosService";
import { IUsersResponse } from "@/interfaces/usersResponseInterface";

export const usersServices = {
    getUsers: async (token: string | undefined, skip = 0): Promise<IUsersResponse> => {
        //console.log("Токен пришел в usersServices.getUsers", token);

        const users: IUsersResponse = await axiosInstance.get(`/auth/users?limit=20&skip=${skip}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        }).then((res) => res.data);

        return users;
    },

    getSearchUsers: async (search: string, token: string|undefined, skip=0): Promise<IUsersResponse> => {
        const  users  = await axiosInstance.get(`/users/search?q=${search}&limit=20&skip${skip}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        }).then((res) => res.data);
        console.log(users);
        return users;
    }
};
