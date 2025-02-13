import { Form } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Error from "./Error";
import { useEffect } from "react";
import qs from 'qs';
import Dashboard from "./Dashboard";

const LogIn = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [isLogIn, setLogIn] = useState(false);
   const [isAlredyExist, setIsAlreadyExist] = useState(false);
   const [errorArray, setErrorArray] = useState(null);
   const [data, setData] = useState(null);



   const handleEmail = (e) => {
      setEmail(e.target.value);
   }

   const handlePassword = (e) => {
      setPassword(e.target.value);
   }

   const handeRole = (e) => {
      setRole(e.target.value);
   }

   const handleSubmit = (e) => {

      e.preventDefault();
      setData({
         email: email,
         password: password,
         login: true
      })
   }

   useEffect(() => {
      if (data != null) {
         axios.post("http://localhost/al_itqan/login_admin.php", qs.stringify(data)).then((response) => {
            if (!response.data.check_status) {
               setLogIn(true);
               console.log(response.data);
            } else {
               setLogIn(false);
               setErrorArray(response.data.errors);
               console.log(response.data);
            }
         })
      }
      // console.log(data)
   }, [data])



   const date = new Date();
   return (
      <>
         {!isLogIn && <div className="log-in-box">
            <div className="header-admin-box">
               <h1 className="admin-login montserrat">Log In<i className="fa fa-key"></i></h1>
               <marquee> <p className="welcome open-sans">{date.getHours() < 12 ? 'Good Morning!' : 'Good Afternoon!'}</p></marquee>
            </div>
            <form onSubmit={handleSubmit}>
               <label htmlFor="email" className="montserrat" >Username or email</label>
               <input type="text" name="email" value={email} onChange={handleEmail} autoComplete="true" />
               <Error error={errorArray == null ? '' : errorArray.email} />

               <label htmlFor="password" className="montserrat" >Password</label>
               <input type="password" name="password" value={password} onChange={handlePassword} autoComplete="true" />
               <Error error={errorArray == null ? '' : errorArray.password} />

               <button className="button montserrat" onClick={handleSubmit}>Log In</button>
               <p className="open-sans login-par">Want to Create an admin account?
                  <Link to='/admin-signup'>
                     Sign Up here.
                  </Link>
               </p>
            </form>
         </div>
         }
         {isLogIn && <Dashboard />}
      </>
   );
}

export default LogIn;