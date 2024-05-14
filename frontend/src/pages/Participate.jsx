import React from 'react'
import './Signup.css'
const Participate = () => {
    return (
        <div className = 'row py-3'>
            <div className = 'col-md-6 mx-auto'>
                <h3>Enter Quiz Credentials</h3>
                <hr />
                {/* <p className = { error ? 'text-danger' : 'text-success' }>{ message }</p> */}
                <form action = '' method = 'post' className = 'p-2'>
                    <div className = 'mb-1'>
                        <label htmlFor = 'qid' className = 'form-label mb-1'>
                            Quiz Id:
                        </label>
                        <input type = 'text' id = 'qid' className = 'form-control' placeholder = 'Enter Quiz id' required />
                    </div>
                    <div className = 'mb-1 mt-2'>
                        <label htmlFor = 'password' className = 'form-label mb-1'>
                            Password:
                        </label>
                        <input type = 'password' id = 'password' className = 'form-control' placeholder = ' Enter Password' required />
                    </div>
                    <div className = 'my-1'>
                        <input type = 'submit' value = 'Enter Quiz' className = 'mt-2 btn button_submit w-100' />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Participate