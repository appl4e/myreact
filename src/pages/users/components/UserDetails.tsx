import { useContext, useEffect, useState } from "react";
import { getFullName } from "../../../helper/miscellenious";
import UserContext from "../UserContext";

const UserDetails = () => {
	const {
		state: { selectedUser },
	} = useContext(UserContext);
	const [userComp, setUserComp] = useState<string[]>([]);
	useEffect(() => {
		const companyKeys = Object.keys(selectedUser.company);
		// console.log(companyKeys);

		setUserComp(companyKeys);
	}, []);
	return (
		<>
			<h1 className="text-lg font-bold mt-6">{getFullName(selectedUser.firstName, selectedUser.lastName)}</h1>
			<h4 className="text-md font-semibold text-green-700">Company Info</h4>
			<table>
				<tbody>
					{userComp.map(
						(key) =>
							typeof selectedUser.company[key] === "string" && (
								<tr key={key}>
									<td className="pe-3">{key}</td>
									<td>{selectedUser?.company?.[key]}</td>
								</tr>
							)
					)}
				</tbody>
			</table>
		</>
	);
};

export default UserDetails;
