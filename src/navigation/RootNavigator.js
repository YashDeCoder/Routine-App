import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Dashboard
import DashboardLayout from "layouts/DashboardLayout";
import CalendarScreen from "screens/Calendar";

const RootNavigator = () => {
	return (
		<Routes>
			<Route path="" element={<DashboardLayout />}>
				<Route index element={<Navigate to="/calendar" replace />} />
				<Route path="/calendar" element={<CalendarScreen />} />
				<Route path="/routines" element={<CalendarScreen />} />
			</Route>
		</Routes>
	);
};

export default RootNavigator;
