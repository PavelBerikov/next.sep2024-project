import React from 'react';

const SearchUserForm = () => {
    return (
        <div>
            <form action="/auth/searchUser">
                <input type='text' name='search' placeholder='Search' />
                <button>go</button>
            </form>
        </div>
    );
};

export default SearchUserForm;