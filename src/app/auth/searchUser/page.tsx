import React, { FC } from 'react';
import SearchUserComponent from "@/components/searchUserComponent/SearchUserComponent";
import SearchUserForm from "@/components/searchUsers/SearchUserForm";

type Props = {
    searchParams: Record<string, string | undefined>; // Используем корректный тип
};

const SearchUserPage: FC<Props> = async ({ searchParams }) => {
    const searchQuery = searchParams.search || ''; // Безопасно извлекаем параметр
    console.log('Search Query:', searchQuery);

    return (
        <div style={{
            backgroundImage: "url('/back6.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            width: "100vw",
            height: "100vh",
        }}>
            <SearchUserForm/>
            <SearchUserComponent searchParams={searchParams} />
        </div>
    );
};

export default SearchUserPage;
