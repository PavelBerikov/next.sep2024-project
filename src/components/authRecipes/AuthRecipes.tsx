import React from 'react';
import Recipe from "@/components/recipe/Recipe";
import {cookies} from "next/headers";
import {recipesService} from "@/services/recipesService";
import {IRecipesResponse} from "@/interfaces/recipesResponse";

const AuthRecipes = async () => {
    const cookiesStore = await cookies();
    const token = cookiesStore.get('accessToken')?.value;
    const { recipes }: IRecipesResponse = await recipesService.getRecipes(token)
    console.log(recipes)
    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
            {
                recipes.map((recipe) => <Recipe key={recipe.id} recipe={recipe} />)
            }
        </div>
    );
};

export default AuthRecipes;