import * as React from "react";
import { Outlet } from "react-router-dom";

// BottomNavigation
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LayersIcon from "@mui/icons-material/Layers";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const DashboardLayout = () => {
	const [value, setValue] = React.useState("calendar");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="flex flex-col min-h-screen min-w-min w-full">
			<header className="bg-black">Header</header>
			<main className="flex-grow">
				<Outlet />
			</main>

			<BottomNavigation value={value} onChange={handleChange}>
				<BottomNavigationAction
					label="Calendar"
					value="calendar"
					icon={<DateRangeIcon />}
				/>
				<BottomNavigationAction
					label="Routines"
					value="routines"
					icon={<LayersIcon />}
				/>
				<BottomNavigationAction
					label="Account"
					value="account"
					icon={<AccountBoxIcon />}
				/>
			</BottomNavigation>
		</div>
	);
};

export default DashboardLayout;
