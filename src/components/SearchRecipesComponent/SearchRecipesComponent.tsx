import React, { FC } from 'react';
import { getSearchRecipes } from "@/server-actions/serverActions";
import Recipe from "@/components/recipe/Recipe";
import {cookies} from "next/headers";
import {recipesService} from "@/services/recipesService";

type Props = {
    searchParams: Record<string, string | undefined>;
};

const SearchRecipesComponent: FC<Props> = async ({ searchParams }) => {
    const cookiesStore = await cookies();
    const token = cookiesStore.get('accessToken')?.value;
    const searchQuery = searchParams.search || '';
    console.log('Search query:', searchQuery);

    const {recipes} = await recipesService.getSearchRecipe(searchQuery, token);
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
