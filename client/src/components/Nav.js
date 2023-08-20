import React from 'react';
import { Link, useNavigate } from "react-router-dom"



const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate('');
    const logout = () => {
        localStorage.clear();
        navigate('/login')
    }
    return (

        <nav className="navbar-container">
            <div className="logo-container">
                <Link to={'/'}>E-Comm</Link>
            </div>

            <div className="bars">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            {
                auth ?
                    <ul className="nav-items">
                        <li className="nav-link"><Link to="/">Home</Link></li>
                        <li className="nav-link"><Link to="/add-product">Add-Product</Link></li>
                        <li className="nav-link"><Link to="/profile">Profile</Link></li>
                        <li className="nav-link"><Link onClick={logout} to="/logout">LogOut</Link></li>

                    </ul>
                    :
                    <ul className='nav-items'>
                        <div className="login-register">
                            <Link className='button' to="/login">Login</Link>
                            <Link className='button' to="/signup">Sign Up</Link>
                        </div>
                    </ul>
            }
        </nav>

    )
}
export default Nav;