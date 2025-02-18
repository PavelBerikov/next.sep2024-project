import {IRecipe} from "@/interfaces/recipesInterface";
import {axiosInstance} from "@/services/axiosService";
import {IRecipesResponse} from "@/interfaces/recipesResponse";

export const recipesService = {
    getRecipesLimit:async ():Promise<IRecipe[]> => {
        const {recipes} = await axiosInstance.get<IRecipesResponse>('recipes?limit=6').then(res => res.data);
        console.log(recipes);
        return recipes
    },
    getRecipes: async ():Promise<IRecipe[]> => {
        const {recipes} = await axiosInstance.get<IRecipesResponse>('/recipes').then(res => res.data);
        console.log(recipes);
        return recipes
    },
    getSearchRecipe: async (search:string):Promise<IRecipesResponse> => {
        const {recipes} = await axiosInstance.get(`recipes/search?q=${search}`).then((res) => res.data);
        return recipes;
    }
}