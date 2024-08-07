import React from "react";

import Home from "./pages/Home";
import NotFound404 from "./pages/NotFound404";
import KIPI2022 from "./components/Projects/KIPI2022";
import IDEAStudio from "./components/Projects/IDEAStudio";
import MobileComp from "./components/Projects/MobileComp";

import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			{/* <Route path="/projects/" element={<Home />} /> */}
			{/* projects route */}
			<Route path="/projects/kipi" element={<KIPI2022 />} />
			<Route path="/projects/mobile-computing" element={<MobileComp />} />
			<Route path="/projects/idea-studio" element={<IDEAStudio />} />
			{/* Redirect to 404 */}
			<Route path="*" element={<NotFound404 />} />
		</Routes>
	);
}

export default App;
