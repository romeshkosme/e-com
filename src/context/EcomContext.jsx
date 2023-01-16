import { createContext, useContext, useEffect, useState } from "react";
import { getProducts } from "../api/productApi";

export const EComContext = createContext();

export function useEcomContext () {
  return useContext(EComContext)
}

export function EComProvider({ childer }) {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		const res = await getProducts();
		if (res) {
			setProducts(res);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, [])

	return (
		<EComContext.Provider value={products}>{childer}</EComContext.Provider>
	);
}
