import React, { useState } from 'react'
import Question from './Question'
const Quiz = props => {
    // console.log(props.quiz)
    // console.log(questions)
    const questions = props.quiz.questions
    const [ selectedOptions, setSelectedOptions ] = useState(Array.from({ length: questions.length }, () => new Set()))
    const handleSubmit = () => {
        console.log(selectedOptions)
    }
    // console.log('Rendere')
    return (
        <div>
            <div className = 'card'>
                <h5 className = 'card-header fs-4'> { props.quiz.title } 
                    <p className = 'card-text fs-6 fw-normal my-2 blockquote-footer'> { props.quiz.description }</p>
                </h5>
                <div className = 'card-body'>
                    {/* <Question /> */}
                    { questions && 
                        questions.map((question, index) => (
                            <Question key = { question.id } number = { index + 1 } text = { question.text } options = { question.options } qindex = { index } prevSelectedOptions = { selectedOptions } setSelectedOptions = { setSelectedOptions } />
                        ))
                    }   
                </div>
            </div>
            <button onClick = { handleSubmit } className = 'button_submit btn btn-block w-100 my-3 fw-medium'> Submit </button>
        </div>
    )
}
export default Quiz