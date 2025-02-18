import React, { FC } from 'react';
import { getSearchUsers } from '@/server-actions/serverActions';
import User from "@/components/user/User";

type Props = {
    searchParams: Record<string, string | undefined>; // Исправляем тип
};

const SearchUserComponent: FC<Props> = async ({ searchParams }) => {
    const searchQuery = searchParams.search || ''; // Если null, заменяем на пустую строку
    console.log('Search query:', searchQuery);

    const users = await getSearchUsers(searchQuery);
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
