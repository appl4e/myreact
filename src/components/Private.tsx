import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Private = () => {
	const auth = useAuth();
	auth == "true" ? true : false;
	// console.log(auth);

	return auth == "true" ? <Outlet /> : <Navigate to="/login" />;
};

export default Private;
