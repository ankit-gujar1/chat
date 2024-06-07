import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// in auth repo version, i did useAuthContext in seperate useAuthContext.js file in hooks folder
export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

	return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};