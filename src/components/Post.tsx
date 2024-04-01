import { Link } from "react-router-dom";
import { PostContent } from "./../interfaces/post";
interface PostProps {
	content: PostContent;
}

// one way of typing props of component
const Post = ({ content }: PostProps) => {
	return (
		<div className="bg-slate-100 p-4 rounded-md mb-4">
			<Link to="" className="mb-3 block">
				<h2 className="text-purple-600 text-xl font-semibold">{content.title}</h2>
			</Link>
			<p className="mb-3">{content.body}</p>
			<button className="rounded-3xl px-3 py-1 bg-purple-500 text-white">Read Details</button>
		</div>
	);
};

export default Post;
