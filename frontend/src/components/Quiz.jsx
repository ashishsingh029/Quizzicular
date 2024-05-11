import React from 'react'
import Question from './Question'
const Quiz = props => {
    // console.log(props.quiz)
    // console.log(questions)
    const questions = props.quiz.questions
    return (
        <div className = 'card'>
            <h5 className = 'card-header'> { props.quiz.title } 
                <p className = 'card-text fs-6 fw-normal my-2 blockquote-footer'> { props.quiz.description }</p>
            </h5>
            <div className = 'card-body'>
                {/* <Question /> */}
                { questions && 
                    questions.map((question, index) => (
                        <Question key = { question.id } number = { index + 1 } text = { question.text } options = { question.options } />
                    ))
                }   
            </div>
        </div>
    )
}
export default Quiz
