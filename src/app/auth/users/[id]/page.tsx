import React, { FC } from 'react';
import { IUser } from "@/interfaces/userInterface";
import { axiosInstance } from "@/services/axiosService";

type Props = {
    params: { id: string }
}

const UserDetailsPage: FC<Props> = async ({params}) => {
    const {data:user} = await axiosInstance.get<IUser>(`users/${params.id}`);
    return (
        <div style={{backgroundImage: "url('/back5.jpeg')"}} className={'backGround'}>
            {
                user &&
                <div className={'userDetails'}>
                    <div>
                        <h2>{user.firstName} {user.lastName} {user.maidenName}</h2>
                        <b>Age - {user.age}, Gender - {user.gender}</b>
                        <div>{user.email}</div>
                        <div>Country - {user.address?.country}</div>
                        <div>Phone number : {user.phone}</div>
                    </div>
                    <img src={user.image} alt={user.firstName}/>
                </div>
            }
        </div>
    );
};

export default UserDetailsPage;
