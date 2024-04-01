import { useEffect, useState } from "react";
import PageCover from "../components/PageCover";
import Post from "../components/Post";
import { PostContent } from "./../interfaces/post";

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [posts, setPosts] = useState<PostContent[]>([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
			.then((res) => res.json())
			.then((data) => {
				setPosts(data);
				setIsLoading(false);
			});
	}, []);
	return (
		<>
			<PageCover title="This is our Home Page"></PageCover>

			<div className="mx-4 py-4">
				<h2 className="font-bold text-3xl mb-4">Posts</h2>

				<div className=" w-8/12">
					{isLoading ? <div className="text-gray-500">Loading ...</div> : posts.map((post) => <Post content={post} key={post.id} />)}
				</div>
			</div>
		</>
	);
};

export default Home;
