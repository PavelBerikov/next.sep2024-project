import React, {FC} from 'react';
import {cookies} from "next/headers";
import {recipesService} from "@/services/recipesService";
import {IRecipesResponse} from "@/interfaces/recipesResponse";
import Recipe from "@/components/recipe/Recipe";
import Pagination from "@/components/pagination/Pagination";
import {SearchParams} from "next/dist/server/request/search-params";

type Props = {
    searchParams: SearchParams;
};
const AuthRecipes: FC<Props> = async ({searchParams}) => {
    const page =searchParams.page ? Number(searchParams.page) :1 ;
    const cookiesStore = await cookies();
    const token = cookiesStore.get('accessToken')?.value;
    const skip = (page - 1) * 20;

    const { recipes }: IRecipesResponse = await recipesService.getRecipes(token, skip);

    return (
        <div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
                {
                    recipes.map((recipe) => <Recipe key={recipe.id} recipe={recipe} />)
                }
            </div>
            <Pagination count={recipes.length} currentPage={page} />
        </div>
    );
};

export default AuthRecipes;
