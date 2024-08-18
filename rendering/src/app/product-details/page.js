import { Proudct } from "../../Components/product";
import { Reviews } from "../../Components/reviews";
import { Suspense } from "react";

export default function ProductDetailsPage() {
    return (
        <div>
            <h1>
                Proudct Details Page
            </h1>

            <Suspense fallback={<p>Loading product details...</p>}> <Proudct /></Suspense>
            <Suspense fallback={<p>Loading reviews details...</p>}> <Reviews /></Suspense>
        </div>
    )
}