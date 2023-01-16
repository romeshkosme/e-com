import Home from "./page/Home";
import Navigation from "./components/Navigation";
import { EComProvider } from "./context/EcomContext";
import { CartProvider } from "./context/CartContext";

// export const CartContext = createContext();
// export const CartUpdateContext = createContext();

function App() {
	// const [cart, setCart] = useCart([]);
	return (
		<EComProvider>
			<CartProvider>
				{/* <CartContext.Provider value={cart}>
				<CartUpdateContext.Provider value={setCart}> */}
				<div className='App'>
					<Navigation />
					<Home />
				</div>
				{/* </CartUpdateContext.Provider>
			</CartContext.Provider> */}
			</CartProvider>
		</EComProvider>
	);
}

export default App;
