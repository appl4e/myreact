import { useEffect, useState } from "react";
import { getFullName } from "../../../helper/miscellenious";
import { IUserInfo } from "../../../interfaces/user";

const UserDetails = ({ user }: { user: IUserInfo }) => {
	const [userComp, setUserComp] = useState<string[]>([]);
	useEffect(() => {
		const companyKeys = Object.keys(user.company);
		// console.log(companyKeys);

		setUserComp(companyKeys);
	}, []);
	return (
		<>
			<h1 className="text-lg font-bold mt-6">{getFullName(user.firstName, user.lastName)}</h1>
			<h4 className="text-md font-semibold text-green-700">Company Info</h4>
			<table>
				<tbody>
					{userComp.map(
						(key) =>
							typeof user.company[key] === "string" && (
								<tr key={key}>
									<td className="pe-3">{key}</td>
									<td>{user?.company?.[key]}</td>
								</tr>
							)
					)}
				</tbody>
			</table>
		</>
	);
};

export default UserDetails;
