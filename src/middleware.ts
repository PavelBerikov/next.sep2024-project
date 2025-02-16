import {NextRequest} from "next/server";

export const middleware = (request:NextRequest) => {
    console.log('middleware', request);

}
export const config = {
    matcher: '/auth'
}