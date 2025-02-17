import React from 'react';
import {IUser} from "@/interfaces/userInterface";
import User from "@/components/user/User";
import {getUsers} from "@/server-actions/serverActions";

const Users = async  () => {
    const users:IUser[] =await getUsers()
    return (
        <div>
            {users.map(user => <User key={user.id} user={user} />)}
        </div>
    );
};

export default Users;