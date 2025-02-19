import Users from '@/components/users/Users';
import SearchUserForm from "@/components/searchUsers/SearchUserForm";

import React, {FC} from 'react';


const UsersPage:FC = () => {
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
            <Users/>
        </div>
    );
};

export default UsersPage;
//};

