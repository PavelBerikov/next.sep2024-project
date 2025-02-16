import {setCookie} from "cookies-next";

export const cookiesService = {
    setCookie: (key: string, value: string) => {
        setCookie(key, value);
    }
}