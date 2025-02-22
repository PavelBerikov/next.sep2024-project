import {NextRequest, NextResponse} from "next/server";

export const middleware = (req:NextRequest) => {
    console.log('URL запроса', req.url);
    console.log("Заголовки запроса:", Object.fromEntries(req.headers.entries()));
    const token = req.cookies.get('accessToken')?.value;
    console.log(token);
    const requestHeaders = new Headers(req.headers);
   // requestHeaders.set("Authorization", `Bearer ${token}`);
    console.log('middleware');
    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}
export const config = {
    matcher: "/auth/:path*"
}
//как повесить токен на запрос к апи а не к локалхосту я не понял