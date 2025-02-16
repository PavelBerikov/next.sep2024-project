import {IUsersResponse} from "@/interfaces/usersResponseInterface";
import {axiosInstance} from "@/services/axiosService";

export const usersServices = {
    getUsers: async ():Promise<IUsersResponse> => {
        const data = await axiosInstance.get<IUsersResponse>('/auth/users').then(response => response.data);
        console.log(data.users);
        return data;

    }
}