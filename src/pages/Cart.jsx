import React, { useEffect, useState } from "react";
import { useCartContext, useCartUpdateContext } from "../context/CartContext";
import { useEcomContext } from "../context/EcomContext";
import productDefaultImg from "../assets/default.jpg";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function Cart() {
	const cart = useCartContext();
	const setCart = useCartUpdateContext();
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
	const addToCart = (productId) => {
		// find if item already added
		const found = cart.find((item) => item.id === productId);
		// if added increase quantity by one
		if (found) {
			const temp = cart.map((elem) => {
				if (elem.id === productId) {
					elem.quantity = elem.quantity + 1;
				}
				return elem;
			});
			setCart(temp);
		} else {
			// if not create new object
			setCart([
				...cart,
				{
					id: productId,
					quantity: 1,
				},
			]);
		}
	};
	const removeFromCart = (productId) => {
		// find if item already added
		const found = cart.find((item) => item.id === productId);
		// if added increase quantity by one
		if (found) {
			const temp = cart.map((elem) => {
				if (elem.id === productId) {
					elem.quantity = elem.quantity - 1;
				}
				return elem;
			});
			setCart(temp);
		}
	};
	useEffect(() => {
		if (cart && cart.length > 0) {
			mapCartDetails();
		}
	}, [products, cart]);
	return (
		<div className='max-w-screen-xl mx-auto'>
			<div className='border-2 border-gray-300 rounded-md my-10'>
				{/* cart heading */}
				<div className='border-b-2 bg-gray-100 px-3'>
					<h1 className='text-lg'>Cart Items</h1>
				</div>
				{/* cart items */}
				<div className='px-3 my-2'>
					{cartDetails.map((item) => {
						return (
							<>
								{item && (
									<div key={item.id} className='flex gap-4 my-2'>
										{/* product image */}
										<div className='flex-none w-28'>
											<img
												src={productDefaultImg}
												alt='Product image'
												className='w-28'
											/>
										</div>
										{/* product detail */}
										<div className='flex-1 flex justify-between'>
											<h2>{item.title}</h2>
											<div>
												<span className=''>${item.price}</span>
												<button className='flex items-center border border-black rounded'>
													{/* decrease */}
													<span
														className='px-2 py-1'
														onClick={() => removeFromCart(item.id)}
													>
														<AiOutlineMinus />
													</span>
													<span className='px-3 py-1 border-x border-black'>
														{item.quantity}
													</span>
													{/* increase */}
													<span
														className='px-2 py-1'
														onClick={() => addToCart(item.id)}
													>
														<AiOutlinePlus />
													</span>
												</button>
											</div>
										</div>
									</div>
								)}
							</>
						);
					})}
				</div>
				{/* cart footer */}
				<div className='border-t-2 border-gray-300 text-right'>
					<span className='px-3 font-bold'>Total: ${total}</span>
				</div>
			</div>
		</div>
	);
}

export default Cart;
