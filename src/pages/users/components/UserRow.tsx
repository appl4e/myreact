import { useContext } from "react";
import { getFullName } from "../../../helper/miscellenious";
import { IUserInfo } from "../../../interfaces/user";
import UserContext from "../UserContext";

const UserRow = ({ user }: { user: IUserInfo }) => {
	const { setSelectedUser } = useContext(UserContext);
	return (
		<tr>
			<td>{getFullName(user.firstName, user.lastName)}</td>
			<td className="pe-4">{user?.company?.title}</td>
			<td className="text-center">
				<button type="button" className="px-5 py-1 my-1 rounded-md bg-sky-500 text-white font-bold" onClick={(ev) => setSelectedUser(user)}>
					View Details
				</button>
			</td>
		</tr>
	);
};

export default UserRow;
