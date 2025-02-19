import  {FC } from 'react';
import Link from 'next/link';
import './menu.css'
import {cookies} from "next/headers";

const Menu:FC = async () => {
    const promise =await cookies();
    const value = promise.get('accessToken')?.value;
    return (
        <div>
            <header style={{width: '100vw'}}>
                {
                    !value &&
                    <div style={{height:'100%', width: '100%', display:"flex", justifyContent: 'center'}}>
                        <div style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
                            <p style={{fontSize: '30px'}} className={'dancing-script'}>Don't you see the content on the
                                page?</p>
                            <div>
                                <Link href={'/login'}>
                                    <button>I cant see.</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                }
                {
                    value &&
                    <div className={'menu dancing-script'}>
                        <ul>
                            <li><Link href={'/auth  '}>Home</Link></li>
                            {/*<li><Link href={'/login'}>Login</Link></li>*/}
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