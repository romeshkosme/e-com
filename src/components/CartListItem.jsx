import React, {memo} from "react";
import productDefaultImg from "../assets/default.jpg";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useCartContext, useCartUpdateContext } from "../context/CartContext";

function CartListItem({id, title, price, quantity, thumbnail}) {
  const cart = useCartContext();
  const setCart = useCartUpdateContext();
  const handleCartAction = (productId, action) => {
		let response;
		if (action==="ADD") {
			response = import("../utils/cart").then((module) => {
				response = module.addToCart(productId, cart)
				setCart(response)
			})
		} else if (action ==="REMOVE") {
			response = import("../utils/cart").then((module) => {
				response = module.removeFromCart(productId, cart)
				setCart(response)
			})
		}
	}
	return (
		<>
			<div key={id} className='flex gap-4 my-2'>
				{/* product image */}
				<div className='flex-none w-28'>
					<img src={thumbnail} alt='Product image' className='max-h-24' />
				</div>
				{/* product detail */}
				<div className='flex-1 flex justify-between'>
					<h2>{title}</h2>
					<div>
						<span className=''>${price}</span>
						<button className='flex items-center border border-black rounded'>
							{/* decrease */}
							<span
								className='px-2 py-1'
								onClick={() => handleCartAction(id, "REMOVE")}
							>
								<AiOutlineMinus />
							</span>
							<span className='px-3 py-1 border-x border-black'>
								{quantity}
							</span>
							{/* increase */}
							<span
								className='px-2 py-1'
								onClick={() => handleCartAction(id, "ADD")}
							>
								<AiOutlinePlus />
							</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(CartListItem);
