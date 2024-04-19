import { useState } from "react";

const UserFilter = ({ onFilter }: { onFilter: React.ChangeEventHandler<HTMLInputElement> }) => {
	const [openText, setOpenText] = useState<string>("");
	const onSearch = (ev) => {
		setOpenText(ev.target.value);
		onFilter(ev);
	};
	return (
		<>
			<label htmlFor="" className="mb-3 font-semibold">
				Search User
			</label>
			<input
				type="text"
				className="border border-gray-600 py-2 px-3 focus:border-blue-400 focus:outline-0 text-md"
				value={openText}
				onChange={(ev) => onSearch(ev)}
			/>
		</>
	);
};

export default UserFilter;
