import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// react router
// import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <div>404 Not Found</div>,
	},
	// {
	//   path: '',
	//   element:
	// }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
