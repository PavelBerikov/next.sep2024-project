'use server'

import { authService } from "@/services/authService";
import { cookies } from "next/headers";
import {redirect} from "next/navigation";
import { IUser } from "@/interfaces/userInterface";
import {IRecipe} from "@/interfaces/recipesInterface";
import {IRecipesResponse} from "@/interfaces/recipesResponse";
import {axiosInstance} from "@/services/axiosService";

export const auth = async (formData:FormData) => {
    const userResponse = await authService(formData);
    console.log(userResponse.accessToken);
    (await cookies()).set("accessToken", userResponse.accessToken, {
        path: "/",
    });
    redirect('/auth')
}
export const getUsers = async ():Promise<IUser[]> => {
     return  await fetch('http://localhost:3000/auth/users/api').then(response => response.json());

}
export const getRecipes = async ():Promise<IRecipe[]> => {
    return  await fetch('http://localhost:3000/auth/recipes/api').then(response => response.json());
}
export const getSearchUsers = async (search: string): Promise<IUser[]> => {
    if (!search.trim()) return []; // Если пустая строка, сразу возвращаем пустой массив

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
export const getFilterByTag = async (tag:string):Promise<IRecipesResponse> => {
    await axiosInstance.get(`http://localhost:3000/auth/recipes/tag/${encodeURIComponent(tag)}/api`)
}
/*export const getSearchUsers = async ():Promise<IUser[]> => {
    return  await fetch('http://localhost:3000/auth/searchUser/api').then(response => response.json());
}*/
/*
export const getSearchRecipes = async (search:string):Promise<IRecipe[]> => {
    console.log(search);
      const searchRecipe = await fetch(`http://localhost:3000/auth/searchRecipe/api?search=${search}`).then(response => response.json());
      console.log(searchRecipe);
      return searchRecipe;
}*/

