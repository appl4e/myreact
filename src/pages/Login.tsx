import { useNavigate } from "react-router-dom";

const Login = () => {
	// using useNavigation hood to access routers navigation methods
	const navigate = useNavigate();
	const login = () => {
		localStorage.setItem("auth", "true");

		// navigating to the dashboard page
		navigate("/dashboard");
	};
	return (
		<div className="ms-3">
			<h1 className="text-3xl mb-3">Please login</h1>
			<button type="button" className="bg-sky-500 text-sky-50 font-bold py-2 px-5 rounded-md" onClick={login}>
				Login
			</button>
		</div>
	);
};

export default Login;
