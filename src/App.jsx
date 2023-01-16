import { createContext, useEffect, useState } from "react";
import "./App.css";
import { getProducts } from "./api/productApi";
import Home from "./page/Home";
import Navigation from "./components/Navigation";
import useCart from "./hooks/useCart";
// import { EComProvider } from "./context/EcomContext";
// import { CartProvider } from "./context/CartContext";

export const CartContext = createContext();
export const CartUpdateContext = createContext();
export const EComContext = createContext();
export const EComUpdateContext = createContext();

function App() {
	const [products, setProducts] = useState();
	const [cart, setCart] = useCart([]);
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
				<CartContext.Provider value={cart}>
					<CartUpdateContext.Provider value={setCart}>
						<div className='App'>
							<Navigation />
							<Home />
						</div>
					</CartUpdateContext.Provider>
				</CartContext.Provider>
			</EComUpdateContext.Provider>
		</EComContext.Provider>
	);
}

export default App;
