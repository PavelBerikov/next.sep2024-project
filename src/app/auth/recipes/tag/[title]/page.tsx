import React, {FC} from 'react';
import {Params} from "next/dist/server/request/params";
import {axiosInstance} from "@/services/axiosService";
import Tag from "@/components/tag/Tag";
import {IRecipesResponse} from "@/interfaces/recipesResponse";
import Recipe from "@/components/recipe/Recipe";

type Props = {
    params: Params
}
const FilterTagPage:FC<Props> =async ({params}) => {
    const tag = await params;
    const {recipes}:IRecipesResponse = await axiosInstance.get(`/recipes/tag/${tag.title}`).then(res => res.data);
    const tags:string[] = await fetch('https://dummyjson.com/recipes/tags').then((res) => res.json());

    return (
        <div className="background"
             style={{
                 backgroundImage: "url('/back2.jpeg')",
                 backgroundSize: "cover",
                 backgroundPosition: "center",
                 backgroundRepeat: "no-repeat",
                 backgroundAttachment: "fixed",
                 width: "100vw",
                 height: "100vh"
             }}>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)'}}>{
                tags.map((tag, index) => <Tag key={index} tag={tag}/>)
            }</div>
            <hr/>
            {
                recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)
            }
        </div>
    );
};

export default FilterTagPage;