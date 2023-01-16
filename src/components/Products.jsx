import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useEcomContext } from "../context/EcomContext";
import { useCartContext, useCartUpdateContext } from "../context/CartContext";

function Products() {
	const cart = useCartContext();
	const setCart = useCartUpdateContext();
	const products = useEcomContext();
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
	return (
		<>
			<div className='grid grid-cols-4 gap-4 my-10'>
				{products?.map((product) => (
					<div
						className='box-border p-5 drop-shadow-md bg-white rounded-md'
						key={product.id}
					>
						<div>
							{/* product image */}
							<div className=''>
								{/* <img src={product.thumbnail} className='max-h-24' /> */}
							</div>
							{/* product summary */}
							<div className='mt-4'>
								<div className='flex justify-between'>
									<h4>{product.title}</h4>
									<p>${product.price}</p>
								</div>
								{/* add to card btn */}
								<div className='mt-4'>
									{!cart ||
										((!cart.find((item) => item.id === product.id) ||
											cart.find((item) => item.id === product.id)[
												"quantity"
											] === 0) && (
											<button
												className='bg-blue-500 text-white px-5 py-1 rounded-md'
												onClick={() => addToCart(product.id)}
											>
												Add to Cart
											</button>
										))}
									{cart &&
										cart.find((item) => item.id === product.id) &&
										cart.find((item) => item.id === product.id)["quantity"] >
											0 && (
											<button className='flex items-center border border-black rounded'>
												{/* decrease */}
												<span
													className='px-2 py-1'
													onClick={() => removeFromCart(product.id)}
												>
													<AiOutlineMinus />
												</span>
												<span className='px-3 py-1 border-x border-black'>
													{
														cart.find((item) => item.id === product.id)[
															"quantity"
														]
													}
												</span>
												{/* increase */}
												<span
													className='px-2 py-1'
													onClick={() => addToCart(product.id)}
												>
													<AiOutlinePlus />
												</span>
											</button>
										)}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default Products;
