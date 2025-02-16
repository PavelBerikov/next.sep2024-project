import {ILoginUserResponse} from "@/interfaces/LoginUserResponse";
import {axiosInstance} from "@/services/axiosService";
import {IAuth} from "@/interfaces/authInterface";

export const authService = async (auth: IAuth):Promise<ILoginUserResponse> => {
    console.log(auth)
    const data =  await axiosInstance.post('auth/login', auth).then((response => response.data))
    console.log(data)
    return data
}