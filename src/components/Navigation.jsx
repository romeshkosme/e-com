import React from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Navigation() {
	const cart = useCartContext();
	const count = !cart
		? 0
		: cart.reduce((acc, curr) => {
				acc += curr.quantity;
				return acc;
		  }, 0);
	return (
		<>
			<nav className='bg-custom-dark-blue'>
				<ul className='max-w-screen-xl mx-auto text-white'>
					<li className='inline-block px-4 py-2 cursor-pointer hover:text-custom-dark-blue hover:bg-custom-light-blue'>
						<Link to={`/`}>Home</Link>
					</li>
					{/* <li className='inline-block px-4 py-2 cursor-pointer hover:text-custom-dark-blue hover:bg-custom-light-blue'>
						Products
					</li>
					<li className='inline-block px-4 py-2 cursor-pointer hover:text-custom-dark-blue hover:bg-custom-light-blue'>
						Categories
					</li> */}
					<li className='float-right px-4 py-2 cursor-pointer hover:text-custom-dark-blue hover:bg-custom-light-blue'>
						<Link to={`cart`}>
							<span className=''>
								<span className='inline-block'>Cart</span>
								<span className='inline-block ml-1 w-5 text-center text-xs text-white bg-red-600 rounded-full'>
									{count}
								</span>
							</span>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Navigation;
