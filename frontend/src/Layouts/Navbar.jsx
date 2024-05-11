import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
    const Navbar = () => {
    return (
        <div className = 'navbar navbar_bg'>
            <div className = 'container-fluid'>
                <Link className = 'navbar-brand text-light fw-bold fs-5' to = '/' >
                    <img src = '/vite.svg' alt = 'Logo' width = '30' height = '24' className = 'd-inline-block align-text-top' /> Quizzicular
                </Link>
                <div className = 'ms-auto'>
                    <Link to = '/signup' className = 'btn signup_button mx-2 text-light fw-medium'>Signup</Link>
                    <Link to = '/login' className = 'btn login_button text-light fw-medium'>Login</Link> 
                    <Link to = '' className = 'btn mx-2 logout_button text-light fw-medium'>Logout</Link> 
                </div>
            </div>
        </div>
    )
}
export default Navbar