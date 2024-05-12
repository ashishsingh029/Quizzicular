import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <div className = 'p-0 m-0'>
            <Navbar />
            <div className = 'container-fluid p-0 m-0'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
export default Layout