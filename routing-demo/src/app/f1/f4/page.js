import Link from "next/link"
export default function FourthPage() {
    return <>
        <h1>This is the Fourth page</h1>
        <div>
            <Link href='/f1/f3'>Third Page</Link>
            <Link href='/about'>Intercepted About</Link>
        </div>
    </>
}