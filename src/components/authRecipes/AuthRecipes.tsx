import React from 'react';
import {recipesService} from "@/services/recipesService";
import AuthRecipe from "@/components/authRecipe/AuthRecipe";

const AuthRecipes = async () => {
    const recipes= await recipesService.getRecipes();
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