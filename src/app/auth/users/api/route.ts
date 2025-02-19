import { usersServices } from "@/services/usersServices";
import { cookies } from "next/headers";

export async function GET(req: Request) {
    console.log('aaaaaaaaaaaaaaaaaa' , req.url);
    const cookiesStore = await cookies();
    const accessToken = cookiesStore.get("accessToken");
    if (!accessToken) {
        return Response.json({ error: "Access token is missing" }, { status: 401 });
    }
    console.log('tooooken', accessToken);
    const {users} = await usersServices.getUsers(accessToken.value);
    return Response.json(users);
}
