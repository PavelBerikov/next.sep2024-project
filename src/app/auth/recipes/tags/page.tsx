import React from 'react';
import Tag from "@/components/tag/Tag";

const TagsPage = async () => {
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
                 height: "100vh",
             }}>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)'}}>{
                tags.map((tag, index) => <Tag key={index} tag={tag}/>)
            }</div>
            <hr/>
        </div>
    );
};

export default TagsPage;