import React from "react";
import Home from "./pages/Home";
import NotFound404 from "./pages/NotFound404";

import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/projects/:id" element={<p>test</p>} />
			{/* Redirect to 404 */}
			<Route path="*" element={<NotFound404 />} />
		</Routes>
	);
}

export default App;
