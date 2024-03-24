import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./assets/css/index.css";
import ErrorPage from "./ErrorPage.tsx";
import Contact from "./pages/Contact.tsx";
import Home from "./pages/Home.tsx";
import Services from "./pages/Services.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/services/:id",
				element: <Services />,
				loader: ({ params }) => {
					return { params: params.id };
				},
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
