'use server'

import {cookies} from "next/headers";

export async function GET() {
    (await cookies()).set('token', '123456', { maxAge: 60 * 60 * 24 });
    return new Response('Cookie set');
}