import { comments } from "./data";

export async function GET(){
    return Response.json(comments);
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