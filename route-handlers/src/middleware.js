import { NextResponse } from "next/server";

export function middleware(request) {
    // return NextResponse.redirect(new URL('/',request.url));
    // if(request.nextUrl.pathname==='/profile'){
    //     return NextResponse.redirect(new URL('/hello',request.url))
    // }
    const response = NextResponse.next()

    const themePrefrence = request.cookies.get('theme')
    if (!themePrefrence) {
        response.cookies.set('theme', 'dark');
    }
    return response
}

// export const config={
//     matcher:'/profile'
// }