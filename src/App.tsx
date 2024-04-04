import { Link, NavLink, Outlet } from "react-router-dom";

function App() {
	const logout = () => {
		localStorage.setItem("auth", "false");
	};
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
							<NavLink to={`/services/123`} className={({ isActive }) => (isActive ? "text-green-400" : "")}>
								Services
							</NavLink>
						</li>
						<li>
							<Link to={`/contact`}>Contact</Link>
						</li>
						<li>
							<Link to={`/dashboard`}>Dashboard</Link>
						</li>
						<li>
							<Link to={`/users`}>Users</Link>
						</li>
						<li>
							<Link to="" onClick={logout}>
								Logout
							</Link>
						</li>
					</ul>
				</nav>
			</div>

			<Outlet />
		</>
	);
}

export default App;
