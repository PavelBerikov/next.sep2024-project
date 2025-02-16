import {Metadata} from "next";
import React from "react";
 type Props = {
     children: React.ReactNode;
 }

export const metadata: Metadata = {
    title: 'AuthLayout metadata',
    description: 'auth layout metadata'
}

const AuthLayout = ({children}:Props) => {
    return (
        <div style={{height:'100vh'}}>
            {children}
        </div>
    )
}
export default AuthLayout