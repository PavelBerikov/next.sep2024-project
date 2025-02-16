'use client'

import React from 'react';
import Form from "next/form";
import {useForm} from "react-hook-form";
import {IAuth} from "@/interfaces/authInterface";
import {authService} from "@/services/authService";
import {useRouter} from "next/navigation";
import {setCookie} from "cookies-next";

const LoginForm = () => {
    const {register, handleSubmit} = useForm<IAuth>();
    const router = useRouter();

    const foo =async (auth:IAuth) => {
        /*authService(auth).then(res=> setCookie('user', JSON.stringify(res)))
        router.push('/auth/home')*/
        try {
            const res = await authService(auth); // Дожидаемся ответа
            setCookie('user', JSON.stringify(res)); // Сохраняем в куки

            router.push('/auth/home'); // Только после успешного ответа
        } catch (error) {
            console.error("Ошибка авторизации:", error);
        }


    }
    return (
        <form onSubmit={handleSubmit(foo)}>
            <input type="text" placeholder="Username" {...register('username')}/>
            <input type="password" placeholder="Password" {...register('password')}/>
            <button>Login</button>
        </form>
    );
};

export default LoginForm;