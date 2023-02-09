import React, { Profiler } from "react";
import Products from "../components/Products";
import profiler from "../utils/profiler";

function Home() {
	return (
		<>
			{/* <Profiler id="home" onRender={profiler}> */}
			<div className='max-w-screen-xl mx-auto'>
				<Products />
			</div>
			{/* </Profiler> */}
		</>
	);
}

export default Home;
