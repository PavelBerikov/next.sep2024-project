import React from 'react';
import {recipesService} from "@/services/recipesService";

const Recipes = async ()=> {
    const recipes = await recipesService.getRecipesLimit();
    return (
        <div style={{display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)'}} className={'blur'}>
            {
                recipes.map((recipe, index) => <div key={index}
                                             style={{display: "flex", flexDirection: "column", fontSize: '25px'}}>
                    <img src={recipe.image} alt={recipe.name} key={recipe.id}/>
                    <div>{recipe.name}</div>
                </div>)
            }
        </div>
    );
};

export default Recipes;