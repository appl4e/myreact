export default function useAuth() {
	const auth = localStorage.getItem("auth");
	// console.log(auth);

	return auth;
}
