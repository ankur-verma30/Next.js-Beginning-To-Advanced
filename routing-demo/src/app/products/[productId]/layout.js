function generateRandomNumber(count){
    return Math.floor(Math.random()*count)
}
export default function ProductLayout({ children }) {
    const RandomNumber=generateRandomNumber(2)
    if(RandomNumber===1){
        throw new Error('Error loading product')
    }
    return (
        <div>
            {children}
            <h2>Features Products</h2>
        </div>
    )
}
