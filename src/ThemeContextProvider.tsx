import { createContext, useState } from "react";

const ThemeContext = createContext<any>(null);

const ThemeContextProvider = ({ test, children }: React.PropsWithChildren<{ test: string }>) => {
	const [theme, setTheme] = useState("light");

	return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};
