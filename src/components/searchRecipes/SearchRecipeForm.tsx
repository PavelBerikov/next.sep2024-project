import React from 'react';

const SearchRecipeForm = () => {
    return (
        <div>
            <form action="/auth/searchRecipe">
                <input type='text' name='search' placeholder='Search' />
                <button>go</button>
            </form>
        </div>
    );
};

export default SearchRecipeForm;