import React from 'react';
import {usersServices} from "@/services/usersServices";

const Users = async () => {
    const users = await usersServices.getUsers();
    console.log(users);
    return (
        <div>
            {

            }
        </div>
    );
};

export default Users;