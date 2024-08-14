import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request) {

    const requestHeaders = new Headers(request.headers)
    const headersList = headers();

    cookies().set('resultPerPage', '20')
    const theme = request.cookies.get('theme')
    console.log(theme)

    console.log(requestHeaders.get('Authorization'))
    console.log(requestHeaders.get('Authorization')) 
    console.log(cookies().get('resultPerPage'))

    return new Response("<h1>Profile route data here!</h1>", {
        headers: {
            'Content-Type': 'text/html',
            'Set-Cookie': 'theme=dark'
        },
    });
}
