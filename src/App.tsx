import { useState } from "react";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="flex items-center">
				<h1 className="text-xl font-bold py-2 ps-4">My React</h1>
				<nav className="ms-auto me-4">
					<ul className="list-none flex items-center gap-4 text-lg font-semibold text-teal-600">
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Services</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</nav>
			</div>
			<Home />
			<Services />
			<Contact />
		</>
	);
}

export default App;
