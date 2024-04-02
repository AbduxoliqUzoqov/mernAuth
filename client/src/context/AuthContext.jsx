import useAuthUser from "./../hooks/userToken.js"
import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();


export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
   const user = useAuthUser();
	const [authUser, setAuthUser] = useState(user);
	useEffect(()=>{
	   setAuthUser(user)
	},[user])
	return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};
