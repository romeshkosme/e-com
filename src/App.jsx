import Home from "./pages/Home";
import { EComProvider } from "./context/EcomContext";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Cart from "./pages/Cart"

function App() {
	return (
		<EComProvider>
			<CartProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Home />} />
							<Route path="cart" element={<Cart />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</CartProvider>
		</EComProvider>
	);
}

export default App;
