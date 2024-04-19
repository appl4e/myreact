import { useEffect, useState } from "react";
import PageCover from "../../components/PageCover";
import { IUserInfo } from "../../interfaces/user";
import UserDetails from "./components/UserDetails";
import UserFilter from "./components/UserFilter";
import UserTable from "./components/UserTable";

const Users = () => {
	const [users, setUsers] = useState<IUserInfo[]>([]);
	const [filteredUsers, setFilteredUsers] = useState<IUserInfo[]>([]);
	const [isUsersLoading, setUsersLoading] = useState<boolean>(false);
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
		setFilteredUsers(users.filter((user) => user.firstName.toLocaleLowerCase().includes(openText.toLocaleLowerCase())));
	}

	return (
		<>
			<PageCover title="User List" />
			<div className="flex">
				<div className="w-6/12 p-4 flex flex-col">
					{/* <label htmlFor="" className="mb-3 font-semibold">
						Search User
					</label>
					<input
						type="text"
						className="border border-gray-600 py-2 px-3 focus:border-blue-400 focus:outline-0 text-md"
						value={openText}
						onChange={(ev) => filterUser(ev.target.value)}
					/> */}
					<UserFilter onFilter={(ev) => filterUser(ev.target.value)} />

					<div className="w-100 h-3/4 overflow-y-auto">
						<UserTable filteredUsers={filteredUsers} isUsersLoading={isUsersLoading} setSelectedUser={setSelectedUser} />
					</div>
				</div>
				<div className="w-6/12 p-4">{selectedUser && <UserDetails user={selectedUser} />}</div>
			</div>
		</>
	);
};

export default Users;
