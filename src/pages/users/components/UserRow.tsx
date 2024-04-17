import { getFullName } from "../../../helper/miscellenious";
import { IUserInfo } from "../../../interfaces/user";

const UserRow = ({ user, onSelect }: { user: IUserInfo; onSelect: React.MouseEventHandler<HTMLButtonElement> }) => {
	return (
		<tr>
			<td>{getFullName(user.firstName, user.lastName)}</td>
			<td className="pe-4">{user?.company?.title}</td>
			<td className="text-center">
				<button type="button" className="px-5 py-1 my-1 rounded-md bg-sky-500 text-white font-bold" onClick={onSelect}>
					View Details
				</button>
			</td>
		</tr>
	);
};

export default UserRow;
