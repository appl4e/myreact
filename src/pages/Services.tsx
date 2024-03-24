import { useLoaderData, useParams } from "react-router-dom";
import PageCover from "../components/PageCover";

export async function loader({ params }) {
	console.log(params);
	return { params: params.id };
}

function Services() {
	const { params } = useLoaderData() as any;
	// can also see the params data using useParams
	const newParams = useParams();
	console.log(params);
	console.log("useParams data:", newParams);

	return (
		<>
			<PageCover title="This is our Service Page"></PageCover>
			<h1>Service No: {params}</h1>
		</>
	);
}

export default Services;
