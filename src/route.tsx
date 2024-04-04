import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Private from "./components/Private";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Users from "./pages/users/Users";

export const router = createBrowserRouter([
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
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/*",
				element: <Private />,
				children: [
					{
						path: "dashboard",
						element: <Dashboard />,
					},
					{
						path: "users",
						element: <Users />,
					},
				],
			},
		],
	},
]);
