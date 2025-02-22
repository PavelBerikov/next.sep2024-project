import {usersServices} from "@/services/usersServices";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const searchQuery = searchParams.get('search') || ''; // Заменяем null на пустую строку
    console.log(searchQuery);

    const searchUsers = await usersServices.getSearchUsers(searchQuery, '');

    return Response.json(searchUsers);
}


