import { useContext } from "react";
import UserContext from "../UserContext";
import UserRow from "./UserRow";

const UserTable = () => {
	const { isUsersLoading, filteredUsers } = useContext<any>(UserContext);
	return (
		<table className="w-100">
			<thead>
				<tr>
					<th className="min-w-36 text-left">Name</th>
					<th className="min-w-44 text-left">Designation</th>
					<th className="min-w-44 text-center">Action</th>
				</tr>
			</thead>
			<tbody>
				{isUsersLoading ? (
					<tr className="bg-gray-100">
						<td colSpan={2} className="h-16">
							<h4 className="text-gray-400 text-center">User data loading ...</h4>
						</td>
					</tr>
				) : filteredUsers.length ? (
					filteredUsers.map((user) => <UserRow user={user} key={user.id} />)
				) : (
					<tr>
						<td colSpan={2}>
							<h4 className="text-gray-400">No users found</h4>
						</td>
					</tr>
				)}
			</tbody>
		</table>
	);
};

export default UserTable;
