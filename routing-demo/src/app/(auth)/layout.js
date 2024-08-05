'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLink = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" }
];

export default function AuthLayout({ children }) {
    const pathName=usePathname()
    return (
        <div>
            {navLink.map((link) => {
                const isActive=pathName===link.href
                return (
                    <Link href={link.href} key={link.name} className={isActive?'font-bold mr-4':'text-blue-600 mr-4'}>{link.name}</Link>
                )
            })}
            
            {children}
        </div>
    )
}