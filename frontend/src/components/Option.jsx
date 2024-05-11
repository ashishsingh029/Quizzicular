import React from 'react'
import './Option.css'
import OptionLabel from './OptionLabel'
const Option = ({ text, label, qindex, index, prevSelectedOptions, setSelectedOptions }) => {
    const isSelected = prevSelectedOptions[qindex].has(index);
    const handleClick = () => {
        setSelectedOptions(prevSelectedOptions => {
            const updatedSelectedOptions = [...prevSelectedOptions]
            const questionOptions = updatedSelectedOptions[qindex]
            if (isSelected) {
                questionOptions.delete(index)
            } else {
                questionOptions.add(index)
            }
            return updatedSelectedOptions
        })
    }
    return (
        <div className={`background_option py-2 px-2 d-flex align-items-center ${isSelected ? 'bg-success-subtle' : ''}`}>
            <OptionLabel label={label} />
            <p className="m-0" onClick={handleClick}>{text}</p>
        </div>
    )
}
export default Option