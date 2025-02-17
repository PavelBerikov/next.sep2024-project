import React from 'react';
import Form from "next/form";
import {auth} from "@/server-actions/serverActions";

const LoginForm = () => {

    return (
        <Form action={auth}>
            <input type="text" name='username' placeholder="Username"/>
            <input type="password" name='password' placeholder="Password"/>
            <button>Login</button>
        </Form>
    );
};

export default LoginForm;