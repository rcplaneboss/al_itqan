import { Form, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import qs from 'qs';
import axios from "axios";
import Error from "./Error";
import { useNavigate } from "react-router-dom";

// import { useHistory } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState(null);
    const [isLogIn, setLogIn] = useState(false);
    const [isAlredyExist, setIsAlreadyExist] = useState(false);
    const [errorArray, setErrorArray] = useState(null);


    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleUserName = (e) => {
        setUserName(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }


    const handleSubmit = (e) => {

        e.preventDefault();
        setData({
            email: email,
            password: password,
            username: username,
            login: false
        })
    }

    useEffect(() => {
        if (data != null) {
            axios.post("https://alitqanonlineschool.rf.gd/views/signup_admin.php", qs.stringify(data)).then((response) => {
                if (response.data.status) {
                    
                       navigate('/admin-login');
                       console.log(response.data);
                    } else {
                        
                        setErrorArray(response.data.errors);
                        console.log(response.data);
                    }
                    console.log(response.data);

            }).catch((error) => {
            })
        }
    }, [data])

    const date = new Date();
    return (<div>
     
            <div className="log-in-box">
                <div className="header-admin-box">
                    <h1 className="admin-login montserrat">Sign Up<i className="fa fa-key"></i></h1>
                    <marquee> <p className="welcome open-sans">{date.getHours() < 12 ? 'Good Morning!' : 'Good Afternoon!'}</p></marquee>
                </div>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="username" className="montserrat" >Username</label>
                    <input type="text" name="username"  value={username} onChange={handleUserName} autoComplete="true"/>
                    <Error error={errorArray == null ? '' : errorArray.username} />

                    <label htmlFor="email" className="montserrat" >Email</label>
                    <input type="email" name="email"  value={email} onChange={handleEmail} autoComplete="true"/>
                    <Error error={errorArray == null ? '' : errorArray.email} />

                    <label htmlFor="password" className="montserrat" >Password</label>
                    <input type="password" name="password"  value={password} onChange={handlePassword} autoComplete="true"/>
                    <Error error={errorArray == null ? '' : errorArray.password} />

                    
                    <button className="button montserrat">Sign Up</button>
                    <p className="open-sans login-par">Already an admin?
                        <Link to='/admin'>
                            Log in here.
                        </Link>
                    </p>
                </form>
            </div>
        {/* {isLogIn && <Dashboard />} */}
    </div>
    );
}

export default SignUp;
