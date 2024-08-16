import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import RootNavigator from "navigation/RootNavigator";

function App() {
	return (
		<Router>
			<RootNavigator />
		</Router>
	);
}

export default App;
