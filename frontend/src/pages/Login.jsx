import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import userApis from '../apis/UserApis'
const Login = () => {
    const authContext = useAuth()
    const { login } = authContext
    const navigate = useNavigate()
    const [ error, setError ] = useState(false)
    const [ message, setMessage ] = useState('')
    
    let emailRef = useRef(null)
    let passwordRef = useRef(null) 
    const handleSubmit = async event => {
        event.preventDefault()
        let email = emailRef.current.value
        let password = passwordRef.current.value
        const user = {
            email, password
        }
        // console.log(admin)
        let res = await userApis.loginUser(user)
        // console.log(res)
        if(res.status) {
            setMessage('Login Successful')
            emailRef.current.value = ''
            passwordRef.current.value = ''
            setError(false)
            login(res.data.token)
            navigate('/')
        } else {
            setMessage(res.message)
            setError(true)
        }
    }
    return (
        <div className = 'row py-3'>
            <div className = 'col-md-6 mx-auto'>
                <h3>Login</h3>
                <hr />
                <p className = { error ? 'text-danger' : 'text-success' }>{ message }</p>
                <form action = '' onSubmit = { handleSubmit } method = 'post' className = 'p-2'>
                    <div className = 'mb-1'>
                        <label htmlFor = 'email' className = 'form-label mb-1'>
                            Email:
                        </label>
                        <input type = 'text' id = 'email' ref = { emailRef } className = 'form-control' placeholder = 'Enter email' required />
                    </div>
                    <div className = 'mb-1 mt-2'>
                        <label htmlFor = 'password' className = 'form-label mb-1'>
                            Password:
                        </label>
                        <input type = 'password' ref = { passwordRef } id = 'password' className = 'form-control' placeholder = ' Enter Password' required />
                    </div>
                    <div className = 'my-1'>
                        <input type = 'submit' value = 'Login' className = 'mt-2 btn button_submit w-100' />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login