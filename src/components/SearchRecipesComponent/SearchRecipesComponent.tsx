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
