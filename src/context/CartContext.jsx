import { createContext, useContext } from "react";
import useCart from "../hooks/useCart";

const CartContext = createContext();
const CartUpdateContext = createContext();

export function useCartContext() {
	return useContext(CartContext);
}
export function useCartUpdateContext() {
	return useContext(CartUpdateContext);
}

export function CartProvider({ children }) {
	const [cart, setCart] = useCart([]);
	
	return (
		<CartContext.Provider value={cart}>
			<CartUpdateContext.Provider value={setCart}>
				{children}
			</CartUpdateContext.Provider>
		</CartContext.Provider>
	);
}
