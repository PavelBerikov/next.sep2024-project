import React from 'react';
import {IUser} from "@/interfaces/userInterface";
import User from "@/components/user/User";
import {getUsers} from "@/server-actions/serverActions";

const Users = async  () => {

    const users:IUser[] =await getUsers()
    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
            {
                users.map(user => <User key={user.id} user={user} />)
            }
        </div>
    );
};

export default Users;