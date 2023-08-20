import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
        else{
            navigate('/signup')
        }
    },[])


    const getdata = async() =>{
     let result = await fetch('http://localhost:5000/signup',{
        method:'post',
        body:JSON.stringify({name,email,password}),
        headers:{
            'Content-Type':'application/json'
        },
     })
     let response = await result.json()
     localStorage.setItem('user',JSON.stringify(response.result));
     localStorage.setItem('user',JSON.stringify(response.token));
     navigate('/');

    }
    return (

        <>

            <div className="register_form">
                <div className="form_box">
                    <h2 className="h-register">E-Comm Register</h2>
                    <ul className="register-ul">
                        <li>
                            <span><i className="fa-solid fa-user fa-2xl"></i></span>
                            <input type="text" className="registerbox" value={name}  onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
                        </li>
                        <li>

                            <span><i className="fa-solid fa-envelope fa-2xl"></i></span>
                            <input type="email" className="registerbox" value={email}  onChange={(e) => setEmail(e.target.value)}placeholder="Enter Email" />
                        </li>
                        <li>
                            <span><i className="fa-solid fa-lock fa-2xl"></i></span>
                            <input type="password" className="registerbox" value={password}  onChange={(e) => setPassword(e.target.value)}placeholder="Enter Password" />
                        </li>
                    </ul>
                    <button type="button" onClick={getdata} className="button-29">Sign Up</button>
                </div>
            </div>


        </>

    )
}
export default Signup;
