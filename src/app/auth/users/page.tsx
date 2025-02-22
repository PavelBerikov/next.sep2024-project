import Users from '@/components/users/Users';
import SearchUserForm from "@/components/searchUsers/SearchUserForm";

import React, {FC} from 'react';
import {SearchParams} from "next/dist/server/request/search-params";

type Props = {
    searchParams: SearchParams
}
const UsersPage:FC<Props> = ({searchParams}) => {
    return (
        <div className="background" style={{
            backgroundImage: "url('/back4.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            width: "100vw",
            height: "100vh",
        }}>
            <SearchUserForm/>
            <Users searchParams={searchParams} />
        </div>
    );
};

export default UsersPage;
//};

