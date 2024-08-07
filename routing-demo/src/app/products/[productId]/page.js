import { metadata } from "@/app/layout";



export const generateMetadata = async ({ params }) => {
    
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`)
        }, 100);
    })
    return {
        title: `Product ${title}`
    }
}
export default function ProductDetails({ params }) {
    return <h1>Details about the product {params.productId}</h1>
}