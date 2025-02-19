/*
import React, { FC } from 'react';
import User from "@/components/user/User";
import {axiosInstance} from "@/services/axiosService";
import {cookies} from "next/headers";
import {IUsersResponse} from "@/interfaces/usersResponseInterface";
import {SearchParams} from "next/dist/server/request/search-params";

type Props = {
    searchParams: SearchParams;
}
const Users:FC<Props> = async  ({searchParams}) => {
    const params = await searchParams;
    console.log(params);

    const promise = await cookies();
    console.log(promise.get('accessToken')?.value);
    const {users}:IUsersResponse = await axiosInstance.get("/auth/users", {
        headers:{
            'Authorization': `Bearer ${promise.get('accessToken')?.value}`
        }
    }).then((res) => res.data);


    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
            {
                users? users.map(user => <User key={user.id} user={user} />) : <h1>Errors</h1>
            }
        </div>
    );
};

export default Users;*/


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
