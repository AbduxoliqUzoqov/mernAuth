import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(null);
  const [data, setData] = useState({});
  
  const navigate = useNavigate();
  
  const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
  //const file = e.target[4].files[0];
  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:6767/api/auth/register";
			const { data: res } = await axios.post(url,data);
			navigate("/login");
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
            <div className="name_info">
               <div className="field">
                  <label className="label">Ism</label>
                  <input name="ism" placeholder="Ism" onChange={handleChange} required value={data.ism}/>
               </div>
               <div className="field">
                  <label className="label">Familiya</label>
                  <input name="familiya" placeholder="Familiya"
                  onChange={handleChange} value={data.familiya} required/>
               </div>
            </div>
            <div className="field">
               <label className="label">Email</label>
               <input type="email" name="email" placeholder="email" onChange={handleChange} value={data.email} required/>
            </div>
            <div className="field">
               <label className="label">Password</label>
               <input type="password" name="password" placeholder="Password"
               onChange={handleChange} value={data.password} required/>
            </div>
            <div className="name_info">
               <div className="field">
                  <label className="gender" htmlFor="erkak">🙍</label>
                  <input hidden id="erkak" type="radio" name="gender" onChange={handleChange} value="erkak"
                required/>
               </div>
               <div className="field">
                  <label className="gender" htmlFor="ayol">🧑‍🏫</label>
                  <input hidden id="ayol" type="radio" name="gender" onChange={handleChange} value="ayol"
               required/>
               </div>
               <span>Jinsi : {data.gender}</span>
            </div>
            <button type="submit">Ro'yhatdan o'tish</button>
            <p>Men oldin ro'yhatdan o'tganman <Link
        to="/login"> Login</Link></p>
            {err && "Uploading and compressing the image please wait..."}
            {err && <span>{err}</span>}
            <pre>{JSON.stringify(data,null,3)}</pre>
         </form>
      </section>
    </div>
  );
};

export default Register;
