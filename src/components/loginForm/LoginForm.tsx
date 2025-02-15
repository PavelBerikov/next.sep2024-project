'use client'

import React from 'react';
import {useForm} from "react-hook-form";

const LoginForm = () => {
    useForm<>()
    return (
        <form>
            <input type="text" name="username" placeholder="Username"/>
            <input type="password" name="password" placeholder="Password"/>
            <button>Login</button>
        </form>
    );
};

export default LoginForm;