import React, { FC } from 'react';
import { getSearchUsers } from '@/server-actions/serverActions';
import User from "@/components/user/User";
import {cookies} from "next/headers";
import {usersServices} from "@/services/usersServices";

type Props = {
    searchParams: Record<string, string | undefined>; // Исправляем тип
};

const SearchUserComponent: FC<Props> = async ({ searchParams }) => {
    const cookiesStore = await cookies();
    const token = cookiesStore.get('accessToken')?.value;
    const searchQuery = searchParams.search || '';
    console.log('Search query:', searchQuery);

    const {users} = await usersServices.getSearchUsers(searchQuery, token);
    console.log('Users:', users);

    return (
        <div>
            {users.length > 0 ? (
                users.map((user) => <User key={user.id} user={user} />)
            ) : (
                <p>No users found</p>
            )}
        </div>
    );
};

export default SearchUserComponent;
