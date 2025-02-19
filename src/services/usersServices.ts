import { axiosInstance } from "@/services/axiosService";
import { IUsersResponse } from "@/interfaces/usersResponseInterface";

export const usersServices = {
    getUsers: async (token: string | undefined): Promise<IUsersResponse> => {
        console.log("Токен пришел в usersServices.getUsers", token);

        const users: IUsersResponse = await axiosInstance.get(`/auth/users`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        }).then((res) => res.data);

        return users;
    },

    getSearchUsers: async (search: string): Promise<IUsersResponse> => {
        const { users } = await axiosInstance.get(`/auth/users/search?q=${search}`).then((res) => res.data);
        return users;
    },
};
