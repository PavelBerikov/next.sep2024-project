import Users from '@/components/users/Users';
import React from 'react';

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
            <Users/>
        </div>
    );
};

export default UsersPage;