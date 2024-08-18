"use client";
import { useEffect } from "react";
export default function ErrorPage({ error }) {
	useEffect(() => {
		console.log(`${error.message}`);
	}, [error]);
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="text-2xl text-red-500">Error fetching users data</div>
		</div>
	);
}
