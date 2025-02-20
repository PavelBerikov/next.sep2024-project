import {recipesService} from "@/services/recipesService";

export async function GET() {
    const recipes = await recipesService.getRecipes();

    return Response.json(recipes);
}