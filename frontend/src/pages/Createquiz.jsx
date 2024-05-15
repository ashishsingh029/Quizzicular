import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import quizApis from '../apis/QuizApis'
const Createquiz = () => {
    const [ questions, setQuestions ] = useState([{ text: '', options: [''], correctOptions: [] }])
    const [ quizTitle, setQuizTitle] = useState('')
    const [ quizPassword, setQuizPassword ] = useState('')
    const [ quizDescription, setQuizDescription ] = useState('')
    const [ createResponse, setCreateResponse ] = useState({
        activated: false,
        error: false,
        message: ''
    })
    const { user } = useAuth()
    const addQuestion = () => {
        setQuestions([...questions, { text: '', options: [''], correctOptions: [] }])
    }
    const addOption = index => {
        const updatedQuestions = [...questions]
        updatedQuestions[index].options.push('')
        setQuestions(updatedQuestions)
    }
    const handleQuestionChange = (index, text) => {
        const updatedQuestions = [...questions]
        updatedQuestions[index].text = text
        setQuestions(updatedQuestions)
    }
    const handleOptionChange = (questionIndex, optionIndex, text) => {
        const updatedQuestions = [...questions]
        updatedQuestions[questionIndex].options[optionIndex] = text
        setQuestions(updatedQuestions)
    }
    const handleToggleCorrectOption = (questionIndex, optionIndex) => {
        const updatedQuestions = [...questions]
        const correctOptions = updatedQuestions[questionIndex].correctOptions
        const optionIndexInCorrectOptions = correctOptions.indexOf(optionIndex)
        if (optionIndexInCorrectOptions === -1) {
            updatedQuestions[questionIndex].correctOptions = [...correctOptions, optionIndex]
        } else {
            updatedQuestions[questionIndex].correctOptions = correctOptions.filter((optIndex) => optIndex !== optionIndex)
        }
        setQuestions(updatedQuestions)
    }
    const handleCreateQuiz = async event => {
        event.preventDefault()
        console.log(user.email)
        console.log(user.name)
        console.log('Quiz Title:', quizTitle)
        console.log('Quiz Password:', quizPassword)
        console.log('Quiz Description:', quizDescription)
        console.log('Questions ', questions)
        // questions.forEach((question, index) => {
        //     console.log(`Question ${index + 1}:`, question.text)
        //     console.log('Options:', question.options)
        //     console.log('Correct Options:', question.correctOptions)
        // })
        const quiz = {
            title: quizTitle, 
            description: quizDescription,
            creatorName: user.name,
            password: quizPassword,
            questions
        }
        try {
            let res = await quizApis.createQuiz(quiz)
            setCreateResponse({
                error: false,
                message: {
                    id: res.data.quizId.toString(),
                    password: res.data.password
                },
                activated: true
            })
            // setQuestions([{ text: '', options: [''], correctOptions: [] }])
            // console.log(res)
        } catch (error) {
            setCreateResponse({
                error: true,
                message: null,
                activated: true
            })
            console.log(error)
        }
    }

    return (
        <div className = 'row py-3'>
            <form action = '' onSubmit = { handleCreateQuiz }>
                <div className = 'col-md-9 ms-5 ps-3'>
                    <h3>Create Quiz</h3>
                    <hr />
                    <div className = ' card col-6 p-3 mb-5'>
                        {   createResponse.activated && 
                            createResponse.error ? (
                                <p className = 'text-danger'>Couldn't create Quiz</p>
                            ) : (
                                <>
                                    <p className = 'fw-medium mb-2'>Quiz Credentials are</p>
                                    <p className = 'text-success mb-1'>
                                        Quiz Id: { createResponse.message.quizId }
                                    </p>
                                    <p className = 'text-success mb-1'>
                                        Password: { createResponse.message.password }
                                    </p>
                                </>
                            )
                        }
                    </div>
                    <input type = 'text' className = 'form-control' placeholder = 'Enter Quiz Title' value = { quizTitle } onChange = { e => setQuizTitle(e.target.value) } required/>
                    <input type='password' className='form-control my-3' placeholder='Enter Quiz Password' value = { quizPassword } onChange={(e) => setQuizPassword(e.target.value) } required/>
                    <textarea type = 'text' className = 'form-control my-3' placeholder = 'Enter Quiz Description' value = { quizDescription } onChange = { e => setQuizDescription(e.target.value) } required> </textarea>
                    <div className='mt-3 py-2 px-5'>
                        <h5>Add Questions And Options</h5>
                        <hr />
                        { questions.map((question, index) => (
                            <div key = { index }>
                                <input type = 'text' value = { question.text } onChange = { e => handleQuestionChange(index, e.target.value) } placeholder = {`Enter Question ${index + 1}`} className = 'form-control mt-3 mb-1' required/>
                                { question.options.map((option, optionIndex) => (
                                    <div key = { optionIndex } className = 'd-flex align-items-center'>
                                        <input type = 'text' value = { option } onChange = { e => handleOptionChange(index, optionIndex, e.target.value) } placeholder = {`Enter Option ${optionIndex + 1}`} className = 'form-control my-1 ms-4' required/>
                                        <input type = 'checkbox' checked = { question.correctOptions.includes(optionIndex) } onChange = { () => handleToggleCorrectOption(index, optionIndex) } className = 'form-check-input ms-2' />
                                        <label className = 'form-check-label ms-1'>Correct?</label>
                                    </div>
                                ))}
                                <button onClick = { () => addOption(index) } className = 'btn btn-secondary mt-2'>Add Option</button>
                            </div>
                        ))}
                        <button onClick = { addQuestion } className = 'btn btn-success mt-3'>Add Question</button>
                    </div>
                </div>
                <div className = 'col-md-9 ms-5 ps-4'>
                    <div className = 'd-flex flex-column align-items-center'>
                        <button type = 'submit' className = 'btn button_submit my-2 w-100'>Create Quiz</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Createquiz