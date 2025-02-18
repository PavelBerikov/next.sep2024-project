import { IRecipe } from '@/interfaces/recipesInterface';
import React from 'react';
import {getRecipes} from "@/server-actions/serverActions";
import Recipe from "@/components/recipe/Recipe";

const AuthRecipes = async () => {
    const recipes:IRecipe[] = await getRecipes()
    return (
        <div style={{display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)'}}>
            {
                recipes.map((recipe) => <Recipe key={recipe.id} recipe={recipe} />)
            }
        </div>
    );
};

export default AuthRecipes;