import { useAuthContext } from "./../context/AuthContext.jsx";
import imdg from "../assets/react.svg"

const Modal = ({closeModal}) => {
	const { authUser, setAuthUser } = useAuthContext();
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
	
	return (<>
	 <div className="modal wow">
      <div className="position">
         <button className="close" onClick={()=>closeModal(false)}>X</button>
         <div className="profil">
            <div className="fl">
               <img src={authUser.img ||imdg} alt=""/>
               <div className="user">
                  <p>{authUser.name.slice(0,16)}...</p>
                  <button onClick={handleLogout}>CHIQISH</button>
               </div>
            </div>
         </div>
      </div>
   </div>
 </>);
};

export default Modal;