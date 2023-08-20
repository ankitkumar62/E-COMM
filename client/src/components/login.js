import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
        else{
            navigate('/login')
        }
    },[])

    const validate = async () => {
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const response = await result.json();
        if(response.token){
            localStorage.setItem('user',JSON.stringify(response.user));
            localStorage.setItem('user',JSON.stringify(response.token));
            navigate('/')
        }
         else {
            alert('Enter correct data');
            navigate('/login')
        }
    }
    
    return (

        <>

            <div className="register_form">
                <div className="form_box">
                    <h2 className="h-register">E-Comm Login</h2>
                    <ul className="register-ul">
                        <li>

                            <span><i className="fa-solid fa-envelope fa-2xl"></i></span>
                            <input type="email" className="registerbox" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
                        </li>
                        <li>
                            <span><i className="fa-solid fa-lock fa-2xl"></i></span>
                            <input type="password" className="registerbox" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                        </li>
                    </ul>
                    <button type="button" onClick={validate} className="button-29">Login</button>
                </div>
            </div>


        </>

    )
}
export default Login;