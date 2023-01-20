import React, { Suspense } from "react";
import { Outlet } from "react-router";
import Navigation from "./Navigation";

function Layout() {
	return (
		<>
			<Navigation />
			<Suspense>
				<Outlet />
			</Suspense>
		</>
	);
}

export default Layout;
