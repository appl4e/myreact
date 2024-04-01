import { useRouteError } from "react-router-dom";
interface Error {
	data: string;
	error: {
		message: string;
		stack: string;
	};
	internal: boolean;
	status: number;
	statusText: string;
}
const ErrorPage = () => {
	const error = useRouteError() as Error;
	console.log(error);

	return (
		<div id="error-page" className="flex items-center flex-col pt-28">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error?.statusText}</i>
			</p>
			<p>{error?.error?.message}</p>
		</div>
	);
};

export default ErrorPage;
