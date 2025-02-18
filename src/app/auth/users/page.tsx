import Users from '@/components/users/Users';
import React from 'react';
import SearchUserForm from "@/components/searchUsers/SearchUserForm";


const UsersPage =async () => {
    return (
        <div style={{
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