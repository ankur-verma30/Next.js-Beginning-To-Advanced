import { comments } from "./data";
import { NextRequest } from "next/server";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');
    const filteredComments = query ? 
        comments.filter((comment) => comment.text.includes(query)) : comments;
   return Response.json(filteredComments);
}

export async function POST(Request){
    const comment= await Request.json()
    const newComment = {
        id: comments.length + 1,
        text: comment.text
    }
    comments.push(newComment);
    return Response.json(JSON.stringify(newComment),{
        headers: {'Content-Type': 'application/json'},
        status: 201,
    });
}