import {FC} from 'react';
import {IRecipe} from "@/interfaces/recipesInterface";
import Link from "next/link";
import Tag from "@/components/tag/Tag";

type PropsType = {
    recipe: IRecipe;
};

const Recipe: FC<PropsType> = ({recipe}) => {
    return (
        <div className={'recipeCard'}>
            <Link href={{pathname:`/auth/recipes/${recipe.id}`, query:{recipe: JSON.stringify(recipe)} } }><h2 style={{cursor: 'pointer'}}>{recipe.id} - {recipe.name}.</h2></Link>
            {
                recipe.tags.map((tag, index )=> <Tag key={index} tag={tag}/>)
            }
        </div>
    );
};

export default Recipe;