import React, { FC } from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import {IRecipe} from "@/interfaces/recipesInterface";
import Link from "next/link";
import {getRecipes} from "@/server-actions/serverActions";

type Props = {
    params: Promise<{id:string}>,
    searchParams: Promise<SearchParams>
}

const RecipeDetailsPage:FC<Props> =async ({searchParams}) => {
    const {recipe} = await searchParams;
    let obj = null
    if(typeof recipe === 'string'){
        obj = JSON.parse(recipe) as IRecipe;
    }
    return (
        <div style={{
            backgroundImage: "url('/back5.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            width: "100vw",
            height: "100vh",
            display: "flex", alignItems: "center", flexDirection: "column"
        }}
             className={'backGround'}>
            {
                obj &&
                <div className={'recipeDetails'}>
                    <img src={obj.image} alt={obj.name}/>
                    <div style={{background: 'rgba(255, 255, 255, 0.5)', borderRadius: '20px', marginRight: '50px'}}>
                        <h1>{obj.name}</h1>
                        <Link href={`/auth/users/${obj.userId}`}><b>This recipe belongs to the user with ID {obj.userId}</b></Link>
                        <h3>Ingredients:</h3>
                        <p>{obj.ingredients.join(', ')}</p>
                        <h3>instructions:</h3>
                        <p>{obj.instructions.join(' ')}</p>
                        <b>Prep time</b> - {obj.prepTimeMinutes} min
                        <br/>
                        <b>Cook time</b> - {obj.cookTimeMinutes}
                        <div>
                            <b>Tags:</b>
                            {/*{
                                obj.tags.map((tag, index) => <Tag tag={tag} key={index}/>)
                            }*/}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default RecipeDetailsPage;