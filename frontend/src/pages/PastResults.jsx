import React, { useEffect, useState } from 'react'
import './PastResults.css'
import { useAuth } from '../contexts/AuthContext'
import resultApis from '../apis/ResultApis'
const PastResults = () => {
    const [ results, setResults ] = useState(null)
    const [ errM, setErrM ] = useState('')
    const { user } = useAuth()
    const getQuizzesByUser = async email => {
        let res = await resultApis.getAppearedQuizzes(email)
        if(res.status) {
            setResults(res.data.quizzes)
            setErrM('')
        } else {
            setErrM(res.message)
        }
    }
    useEffect(() => {
        if (user?.email) {
            getQuizzesByUser(user.email);
        }
    }, [user?.email]); 
    return (
        <div className = 'row py-3'>
            <div className = 'col-9 ms-5 ps-3'>
                <h4>Past Given Quizzes</h4>
                <hr />
                { results ? (
                        results.map(result => (
                            <div key = { result._id } className = 'card my-3'>
                                <h5 className = 'card-header fs-4'>  { result.title } </h5>
                                <div className = 'card-body align-items center'>
                                    <p className = 'my-1'> Correct: <span className = 'text-success fw-bold'>{ result.correct } </span></p>
                                    <p className = 'my-1'> Incorrect: <span className = 'text-danger fw-bold'>{ result.total - result.correct } </span></p>
                                    <p className = 'my-1'> Marks Obtained: <span className = 'text-info-emphasis fw-bold'>{ ((result.correct / result.total) * 100).toFixed(2) }% </span></p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className = 'my-1 bg-secondary-subtle px-5 py-2 fs-5 fw-medium'> { errM }</p>
                    )
                }
            </div>
        </div>
    )
}
export default PastResults