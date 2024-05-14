import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
    const Navbar = () => {
    const authContext = useAuth()
    const { isLoggedIn, logout, user } = authContext
    const logoutUser = () => {
      logout()
    }
    return (
        <div className = 'navbar navbar_bg'>
            <div className = 'container-fluid'>
                <Link className = 'navbar-brand text-light fw-bold fs-5' to = '/' >
                    <img src = '/vite.svg' alt = 'Logo' width = '30' height = '24' className = 'd-inline-block align-text-top' /> Quizzicular
                </Link>
                <div className = 'ms-auto'>
                    { isLoggedIn ? (
                            <div className = 'd-flex align-items-center text-light fw-medium'> 
                                <div className = 'dropdown'>
                                    <button className = 'btn signup_button text-light dropdown-toggle mx-1' type = 'button' data-bs-toggle = 'dropdown' aria-expanded = 'false'>
                                        {user.name}
                                    </button>
                                    <ul className = 'dropdown-menu'>
                                        <li> <Link className = 'dropdown-item' to = ''> Created Quizzes </Link> </li>
                                        <li> <Link className = 'dropdown-item' to = ''>Appeared Quizzes </Link> </li>
                                    </ul>
                                </div>
                                <Link onClick = { logoutUser } to = '' className = 'btn mx-2 logout_button text-light fw-medium'>Logout</Link> 
                            </div>
                        ) : (
                            <div>
                                <Link to = '/signup' className = 'btn signup_button mx-2 text-light fw-medium'>Signup</Link>
                                <Link to = '/login' className = 'btn login_button text-light fw-medium'>Login</Link> 
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Navbar