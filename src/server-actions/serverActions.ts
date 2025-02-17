'use server'

import { authService } from "@/services/authService";
import { cookies } from "next/headers";
import {redirect} from "next/navigation";
import { IUser } from "@/interfaces/userInterface";

export const auth = async (formData:FormData) => {
    const userResponse = await authService(formData);
    console.log(userResponse.accessToken);
    (await cookies()).set("accessToken", userResponse.accessToken, {
        path: "/",
    });
    redirect('/auth/home')
}
export const getUsers = async ():Promise<IUser[]> => {
     return  await fetch('http://localhost:3000/auth/users/api').then(response => response.json());

}