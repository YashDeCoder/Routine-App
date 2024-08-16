import React from "react";
import { Routes, Route } from "react-router-dom";

// Dashboard
import DashboardLayout from "layouts/DashboardLayout";
import CalendarScreen from "screens/Calendar";

const RootNavigator = () => {
	return (
		<Routes>
			<Route path="" element={<DashboardLayout />}>
				<Route path="" element={<CalendarScreen />} />
			</Route>
		</Routes>
	);
};

export default RootNavigator;
