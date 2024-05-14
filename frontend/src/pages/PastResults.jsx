import React from 'react'
import './PastResults.css'
const PastResults = () => {
    const dummyData = [
        {
            quizId: Math.floor(Math.random() * 1000),
            userEmail: "user1@example.com",
            correct: 7,
            total: 10
        },
        {
            quizId: Math.floor(Math.random() * 1000),
            userEmail: "user2@example.com",
            correct: 8,
            total: 10
        },
        {
            quizId: Math.floor(Math.random() * 1000),
            userEmail: "user3@example.com",
            correct: 6,
            total: 10
        },
        {
            quizId: Math.floor(Math.random() * 1000),
            userEmail: "user4@example.com",
            correct: 9,
            total: 10
        },
        {
            quizId: Math.floor(Math.random() * 1000),
            userEmail: "user5@example.com",
            correct: 3,
            total: 11
        }
    ]
    return (
        <div className = 'row py-3'>
            <div className = 'col-9 ms-5 ps-3'>
                <h4>Past Given Quizzes</h4>
                <hr />
                { dummyData && 
                    dummyData.map(data => (
                        <div className = 'card my-3'>
                            <h5 className = 'card-header fs-4'>  Quiz Title
                                <p className = 'card-text fs-6 fw-normal my-2 blockquote-footer'> Quiz Description  </p>
                            </h5>
                            <div className = 'card-body align-items center'>
                                <p className = 'my-1'> Correct: <span className = 'text-success fw-bold'>{ data.correct } </span></p>
                                <p className = 'my-1'> Incorrect: <span className = 'text-danger fw-bold'>{ data.total - data.correct } </span></p>
                                <p className = 'my-1'> Marks Obtained: <span className = 'text-info-emphasis fw-bold'>{ ((data.correct / data.total) * 100).toFixed(2) }% </span></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default PastResults