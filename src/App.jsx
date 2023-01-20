import { lazy } from "react";
import Home from "./pages/Home";
import { EComProvider } from "./context/EcomContext";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";

const Cart = lazy(() => import("./pages/Cart"));

function App() {
	return (
		<ErrorBoundary>
			<EComProvider>
				<CartProvider>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<Layout />}>
								<Route index element={<Home />} />
								<Route path='cart' element={<Cart />} />
							</Route>
						</Routes>
					</BrowserRouter>
				</CartProvider>
			</EComProvider>
		</ErrorBoundary>
	);
}

export default App;
