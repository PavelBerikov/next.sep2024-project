import { usersServices } from "@/services/usersServices";
import { cookies } from "next/headers";

export async function GET(req: Request) {
    const cookiesStore = await cookies();
    const accessToken = cookiesStore.get("accessToken");
    if (!accessToken) {
        return Response.json({ error: "Access token is missing" }, { status: 401 });
    }
    const {users} = await usersServices.getUsers(accessToken.value);
    return Response.json(users);
}
