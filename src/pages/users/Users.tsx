import { useEffect, useState } from "react";
import PageCover from "../../components/PageCover";
import { getFullName } from "../../helper/miscellenious";

interface IUserInfo {
	id: string;
	firstName: string;
	lastName: string;
	maidenName: string;
	age: number;
	gender: string;
	email: string;
	phone: string;
	username: string;
	password: string;
	birthDate: string;
	company: {
		department: string;
		name: string;
		title: string;
	};
}

const Users = () => {
	const [users, setUsers] = useState<IUserInfo[]>([]);
	const [filteredUsers, setFilteredUsers] = useState<IUserInfo[]>([]);
	const [isUsersLoading, setUsersLoading] = useState<boolean>(false);
	const [openText, setOpenText] = useState<string>("");

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

	return (
		<>
			<PageCover title="User List" />

			<div className="w-8/12 p-4 flex flex-col">
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
								filteredUsers.map((user) => (
									<tr key={user.id}>
										<td>{getFullName(user.firstName, user.lastName)}</td>
										<td>{user?.company?.title}</td>
									</tr>
								))
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
		</>
	);
};

export default Users;
