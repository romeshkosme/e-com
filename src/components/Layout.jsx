import React, { Suspense } from "react";
import { Outlet } from "react-router";
import Navigation from "./Navigation";

function Layout() {
	return (
		<>
			<div className='bg-custom-bg-light'>
				<Navigation />
				<Suspense>
					<Outlet />
				</Suspense>
			</div>
		</>
	);
}

export default Layout;
