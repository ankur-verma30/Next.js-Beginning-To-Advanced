export const fetchCache='default-cache';//route segment configuration

export default async function ProudctsPage() {
	const response = await fetch("http://localhost:3001/products",{
        cache: "no-store"
    });
	const products = await response.json();
	return (
		<ul className="space-y-4 p-4">
			{products.map((product) => (
				<li
					key={product.id}
					className="p-4 bg-white shadow-md rounded-lg text-gray-700">
					<h2 className="text-xl font-semibold">{product.title}</h2>
					<p>{product.description}</p>
					<p className="text-lg font-medium">${product.price}</p>
				</li>
			))}
		</ul>
	);
}
