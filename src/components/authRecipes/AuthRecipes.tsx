import React from 'react';
import {recipesService} from "@/services/recipesService";
import AuthRecipe from "@/components/authRecipe/AuthRecipe";
import {IRecipe} from "@/interfaces/recipesInterface";

const AuthRecipes = async () => {
    const recipes:IRecipe[]= await recipesService.getRecipes();
    console.log(recipes);
    console.log('aaaaaa')
    return (
        <div>
            {
                recipes.map((recipe) => <AuthRecipe key={recipe.id} recipe={recipe} />)
            }
        </div>
    );
};

export default AuthRecipes;