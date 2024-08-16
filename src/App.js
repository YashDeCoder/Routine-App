import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import RootNavigator from "navigation/RootNavigator";

function App() {
	return (
		<Router>
			<div className="flex justify-center items-center min-w-min min-h-screen">
				<RootNavigator />
			</div>
		</Router>
	);
}

export default App;
