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
        const {recipes} = await axiosInstance.get<IRecipesResponse>('auth/recipes').then(res => res.data);
        console.log(recipes);
        return recipes
    }
}