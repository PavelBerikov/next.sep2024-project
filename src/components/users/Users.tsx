import React, { FC } from "react";
import User from "@/components/user/User";
import { cookies } from "next/headers";
import { IUsersResponse } from "@/interfaces/usersResponseInterface";
import { usersServices } from "@/services/usersServices";
import { SearchParams } from "next/dist/server/request/search-params";
import Pagination from "@/components/pagination/Pagination";

type Props = {
    searchParams: SearchParams;
};

const Users: FC<Props> = async ({ searchParams }) => {
    const page = searchParams.page ? Number(searchParams.page) : 1;
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;
    const skip = (page - 1) * 20;
    const { users }: IUsersResponse = await usersServices.getUsers(token, skip);
    return (
        <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                {users ? (
                    users.map((user) => <User key={user.id} user={user} />)
                ) : (
                    <h1>Errors</h1>
                )}
            </div>
            <Pagination count={users.length} currentPage={page} />
        </div>
    );
};

export default Users;
