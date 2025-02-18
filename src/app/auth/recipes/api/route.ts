import {recipesService} from "@/services/recipesService";

export async function GET() {
    const recipes = await recipesService.getRecipes();

    //const cookiesStore =await cookies();
    //console.log(cookiesStore.get('accessToken'));
    return Response.json(recipes);
}