import React, { useRef, useState } from 'react'
import quizApis from '../apis/QuizApis'
import './Signup.css'
// import Quiz from '../components/Quiz'
// import Question from '../components/Question'
import Option from '../components/Option'
import { useAuth } from '../contexts/AuthContext'
const Participate = () => {
    const qidRef = useRef(null)
    const passwordRef = useRef(null)
    const [ error, setError ] = useState(false)
    const [ message, setMessage ]= useState('')
    const [ quiz, setQuiz ] = useState(null)
    const [ questions, setQuestions ] = useState(null)
    const [ selectedOptions, setSelectedOptions ] = useState(null)
    const [ result, setResult ] = useState(null)
    const labels = ['A', 'B', 'C', 'D']
    const { user } = useAuth()
    const handleParticipate = async event => {
        event.preventDefault()
        const credentials = {
            qid: qidRef.current.value,
            password: passwordRef.current.value
        }            
        try {
            let res = await quizApis.participateQuiz(credentials)
            if(res.status) {
                setQuiz(res.data)
                setQuestions(res.data.questions)
                setError(false)
                const initialSelectedOptions = res.data.questions.map(() => [])
                setSelectedOptions(initialSelectedOptions)
            } else {
                setQuiz(null)
                setError(true)
                // console.log(res)
                setMessage(res.message)
            }
            // console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    const handleOptionClick = (questionIndex, optionIndex) => {
        setSelectedOptions(prevOptions => {
            const updatedOptions = [...prevOptions]
            const questionOptions = [...updatedOptions[questionIndex]] 
            const optionIndexInQuestion = questionOptions.indexOf(optionIndex)
            if (optionIndexInQuestion !== -1) {
                questionOptions.splice(optionIndexInQuestion, 1) 
            } else {
                questionOptions.push(optionIndex) 
            }
            updatedOptions[questionIndex] = questionOptions
            return updatedOptions
        })
    }
    const handleSubmit = async event => {
        event.preventDefault()
        console.log(selectedOptions)
        const qid = quiz._id
        let data = {
            qid,
            title: quiz.title,
            selectedOptions,
            email: user.email
        }   
        // console.log(data)
        // console.log(user)
        let res = await quizApis.submitQuiz(data)
        // console.log("Loggin result from quiz Page", res)
        if(res.status) {
            // marks show
            // console.log(res.data)
            setResult(res.data)
            setSelectedOptions(questions.map(() => []))
            setTimeout(() => {
                setResult(null)
            }, 10000)
        } else {
            // no need
            setResult(null)
        }
        data = {
            ...data, 
            ...res.data
        }
        console.log("Last data", data)
        await quizApis.addResult(data)
        // await quizApis.addRefInAppered(data)
    }
    return (
        <div className = 'row py-3'>
            { quiz ? (
                    <div className = 'col-md-9 ms-5 ps-3'>
                        <div className = {`card my-3 col-6 mx-auto ${result ? '' : 'd-none'}`}>
                            <h5 className = 'card-header fs-4'>  Marks Obtained </h5>
                            <div className = 'card-body align-items center'>
                                <p className = 'my-1'> Correct: <span className = 'text-success fw-bold'>{ result && result.correct } </span></p>
                                <p className = 'my-1'> Incorrect: <span className = 'text-danger fw-bold'>{ result && ( result.total - result.correct ) } </span></p>
                                <p className = 'my-1'> Marks Obtained: <span className = 'text-info-emphasis fw-bold'>{ result && ((result.correct / result.total) * 100).toFixed(2) }% </span></p>
                            </div>
                        </div>
                        <div className = 'card'>
                            <h5 className = 'card-header fs-4'> { quiz.title } 
                                <p className = 'card-text fs-6 fw-normal my-2 blockquote-footer'> { quiz.description }</p>
                            </h5>
                            <div className = 'card-body'>
                                { questions && 
                                    questions.map((question, questionIndex) => (
                                        <div key = { questionIndex } className = 'mt-3'>
                                            <p className = 'fw-medium fs-5 mb-1'>{ questionIndex + 1 }.&nbsp; { question.text } </p>
                                            <div className = 'ps-3'>
                                                { question.options && 
                                                    question.options.map((option, optionIndex) => (
                                                        <div key = { `${questionIndex}-${optionIndex}` } className = {`ps-3 d-flex align-items-center ${selectedOptions[questionIndex].includes(optionIndex) ? 'bg-success-subtle' : ''} background_option`} onClick = { () => handleOptionClick(questionIndex, optionIndex) } >
                                                            <input className = 'form-check-input d-none' type = 'checkbox' checked = { selectedOptions[questionIndex].includes(optionIndex) } />
                                                            <Option key = { `${questionIndex}-${optionIndex}` } text = { option } label = { labels[optionIndex] } index = { optionIndex } />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ))
                                }   
                            </div>
                        </div>
                        <button onClick = { handleSubmit } className = 'button_submit btn btn-block w-100 my-3 fw-medium'> Submit </button>
                    </div>
                ) : (
                    <div className = 'col-md-6 mx-auto'>
                        <h3>Enter Quiz Credentials</h3>
                        <hr />
                        <p className = { error ? 'text-danger' : 'text-success' }>{ message }</p>
                        <form action = '' method = 'post' className = 'p-2'>
                            <div className = 'mb-1'>
                                <label htmlFor = 'qid' className = 'form-label mb-1'>
                                    Quiz Id:
                                </label>
                                <input type = 'text' ref = { qidRef } id = 'qid' className = 'form-control' placeholder = 'Enter Quiz id' required />
                            </div>
                            <div className = 'mb-1 mt-2'>
                                <label htmlFor = 'password' className = 'form-label mb-1'>
                                    Password:
                                </label>
                                <input type = 'password' ref = { passwordRef } id = 'password' className = 'form-control' placeholder = ' Enter Password' required />
                            </div>
                            <div className = 'my-1'>
                                <input type = 'submit' value = 'Enter Quiz' className = 'mt-2 btn button_submit w-100' onClick = { handleParticipate } />
                            </div>
                        </form>
                    </div>       
                )
            }
        </div>
    )
}
export default Participate