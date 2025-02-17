import {usersServices} from "@/services/usersServices";

export async function GET() {
    const users = await usersServices.getUsers()
    return Response.json(users);
}