import React from 'react'
import './Option.css'
import OptionLabel from './OptionLabel'
const Option = ({ text, label }) => {
    return (
        <div className = 'background_option py-2 px-2 d-flex align-items-center w-100'>
            <OptionLabel label = { label } />
            <p className = 'm-0 w-100'>{ text }</p>
        </div>
    )
}
export default Option