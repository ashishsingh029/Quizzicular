import React, { useState } from "react";
const Test = () => {
    const [ selectedOptions, setSelectedOptions ] = useState(Array(5).fill([]));
    const handleOptionChange = (questionIndex, optionIndex) => {
        setSelectedOptions((prevSelectedOptions) => {
            const updatedOptions = [...prevSelectedOptions];
            const questionOptions = [...updatedOptions[questionIndex]];
            // Toggle the selection of the option
            if (questionOptions.includes(optionIndex)) {
                // If the option is already selected, remove it
                updatedOptions[questionIndex] = questionOptions.filter(
                    (index) => index !== optionIndex
                );
            } else {
                // If the option is not selected, add it
                updatedOptions[questionIndex] = [...questionOptions, optionIndex];
            }
            return updatedOptions;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(selectedOptions);
    };

    return (
        <form onSubmit={handleSubmit}>
            {[0, 1, 2, 3, 4].map((questionIndex) => (
                <div key={questionIndex} className="border border-primary p-2 mb-2">
                    <p>Question {questionIndex + 1}</p>
                    {[0, 1, 2, 3].map((optionIndex) => (
                        <div key={optionIndex} className="form-check">
                            <input
                                className="form-check-input me-2"
                                type="checkbox"
                                value={optionIndex}
                                checked={selectedOptions[questionIndex].includes(optionIndex)}
                                onChange={() => handleOptionChange(questionIndex, optionIndex)}
                                id={`question${questionIndex}-option${optionIndex}`}
                            />
                            <label htmlFor={`question${questionIndex}-option${optionIndex}`}>
                                Option {optionIndex + 1}
                            </label>
                        </div>
                    ))}
                </div>
            ))}
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};
export default Test;