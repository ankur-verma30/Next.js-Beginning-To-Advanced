'use client'

function getRandomInt(count) {
    return Math.floor(Math.random() * count);
}

export default function ReviewDetails({ params }) {
    // const randomNumber = getRandomInt(2);
    
    // if (randomNumber === 1) {
    //     return <h1>Error: Something went wrong</h1>;
    // }

    return (
        <h1>Details about the review {params.reviewsId} for {params.productId}</h1>
    );
}
