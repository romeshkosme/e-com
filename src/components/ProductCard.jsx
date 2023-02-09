import React, { memo, Profiler } from "react";
import { useCartContext, useCartUpdateContext } from "../context/CartContext";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
// import profiler from "../utils/profiler";

function ProductCard({ id, title, price, thumbnail }) {
	const cart = useCartContext();
	const setCart = useCartUpdateContext();
	const handleCartAction = (id, action) => {
		let response;
		if (action === "ADD") {
			import("../utils/cart").then((module) => {
				response = module.addToCart(id, cart);
				setCart(response);
			});
		} else if (action === "REMOVE") {
			import("../utils/cart").then((module) => {
				response = module.removeFromCart(id, cart);
				setCart(response);
			});
		}
	};
	return (
		<>
			{/* <Profiler id='product-card' onRender={profiler}> */}
			<div
				className='box-border p-5 bg-white rounded-md  hover:shadow-none'
				key={id}
			>
				<div>
					{/* product image */}
					<div className=''>
						<img src={thumbnail} className='max-h-24' />
					</div>
					{/* product summary */}
					<div className='mt-4'>
						<div className='flex justify-between'>
							<h4>{title}</h4>
							<p>${price}</p>
						</div>
						{/* add to card btn */}
						<div className='mt-4'>
							{!cart ||
								((!cart.find((item) => item.id === id) ||
									cart.find((item) => item.id === id)["quantity"] === 0) && (
									<button
										className='bg-custom-blue text-white px-5 py-1 rounded-md'
										onClick={() => handleCartAction(id, "ADD")}
									>
										Add to Cart
									</button>
								))}
							{cart &&
								cart.find((item) => item.id === id) &&
								cart.find((item) => item.id === id)["quantity"] > 0 && (
									<button className='flex items-center border border-black rounded'>
										{/* decrease */}
										<span
											className='px-2 py-1'
											onClick={() => handleCartAction(id, "REMOVE")}
										>
											<AiOutlineMinus />
										</span>
										<span className='px-3 py-1 border-x border-black'>
											{cart.find((item) => item.id === id)["quantity"]}
										</span>
										{/* increase */}
										<span
											className='px-2 py-1'
											onClick={() => handleCartAction(id, "ADD")}
										>
											<AiOutlinePlus />
										</span>
									</button>
								)}
						</div>
					</div>
				</div>
			</div>
			{/* </Profiler> */}
		</>
	);
}

export default memo(ProductCard);
