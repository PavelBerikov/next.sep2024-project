import {FC} from 'react';
import {IUser} from "@/interfaces/userInterface";
import Link from "next/link";

type PropsType = {
    user: IUser;
};

const User: FC<PropsType> = ({user}) => {
    return (
        <div className={'usersCard'}>
            <Link href={{pathname:`/auth/users/${user.id}`, query:{user: JSON.stringify(user)} } }>{user.id} - {user.firstName} {user.lastName}</Link>
        </div>
    );
};

export default User;