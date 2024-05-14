import React, { useState, useRef } from 'react'
import './Signup.css'
import userApis from '../apis/UserApis'
const Signup = () => {
    const emailRef = useRef(null)
    const nameRef = useRef(null)
    const passwordRef = useRef(null)
    const [ message, setMessage ] = useState('')
    const [ error, setError] = useState(false)
    const handleSubmit = async event => {
        event.preventDefault()
        let name = nameRef.current.value
        let email = emailRef.current.value 
        let password = passwordRef.current.value
        const newUser = {
            email, name, password
        }
        // console.log(newAdmin)
        let res = await userApis.registerUser(newUser)
        console.log(res)
        if(res.status) {
            setMessage('Registration Successful, You can Login Now')
            nameRef.current.value = ''
            emailRef.current.value = ''
            passwordRef.current.value = ''
            setError(false)
        } else {
            setMessage(res.message)
            setError(true)
        }
    }
    return (
        <div className = 'row py-3'>
            <div className = 'col-md-6 mx-auto'>
                <h3>Signup</h3>
                <hr />
                <p className = { error ? 'text-danger' : 'text-success' }>{ message }</p>
                <form action = '' onSubmit = { handleSubmit } method = 'post' className = 'p-2'>
                    <div className = 'mb-1'>
                        <label htmlFor = 'name' className = 'form-label mb-1'>
                            Name:
                        </label>
                        <input type = 'text' id = 'name' ref = { nameRef } className = 'form-control' placeholder = 'Enter Name' required />
                    </div>
                    <div className = 'mb-1'>
                        <label htmlFor = 'email' className = 'form-label mb-1'>
                            Email:
                        </label>
                        <input type = 'text' id = 'email' ref = { emailRef }  className = 'form-control' placeholder = 'Enter email' required />
                    </div>
                    <div className = 'mb-1 mt-2'>
                        <label htmlFor = 'password' className = 'form-label mb-1'>
                            Password:
                        </label>
                        <input type = 'password' id = 'password' ref = { passwordRef }  className = 'form-control' placeholder = ' Enter Password' required />
                    </div>
                    {/* <div className = 'mb-1 mt-2'>
                        <label htmlFor = 'confirm_password' className = 'form-label mb-1'>
                            Confirm Password:
                        </label>
                        <input type = 'password' id = 'confirm_password' className = 'form-control' placeholder = ' Enter Password' required />
                    </div> */}
                    <div className = 'my-1'>
                        <input type = 'submit' value = 'Signup' className = 'mt-2 btn button_submit w-100' />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Signup