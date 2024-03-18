interface Artworks {
	id: number;
	title: string;
	seen: boolean;
}
interface Prop {
	list: Artworks[];
	onCheck: (id: number, checked: boolean) => void;
}

const ItemList = ({ list, onCheck }: Prop) => {
	return (
		<>
			<ul>
				{list?.map((item, index) => (
					<li key={index}>
						<input
							type="checkbox"
							id={"_" + item.id}
							checked={item.seen}
							onChange={(e) => {
								onCheck(item.id, e.target.checked);
							}}
						/>
						<label htmlFor={"_" + item.id}>{item.title}</label>
					</li>
				))}
			</ul>
		</>
	);
};

export default ItemList;
