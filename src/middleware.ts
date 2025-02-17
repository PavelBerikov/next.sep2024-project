import {NextRequest, NextResponse} from "next/server";

export const middleware = (request:NextRequest) => {
    console.log('middleware');
    console.log(request);
    const token = request.cookies.get('accessToken')?.value;
    const response = NextResponse.next({
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
    return response
}
export const config = {
    matcher: '/auth/users'
}