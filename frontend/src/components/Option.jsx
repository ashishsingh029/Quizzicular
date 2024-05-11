import React from 'react'
import './Option.css'
const Option = ({ text }) => {
    // console.log(option)
    return (
        <div className = 'd-flex align-items-center background_option py-2 px-2'>
            <p>{ text }</p>
        </div>
    )
}
export default Option