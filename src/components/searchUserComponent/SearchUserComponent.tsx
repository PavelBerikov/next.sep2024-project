import React, { FC } from 'react';
import User from "@/components/user/User";
import {cookies} from "next/headers";
import {usersServices} from "@/services/usersServices";
import Pagination from "@/components/pagination/Pagination";

type Props = {
    searchParams: Record<string, string | undefined>;
};

const SearchUserComponent: FC<Props> = async ({ searchParams }) => {
    const page = searchParams.page ? Number(searchParams.page) : 1;
    const skip = (page - 1) * 20;
    const cookiesStore = await cookies();
    const token = cookiesStore.get('accessToken')?.value;
    const searchQuery = searchParams.search || '';

    const {users} = await usersServices.getSearchUsers(searchQuery, token, skip);

    return (
        <div>
            {users.length > 0 ? (
                users.map((user) => <User key={user.id} user={user} />)
            ) : (
                <p>No users found</p>
            )}
            <Pagination count={users.length} currentPage={page} />
        </div>
    );
};

export default SearchUserComponent;
