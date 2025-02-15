import React from 'react';
import Menu from "@/components/menu/Menu";
import backImage from "../public/assets/back.png";



const Page = () => {
    return (
        <div className={'backGround'} style={{backgroundImage: `url(${backImage})`}}>
            <Menu/>
            auth home page
        </div>
    );
};

export default Page;