import React, { FC } from 'react';
import Recipe from "@/components/recipe/Recipe";
import {cookies} from "next/headers";
import {recipesService} from "@/services/recipesService";
import Pagination from "@/components/pagination/Pagination";

type Props = {
    searchParams: Record<string, string | undefined>;
};

const SearchRecipesComponent: FC<Props> = async ({ searchParams }) => {
    const page = searchParams.page ? Number(searchParams.page) : 1;
    const cookiesStore = await cookies();
    const token = cookiesStore.get('accessToken')?.value;
    const searchQuery = searchParams.search || '';
    const skip = (page - 1) * 20;


    const {recipes} = await recipesService.getSearchRecipe(searchQuery, token, skip);

    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
            {recipes.length > 0 ? (
                recipes.map((recipe) => <Recipe key={recipe.id} recipe={recipe} />)
            ) : (
                <p>No recipes found</p>
            )}
            <Pagination count={recipes.length} currentPage={page} />
        </div>
    );
};

export default SearchRecipesComponent;
