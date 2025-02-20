import React, { FC } from "react";
import User from "@/components/user/User";
import { cookies } from "next/headers";
import { IUsersResponse } from "@/interfaces/usersResponseInterface";
import { usersServices } from "@/services/usersServices";


const Users:FC = async () => {
    const cookieStore =await cookies();
    const token = cookieStore.get("accessToken")?.value;

    const { users }: IUsersResponse = await usersServices.getUsers(token);

    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
            {users ? users.map((user) => <User key={user.id} user={user} />) : <h1>Errors</h1>}
        </div>
    );
};

export default Users;
