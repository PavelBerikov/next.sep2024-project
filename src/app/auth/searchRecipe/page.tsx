import SearchRecipeForm from '@/components/searchRecipes/SearchRecipeForm';
import React, {FC} from 'react';
import SearchRecipesComponent from "@/components/SearchRecipesComponent/SearchRecipesComponent";
import {SearchParams} from "next/dist/server/request/search-params";

type Props = {
    searchParams: SearchParams;
}
const SearchRecipePage:FC<Props> = async ({searchParams}) => {
    const search = await searchParams;
    return (
        <div style={{
            backgroundImage: "url('/back7.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            width: "100vw",
            height: "100vh",
        }}>
            <SearchRecipeForm/>
            <SearchRecipesComponent searchParams={search} />

        </div>
    );
};

export default SearchRecipePage;