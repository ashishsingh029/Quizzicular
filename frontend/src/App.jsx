import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Layout from './Layouts/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Quizpage from './pages/Quizpage'
const App = () => {
    const browserRoutes = createBrowserRouter([{
        path: '/',
        element: <Layout />,
        children: [
            { path: '/login', element: <Login /> },
            { path: '/signup', element: <Signup /> },
            { path: '/playquiz', element: <Quizpage /> },
            { path: '/*', element: <Login /> }
        ]
    }])
    return <RouterProvider router = { browserRoutes } />
}
export default App