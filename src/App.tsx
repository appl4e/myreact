import { Link, Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<div className="flex items-center">
				<h1 className="text-xl font-bold py-2 ps-4">My React</h1>
				<nav className="ms-auto me-4">
					<ul className="list-none flex items-center gap-4 text-lg font-semibold text-teal-600">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to={`/services/123`}>Services</Link>
						</li>
						<li>
							<Link to={`/contact`}>Contact</Link>
						</li>
					</ul>
				</nav>
			</div>

			<Outlet />
		</>
	);
}

export default App;
