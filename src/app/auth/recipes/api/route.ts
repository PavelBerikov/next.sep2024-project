import {recipesService} from "@/services/recipesService";
import {cookies} from "next/headers";

export async function GET(req: Request, res: Response) {

    const cookiesStore = await cookies();
    const accessToken = cookiesStore.get("accessToken");
    if (!accessToken) {
        return Response.json({ error: "Access token is missing" }, { status: 401 });
    }
    const recipes = await recipesService.getRecipes(accessToken.value);

    return Response.json(recipes);
}