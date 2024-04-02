import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
//import useLogin from "./../hooks/useLogin.js";

const Login = () => {
  
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:6767/api/auth/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
	
  
  return (
    <div className="wrapper">
      <section className="form signup">
         <header>Realtime Chat App</header>
         <form onSubmit={handleSubmit}>
            <div className="field">
               <label>Email</label>
               <input type="email" name="email" placeholder="email" onChange={handleChange} value={data.email} required/>
            </div>
            <div className="field">
               <label>Password</label>
               <input type="password" name="password" placeholder="Password"
               onChange={handleChange} value={data.password} required/>
            </div>
            <button type="submit">Tizimga kirish</button>
            <p>Ro'yhatdan o'tish <Link
        to="/register"> Register</Link></p>
        <pre>{JSON.stringify(data,3,null)}</pre>
         </form>
      </section>
    </div>
  );
};

export default Login;
