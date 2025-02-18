/*
import React, { FC } from 'react';
import {getSearchRecipes} from "@/server-actions/serverActions";
import Recipe from "@/components/recipe/Recipe";
import {SearchParams} from "next/dist/server/request/search-params";
import {IRecipesResponse} from "@/interfaces/recipesResponse";

type Props = {
    searchParams: SearchParams
}
const SearchRecipesComponent:FC<Props> = async ({searchParams}) => {
    const newVar = await searchParams;
    console.log(newVar.search);
    const recipes= await getSearchRecipes(JSON.stringify(newVar.search))
    console.log(recipes);
    return (
        <div>
            {
                recipes.map((recipe) => <Recipe key={recipe.id} recipe={recipe} />)
            }
        </div>
    );
};

export default SearchRecipesComponent;*/
import React, { FC } from 'react';
import { getSearchRecipes } from "@/server-actions/serverActions";
import Recipe from "@/components/recipe/Recipe";

type Props = {
    searchParams: Record<string, string | undefined>;
};

const SearchRecipesComponent: FC<Props> = async ({ searchParams }) => {
    const searchQuery = searchParams.search || '';
    console.log('Search query:', searchQuery);

    const recipes = await getSearchRecipes(searchQuery);
    console.log('Recipes:', recipes);

    return (
        <div>
            {recipes.length > 0 ? (
                recipes.map((recipe) => <Recipe key={recipe.id} recipe={recipe} />)
            ) : (
                <p>No recipes found</p>
            )}
        </div>
    );
};

export default SearchRecipesComponent;
