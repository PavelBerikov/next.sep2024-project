import {recipesService} from "@/services/recipesService";

/*
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const searchRecipe = await recipesService.getSearchRecipe(searchParams.get('search'));
    console.log(searchRecipe);

    return Response.json({ search: searchParams.get('search') });
}
*/

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const searchQuery = searchParams.get('search') || ''; // Заменяем null на пустую строку
    console.log(searchQuery);

    const searchRecipe = await recipesService.getSearchRecipe(searchQuery);

    return Response.json(searchRecipe);
}


