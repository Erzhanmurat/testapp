import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Auth = () => {
   let navigate = useNavigate()
   const [login, setLogin] = useState("")
   const [password, setPassword] = useState("")
   const handleChangeLogin = (e) => {
      setLogin(e.target.value);
   };
   const handleChangePassword = (e) => {
      setPassword(e.target.value);
   };
   function handleSubmit () {
      if (login === "admin" && password === "admin") {
         navigate("/projects");
      } else {
         setPassword("");
         setLogin("");
         toast.warn("Вы ввели неверные данные");
      }
   }
   return (
     <>
        <div className="bg-gray-200 rounded py-16 px-12 m-16 flex flex-col items-center justify-center">
           <img className="rounded-full h-32 w-32" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"
                alt="user avatar"/>
           <form onSubmit={handleSubmit} className="mt-8 mb-4">
              <div className="mb-4">
                 <label htmlFor="login" className="sr-only">login</label>
                 <input
                        onChange={handleChangeLogin}
                        value={login}
                        name="login"
                        className="border-solid border border-gray-400 rounded px-2 py-3"
                        type="login"
                        id="login"
                        placeholder="Login"/>
              </div>
              <div>
                 <label htmlFor="password" className="sr-only">Password</label>
                 <input  onChange={handleChangePassword}
                         value={password}
                         name="password"
                         className="border-solid border border-gray-400 rounded px-2 py-3"
                        type="password"
                        id="password"
                        placeholder="Password"/>
              </div>
              <div className="my-4 flex items-center">
                 <input className="h-4 w-4 mr-2" type="checkbox" id="userRemember"/>
                 <label htmlFor="userRemember">Remember me</label>
              </div>
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold w-full py-3" type="submit">Sign in
              </button>
           </form>
           <Link to="/">Forgot the password?</Link>
           <ToastContainer
             position="top-right"
             autoClose={9000}
             hideProgressBar={false}
             newestOnTop={false}
             closeOnClick
             rtl={false}
             pauseOnFocusLoss
             draggable
             pauseOnHover
           />
        </div>
     </>
   );
};

export default Auth;