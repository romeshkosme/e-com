import React from "react";
import { useCartContext } from "../context/CartContext";

function Navigation() {
	const cart = useCartContext();
	const count = cart.reduce((acc, curr) => {
		acc += curr.quantity;
		return acc;
	}, 0);
	return (
		<>
			<nav className='bg-gray-100'>
				<ul className='max-w-screen-xl mx-auto'>
					<li className='inline-block px-4 py-2 cursor-pointer bg-gray-100 hover:bg-gray-300'>
						Home
					</li>
					<li className='inline-block px-4 py-2 cursor-pointer bg-gray-100 hover:bg-gray-300'>
						Products
					</li>
					<li className='inline-block px-4 py-2 cursor-pointer bg-gray-100 hover:bg-gray-300'>
						Categories
					</li>
					<li className='float-right px-4 py-2 cursor-pointer bg-gray-100 hover:bg-gray-300'>
						<span className=''>
							<span className='inline-block'>Cart</span>
							<span className='inline-block ml-1 w-5 text-center text-xs text-white bg-red-600 rounded-full'>
								{count}
							</span>
						</span>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Navigation;
