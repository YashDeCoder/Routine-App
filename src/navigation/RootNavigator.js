import React from "react";
import { Routes, Route } from "react-router-dom";

// Dashboard
import DashboardLayout from "layouts/DashboardLayout";

const RootNavigator = () => {
	return (
		<Routes>
			<Route path="" element={<DashboardLayout />}></Route>
		</Routes>
	);
};

export default RootNavigator;
