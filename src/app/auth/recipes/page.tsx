import AuthRecipes from "@/components/authRecipes/AuthRecipes";
import SearchRecipeForm from "@/components/searchRecipes/SearchRecipeForm";
import {SearchParams} from "next/dist/server/request/search-params";
import { FC } from "react";
type Props = {
    searchParams: SearchParams
}
const RecipesPage:FC<Props>= ({searchParams}) => {
    return (
        <div    className="background" style={{
            backgroundImage: "url('/back3.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            width: "100vw"
        }}>
            <SearchRecipeForm/>
            <AuthRecipes searchParams={searchParams}/>
        </div>
    );
};

export default RecipesPage;