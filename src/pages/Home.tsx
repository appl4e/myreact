import { ReactElement, useEffect, useState } from "react";
import PageCover from "../components/PageCover";
import Post from "../components/Post";
import { PostContent } from "./../interfaces/post";

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [posts, setPosts] = useState<PostContent[]>([]);
	const [userId, setUserId] = useState<string>("1");
	useEffect(() => {
		setIsLoading(true);
		fetch("https://jsonplaceholder.typicode.com/posts?" + new URLSearchParams({ userId: userId }))
			.then((res) => res.json())
			.then((data) => {
				setPosts(data);
				setIsLoading(false);
			});
	}, [userId]);
	const selects: ReactElement[] = [];
	for (let i = 1; i < 11; i++) {
		selects.push(
			<option key={i} value={i}>
				{i}
			</option>
		);
	}
	return (
		<>
			<PageCover title="This is our Home Page"></PageCover>

			<div className="mx-4 py-4">
				<div className="flex  w-8/12">
					<h2 className="font-bold text-3xl mb-4">Posts</h2>
					<div className="flex ms-auto items-center gap-2">
						<label>Page</label>
						<select className="border border-slate-700 block rounded-sm" onChange={(e) => setUserId(e.target.value)}>
							{selects}
						</select>
					</div>
				</div>

				<div className=" w-8/12">
					{isLoading ? <div className="text-gray-500">Loading ...</div> : posts.map((post) => <Post content={post} key={post.id} />)}
				</div>
			</div>
		</>
	);
};

export default Home;
