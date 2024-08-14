export const dynamic='force-dynamic'

export async function GET() {
    return Response.json('Server time: ' + new Date().toLocaleTimeString())
}