import React from 'react'
import Option from './Option'
const Question = ({ number, text, options, qindex, prevSelectedOptions, setSelectedOptions }) => {
    // console.log(options)
    const labels = ['A', 'B', 'C', 'D']
    return (
        <div className = 'mt-3'>
            <p className = 'fw-medium fs-5 mb-1'>{ number }.&nbsp; { text } </p>
            <div className = 'ps-5'>
                { options && 
                    options.map((option, index) => (
                        <Option key = {index} text = { option } label = { labels[index] } prevSelectedOptions = { prevSelectedOptions } setSelectedOptions = { setSelectedOptions } qindex = { qindex } index = { index } />
                    ))
                }
            </div>
        </div>
    )
}
export default Question