'use server'

import { authService } from "@/services/authService";
import { cookies } from "next/headers";
import {redirect} from "next/navigation";
import { IUser } from "@/interfaces/userInterface";
import {IRecipe} from "@/interfaces/recipesInterface";
import {axiosInstance} from "@/services/axiosService";

export const auth = async (formData:FormData) => {
    const userResponse = await authService(formData);
    console.log(userResponse.accessToken);
    (await cookies()).set("accessToken", userResponse.accessToken, {
        path: "/",
        //maxAge: 60 * 3
    });
    redirect('/auth')
}
export const getUsers = async ():Promise<IUser[]> => {
    const users = await fetch('http://localhost:3000/auth/users/api').then(response => response.json());
    console.log('getUserssss' ,users);
    return users;

}
export const getRecipes = async ():Promise<IRecipe[]> => {
    return  await fetch('http://localhost:3000/auth/recipes/api').then(response => response.json());
}
export const getSearchUsers = async (search: string): Promise<IUser[]> => {
    if (!search.trim()) return [];

    console.log('Fetching users with search:', search);
    const response = await fetch(`http://localhost:3000/auth/searchUser/api?search=${encodeURIComponent(search)}`);
    const searchUsers = await response.json();
    console.log('Response:', searchUsers);
    return searchUsers;
};
export const getSearchRecipes = async (search: string): Promise<IRecipe[]> => {
    if (!search.trim()) return [];
    const response = await fetch(`http://localhost:3000/auth/searchRecipe/api?search=${encodeURIComponent(search)}`);
    return  await response.json();
};
export const getFilterByTag = async (tag:string)=> {
    await axiosInstance.get(`http://localhost:3000/auth/recipes/tag/${encodeURIComponent(tag)}/api`)
}


