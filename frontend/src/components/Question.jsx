import React from 'react'
import Option from './Option'
const Question = ({ number, text, options }) => {
    // console.log(options)
    const labels = ['A', 'B', 'C', 'D']
    return (
        <div>
            <p>{ number }.&nbsp; { text } </p>
            <div className = 'ps-5'>
                { options && 
                    options.map((option, index) => (
                        <Option key = { index } text = { option } />
                    ))
                }
            </div>
        </div>
    )
}
export default Question