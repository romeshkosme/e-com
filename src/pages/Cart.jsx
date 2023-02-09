import React, { Profiler, useEffect, useState, memo } from "react";
import { useCartContext } from "../context/CartContext";
import { useEcomContext } from "../context/EcomContext";
import profiler from "../utils/profiler";
import CartListItem from "../components/CartListItem";

function Cart() {
	const cart = useCartContext();
	const products = useEcomContext();
	const [cartDetails, setCartDetails] = useState([]);
	const [total, setTotal] = useState(0);
	const mapCartDetails = () => {
		let total = 0;
		const temp = cart.map((item) => {
			const found = products?.find((products) => products.id === item.id);
			if (found) {
				item = { ...item, ...found };
				total += item.price * item.quantity;
			}
			if (item.quantity === 0) return null;
			return item;
		});
		setTotal(total);
		setCartDetails(temp);
	};
	useEffect(() => {
		if (cart && cart.length > 0) {
			mapCartDetails();
		} else {
			setCartDetails([]);
		}
	}, [products, cart]);
	return (
		<>
			{/* <Profiler id='cart' onRender={profiler}> */}
			<div className='max-w-screen-xl mx-auto min-h-[90vh]'>
				<div className='border-4 border-custom-dark-blue rounded-md mt-10'>
					{/* cart heading */}
					<div className='border-b-2 border-custom-dark-blue bg-gray-100 px-3'>
						<h1 className='text-lg'>Cart Items</h1>
					</div>
					{/* cart items */}
					<div className='px-3 my-2'>
						{cartDetails.length > 0 &&
							cartDetails.map(
								(item) =>
									item && (
										<CartListItem
											key={item.id}
											id={item.id}
											title={item.title}
											price={item.price}
											quantity={item.quantity}
											thumbnail={item.thumbnail}
										/>
									)
							)}
						{(!cartDetails || cartDetails.length === 0) && (
							<>
								<div>
									<p>No product added.</p>
								</div>
							</>
						)}
					</div>
					{/* cart footer */}
					<div className='border-t-2 border-custom-dark-blue text-right'>
						<span className='px-3 font-bold'>Total: ${total}</span>
					</div>
				</div>
				<div className="mt-5">
					<button className='bg-custom-dark-blue text-white px-5 py-1 rounded-md float-right' title="Checkout button doesn't work.">
						Checkout
					</button>
				</div>
			</div>
			{/* </Profiler> */}
		</>
	);
}

export default memo(Cart);
