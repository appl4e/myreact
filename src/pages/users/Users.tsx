import React, { useEffect } from "react";
import PageCover from "../../components/PageCover";
import UserContext from "./UserContext";
import UserDetails from "./components/UserDetails";
import UserFilter from "./components/UserFilter";
import UserTable from "./components/UserTable";

const userReducer = (state, action) => {
	switch (action.type) {
		case "SET_USERS":
			return {
				...state,
				users: action.payload,
			};
		case "SET_FILTERED_USERS":
			return {
				...state,
				filteredUsers: action.payload,
			};
		case "SET_USERS_LOADING":
			return {
				...state,
				isUsersLoading: action.payload,
			};
		case "SET_SELECTED_USER":
			return {
				...state,
				selectedUser: action.payload,
			};
	}
};

const Users = () => {
	const [state, dispatch] = React.useReducer(userReducer, {
		users: [],
		filteredUsers: [],
		isUsersLoading: false,
		selectedUser: null,
	});

	useEffect(() => {
		// setUsersLoading(true);
		dispatch({ type: "SET_USERS_LOADING", payload: true });
		fetch("https://dummyjson.com/users?" + new URLSearchParams({ limit: "10", skip: "0" }))
			.then((res) => res.json())
			.then((data) => {
				if (data?.users?.length) {
					// setUsers(data?.users);
					dispatch({ type: "SET_USERS", payload: data?.users });
					// setFilteredUsers(data?.users);
					dispatch({ type: "SET_FILTERED_USERS", payload: data?.users });
					// setUsersLoading(false);
					dispatch({ type: "SET_USERS_LOADING", payload: false });
				}
			});
	}, []);

	// function filterUser(openText) {
	// 	setFilteredUsers(users.filter((user) => user.firstName.toLocaleLowerCase().includes(openText.toLocaleLowerCase())));
	// }

	return (
		<UserContext.Provider value={{ state, dispatch }}>
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
					<UserFilter />

					<div className="w-100 h-3/4 overflow-y-auto">
						<UserTable />
					</div>
				</div>
				<div className="w-6/12 p-4">{state.selectedUser && <UserDetails />}</div>
			</div>
		</UserContext.Provider>
	);
};

export default Users;
