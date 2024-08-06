'use client'
import { useRouter } from "next/navigation"

export default function OrderProduct() {
    const router = useRouter()
    const handleOrder = () => {
        console.log("Order Placed")
        router.push('/')
    }
    return <>
        <h1>This is the order product page</h1>
        <button onClick={handleOrder}>Place Order</button>
    </>
}