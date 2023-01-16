import { createContext, useContext } from "react";
import useCart from "../hooks/useCart";

export const CartContext = createContext();

export function useCartContext() {
	return useContext(CartContext);
}

export function CartProvider({ children }) {
	const [cart, setCart] = useCart([]);
	return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
}
