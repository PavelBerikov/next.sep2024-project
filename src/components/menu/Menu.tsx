'use client'

import  {FC} from 'react';
import Link from 'next/link';
import {useRouter} from "next/navigation";
import './menu.css'
import {getCookie} from "cookies-next";

const Menu:FC = () => {
    const loginUser = getCookie('user')
    const router = useRouter();
    return (
        <div>
            <header style={{width: '100vw'}}>
                {
                    !loginUser &&
                    <div style={{height:'100%', width: '100%', display:"flex", justifyContent: 'center'}}>
                        <div style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
                            <p style={{fontSize: '30px'}} className={'dancing-script'}>Don't you see the content on the
                                page?</p>
                            <div>
                                <button onClick={() => {
                                    router.push('/login')
                                }}>I can't see.</button>
                            </div>
                        </div>
                    </div>
                }
                {
                    loginUser &&
                    <div className={'menu dancing-script'}>
                        <ul>
                            <li><Link href={'/auth/home'}>Home</Link></li>
                            <li><Link href={'/auth/users'}>Users</Link></li>
                            <li><Link href={'/auth/recipes'}>Recipes</Link></li>
                        </ul>
                      {/*  <div style={{display: "flex", margin: '0', gap: '20px'}}>
                            <div onClick={() => {
                                dispatch(authSlice.actions.deleteLoginUser())
                            }} className={'dancing-script'}
                                 style={{cursor: "pointer", fontSize: '40px'}}>Logout</div>
                            <img className={'avatar'} src={loginUser.image} alt={loginUser.firstName}/>
                        </div>*/}
                    </div>
                }
            </header>
        </div>
    );
};

export default Menu;