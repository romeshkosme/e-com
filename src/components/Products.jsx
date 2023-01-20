import React, { memo, Profiler } from "react";
import { useEcomContext } from "../context/EcomContext";
import ProductCard from "./ProductCard";
import profiler from "../utils/profiler";

function Products() {
	const products = useEcomContext();
	return (
		<>
			<Profiler id='products' onRender={profiler}>
				<div className='grid grid-cols-4 gap-4 my-10'>
					{products?.map((product) => (
						<ProductCard
							key={product.id}
							id={product.id}
							title={product.title}
							price={product.price}
							thumbnail={product.thumbnail}
						/>
					))}
				</div>
			</Profiler>
		</>
	);
}

export default memo(Products);
