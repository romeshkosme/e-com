import { createContext, useContext, useEffect, useState } from "react";
import { getProducts } from "../api/productApi";

const EComContext = createContext();
const EComUpdateContext = createContext();

export function useEcomContext() {
	return useContext(EComContext);
}

export function EComProvider({ children }) {
	const [products, setProducts] = useState();

	const fetchProducts = async () => {
		const res = await getProducts();
		if (res) {
			setProducts(res);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<EComContext.Provider value={products}>
			<EComUpdateContext.Provider value={setProducts}>
				{children}
			</EComUpdateContext.Provider>
		</EComContext.Provider>
	);
}
