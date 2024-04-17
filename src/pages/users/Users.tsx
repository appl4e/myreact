import { useEffect, useState } from "react";
import PageCover from "../../components/PageCover";
import { IUserInfo } from "../../interfaces/user";
import UserDetails from "./components/UserDetails";
import UserRow from "./components/UserRow";

const Users = () => {
	const [users, setUsers] = useState<IUserInfo[]>([]);
	const [filteredUsers, setFilteredUsers] = useState<IUserInfo[]>([]);
	const [isUsersLoading, setUsersLoading] = useState<boolean>(false);
	const [openText, setOpenText] = useState<string>("");
	const [selectedUser, setSelectedUser] = useState<IUserInfo>();

	useEffect(() => {
		setUsersLoading(true);
		fetch("https://dummyjson.com/users?" + new URLSearchParams({ limit: "10", skip: "0" }))
			.then((res) => res.json())
			.then((data) => {
				if (data?.users?.length) {
					setUsers(data?.users);
					setFilteredUsers(data?.users);
					setUsersLoading(false);
				}
			});
	}, []);

	function filterUser(openText) {
		setOpenText(openText);
		setFilteredUsers(users.filter((user) => user.firstName.toLocaleLowerCase().includes(openText.toLocaleLowerCase())));
	}

	const onUserSelect = (user) => {};

	return (
		<>
			<PageCover title="User List" />
			<div className="flex">
				<div className="w-6/12 p-4 flex flex-col">
					<label htmlFor="" className="mb-3 font-semibold">
						Search User
					</label>
					<input
						type="text"
						className="border border-gray-600 py-2 px-3 focus:border-blue-400 focus:outline-0 text-md"
						value={openText}
						onChange={(ev) => filterUser(ev.target.value)}
					/>

					<div className="w-100 h-3/4 overflow-y-auto">
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
									filteredUsers.map((user) => <UserRow user={user} key={user.id} onSelect={(e) => setSelectedUser(user)} />)
								) : (
									<tr>
										<td colSpan={2}>
											<h4 className="text-gray-400">No users found</h4>
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>
				<div className="w-6/12 p-4">{selectedUser && <UserDetails user={selectedUser} />}</div>
			</div>
		</>
	);
};

export default Users;
