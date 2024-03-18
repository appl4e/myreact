import { useState } from "react";
import ItemList from "./components/ItemList";

const initialList = [
	{ id: 0, title: "Big Bellies", seen: false },
	{ id: 1, title: "Lunar Landscape", seen: false },
	{ id: 2, title: "Terracotta Army", seen: true },
];

function App() {
	const [list, setList] = useState(initialList);

	const handleItemCheck = (id: number, checked: boolean) => {
		setList(
			list.map((item) => {
				if (item.id == id) {
					return { ...item, seen: checked };
				} else {
					return item;
				}
			})
		);
	};

	return (
		<>
			<h1 className="text-xl font-bold">My React</h1>
			<h2>Art Bucket List</h2>
			<h3>My list of art to see:</h3>

			<ItemList list={list} onCheck={handleItemCheck} />
		</>
	);
}

export default App;
