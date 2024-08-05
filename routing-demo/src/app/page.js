import Link from "next/link"
export default function home(){
    return (
        <>
    <h1>Return to the home page</h1>
    <Link href="/blog">Blog</Link>
    <Link href="/products">Products</Link>
    </>
)
} 