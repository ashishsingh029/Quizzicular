import React from 'react'
const OptionLabel = ({ label }) => {
    // console.log(label)
    return (
        <div className = 'mx-3 text-light bg-dark-subtle px-3 py-2 fs-6 fw-medium'> 
            { label }    
        </div>
    )
}
export default OptionLabel
