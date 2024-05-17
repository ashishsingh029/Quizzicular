import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { getTokenName } from '../utils/helpers'
const ProtectedRoute = () => {
    const token = localStorage.getItem(getTokenName())
    return (
        token ? <Outlet /> : <Navigate to = '/login'/>
    )
}
export default ProtectedRoute