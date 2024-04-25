import { useContext, useState } from "react";
import UserContext from "../UserContext";

const UserFilter = () => {
	const [openText, setOpenText] = useState<string>("");
	const {
		state: { users },
		dispatch,
	} = useContext<any>(UserContext);
	const onSearch = (ev) => {
		setOpenText(ev.target.value);
		dispatch({
			type: "SET_FILTERED_USERS",
			payload: users.filter((user) => user.firstName.toLocaleLowerCase().includes(ev.target.value.toLocaleLowerCase())),
		});
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
