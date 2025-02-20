import {recipesService} from "@/services/recipesService";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    console.log(searchParams);
    const searchQuery = searchParams.get('search') || '';
    console.log(searchQuery);

    const searchRecipe = await recipesService.getSearchRecipe(searchQuery);
    console.log(searchRecipe);

    return Response.json(searchRecipe);
}


