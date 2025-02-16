'use client'


import React from 'react';
import {Metadata} from "next";
import Users from "@/components/users/Users";

/*export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title:'Users Page'
    }
}*/
const UsersPage = () => {
    return (
        <div>
            <Users/>
        </div>
    );
};

export default UsersPage;