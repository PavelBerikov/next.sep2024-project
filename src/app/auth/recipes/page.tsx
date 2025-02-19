import AuthRecipes from "@/components/authRecipes/AuthRecipes";
import SearchRecipeForm from "@/components/searchRecipes/SearchRecipeForm";

export default function RecipesPage () {
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
            <AuthRecipes/>
        </div>
    );
};
