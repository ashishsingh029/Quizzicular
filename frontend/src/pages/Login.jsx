import React from 'react'
const Login = () => {
    return (
        <div className = 'row py-3'>
            <div className = 'col-md-6 mx-auto'>
                <h3>Login</h3>
                <hr />
                {/* <p className = { error ? 'text-danger' : 'text-success' }>{ message }</p> */}
                <form action = '' method = 'post' className = 'p-2'>
                    <div className = 'mb-1'>
                        <label htmlFor = 'email' className = 'form-label mb-1'>
                            Email:
                        </label>
                        <input type = 'text' id = 'email' className = 'form-control' placeholder = 'Enter email' required />
                    </div>
                    <div className = 'mb-1 mt-2'>
                        <label htmlFor = 'password' className = 'form-label mb-1'>
                            Password:
                        </label>
                        <input type = 'password' id = 'password' className = 'form-control' placeholder = ' Enter Password' required />
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