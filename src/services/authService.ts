import {ILoginUserResponse} from "@/interfaces/LoginUserResponse";
import {axiosInstance} from "@/services/axiosService";

export const authService = async (auth:FormData):Promise<ILoginUserResponse> => {
    const data =  await axiosInstance.post('auth/login', auth).then((response => response.data))
    console.log(data)
    return  data
}