import imdg from "../assets/react.svg"
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "./../context/AuthContext.jsx";
import useAuthUser from "./../hooks/userToken.js";
import Modal from "./../components/Modal.jsx";
import axios from "axios";


const Home = () => {
   const [isModalt, setIsModalt] = useState(false);
   const [newmsg, setNewmsg] = useState(false);
   const textRef = useRef();
  
   const { authUser, setAuthUser } = useAuthContext();
   
   const hendleSend = ()=>{
      console.log("send")
   }
   
   const handleChange = (e)=>{
      setNewmsg(e.target.value)
   }
   useEffect( ()=>{
      textRef.current.style.height = "auto";
      textRef.current.style.height = textRef.current.scrollHeight + "px";
   },[newmsg]);
  return (<div>
    <div className="wrapper">
      <section className="flex">
         <div className="chat-data">
           <img src={imdg} alt=""/>
           <div className="flex2">
               <h4>{authUser.name}</h4>
               <span>3 ta foydalanuvchi</span>
            </div>
         </div>
         <div onClick={()=>setIsModalt(true)} className="auth-user">
            <img src={authUser.img ||imdg} alt=""/>
         </div>
      </section>
      <section className="flex3">
         <div className="chat-area">
            <div className="xabar-keldi">
               <img src="./bg.png" alt=""/>
               <div className="ds">
                  <span className="name">Alex</span>
                  <p>Salom Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Animi sed cum deleniti a inventore quam, distinctio.
                  Quod itaque, tenetur voluptatum. euueje ue Hello.....</p>
                  <span className="time">19:34</span>
               </div>
            </div>
            <div className="xabar-jonatildi">
               <div className="ds">
                  <span className="name">Alex</span>
                  <p>Salom Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Animi sed cum deleniti a inventore quam, distinctio.
                  Quod itaque, tenetur voluptatum. euueje ue Hello.....</p>
                  <span className="time">19:34</span>
               </div>
            </div>
         </div>
         
         <div className="form-input">
            <div className="df">
               <textarea onChange={handleChange} ref={textRef} placeholder="Enter ....."></textarea>
               <button onClick={hendleSend}>➡️</button>
            </div>
         </div>
      </section>
   </div>
  
   {isModalt && <Modal closeModal={setIsModalt} />}
   </div>);
}

export default Home