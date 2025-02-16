import React from 'react';
import {recipesService} from "@/services/recipesService";
import Recipe from '../recipe/Recipe';

const Recipes = async ()=> {
    const recipes = await recipesService.getRecipesLimit();
    console.log(recipes);
    return (
        <div className={'blur'}>
            {
                recipes.map((recipe) => <Recipe key={recipe.id} recipe={recipe} />)
            }
        </div>
    );
};

export default Recipes;