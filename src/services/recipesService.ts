import {IRecipe} from "@/interfaces/recipesInterface";
import {axiosInstance} from "@/services/axiosService";
import {IRecipesResponse} from "@/interfaces/recipesResponse";

export const recipesService = {
    getRecipesLimit:async ():Promise<IRecipe[]> => {
        const {recipes} = await axiosInstance.get<IRecipesResponse>('recipes?limit=6').then(res => res.data);
        console.log(recipes);
        return recipes
    },
    getRecipes: async (token: string | undefined, skip=0):Promise<IRecipesResponse> => {
        const recipes = await axiosInstance.get<IRecipesResponse>(`auth/recipes?limit=20&skip=${skip}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        }).then(res => res.data);
        console.log(recipes);
        return recipes
    },
    getSearchRecipe: async (search:string, token:string| undefined, skip=0):Promise<IRecipesResponse> => {
        const recipes = await axiosInstance.get(`auth/recipes/search?q=${search}&skip=${skip}&limit=20`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        }).then(res => res.data);
        console.log(recipes);
        return recipes;
    }
}