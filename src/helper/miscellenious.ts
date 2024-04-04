export const getFullName = (firstName: string, lastName: string, middleName?: string): string => {
	return firstName || lastName ? firstName || "" + " " + middleName || "" + " " + lastName || "" : "";
};
