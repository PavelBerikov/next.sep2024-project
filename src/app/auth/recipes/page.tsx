import AuthRecipes from "@/components/authRecipes/AuthRecipes";
import SearchRecipeForm from "@/components/searchRecipes/SearchRecipeForm";

export default function RecipesPage () {
    return (
        <div    className="background" style={{backgroundImage: "url('/back3.jpeg')",}}>
            <SearchRecipeForm/>
            <AuthRecipes/>
        </div>
    );
};
