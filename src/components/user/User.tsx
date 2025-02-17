import {FC} from 'react';
import {IUser} from "@/interfaces/userInterface";

type PropsType = {
    user: IUser;
};

const User: FC<PropsType> = ({user}) => {
    return (
        <div>
            {user.id} - {user.firstName}
        </div>
    );
};

export default User;