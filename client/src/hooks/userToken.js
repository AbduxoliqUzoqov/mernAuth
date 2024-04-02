import { useEffect, useState } from "react";
const useAuth = () =>{
   const [token,setToken] = useState(localStorage.getItem("token") || null);
   const [user,setUser] = useState({
      id: 0,
      name:'',
      email: '',
      password: '',
      img: 'https://avatar.iran.liara.run/public/boy?username=user'
   });
   useEffect(()=>{
	   const fetAp = async () =>{
	      const url = await fetch(`http://localhost:6767/api/user/token/${token}`);
	      const data = await url.json()
	      setUser(data)
	   }
	   fetAp()
	},[]);
	return user;
}

export default useAuth;