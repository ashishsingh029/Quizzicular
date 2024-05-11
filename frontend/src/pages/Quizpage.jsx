import React from 'react'
import Quiz from '../components/Quiz'
const Quizpage = () => {
    const quiz = {
            id: 1001,
            title: "Test Wala Quiz heading",
            description: "Test Wala Quiz is an engaging and interactive quiz platform designed to challenge and entertain users. With a diverse range of topics and customizable quizzes, it offers an immersive learning experience for enthusiasts of all ages and interests",
            creator: "test@email.com",
            password: "secret",
            questions: [
                {
                    id: 1,
                    text: "Question 1",
                    options: [ 'Option1A', 'Option1B', 'Option1C', 'Option1D' ],
                    correctOptions: [ 0, 2 ]
                },
                {
                    id: 2,
                    text: "Question 2",
                    options: [ 'Option2A', 'Option2B', 'Option2C', 'Option2D' ],
                    correctOptions: [ 1, 3 ]
                },
                {
                    id: 3,
                    text: "Question 3",
                    options: [ 'Option3A', 'Option3B', 'Option3C', 'Option3D' ],
                    correctOptions: [ 3 ]
                },
                {
                    id: 4,
                    text: "Question 4",
                    options: [ 'Option4A', 'Option4B', 'Option4C', 'Option4D' ],
                    correctOptions: [ 0 ]
                },
                {
                    id: 5,
                    text: "Question 5",
                    options: [ 'Option5A', 'Option5B', 'Option5C', 'Option5D' ],
                    correctOptions: [ 0, 2 ]
                }
            ] 
    }
    return (
        <div className = 'row py-3'>
            <div className = 'col-md-9 ms-5 ps-3'>
                <Quiz quiz = { quiz } />
            </div>
        </div>
    )
}
export default Quizpage