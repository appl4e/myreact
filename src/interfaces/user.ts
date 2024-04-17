export interface IUserInfo {
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
