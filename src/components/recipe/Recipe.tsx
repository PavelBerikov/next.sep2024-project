import {FC} from 'react';
import {IRecipe} from "@/interfaces/recipesInterface";

type PropsType = {
    recipe: IRecipe;
};

const Recipe: FC<PropsType> = ({recipe}) => {
    return (
        <div>
            <img src={recipe.image} alt={recipe.name}/>
        </div>
    );
};

export default Recipe;