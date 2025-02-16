import {IRecipe} from "@/interfaces/recipesInterface";
import { FC } from "react";

type PropsType = {
    recipe: IRecipe;
};

const AuthRecipe: FC<PropsType> = ({recipe}) => {
    return (
        <div>
            <div>{recipe.id} - {recipe.name}</div>
        </div>
    );
};

export default AuthRecipe;