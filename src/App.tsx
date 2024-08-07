import React from "react";
import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/projects/:id" element={<p>test</p>} />
		</Routes>
	);
}

export default App;
