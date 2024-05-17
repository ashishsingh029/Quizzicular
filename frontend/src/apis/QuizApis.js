import axios from 'axios'
class QuizApis {
    constructor() {
        this.api = String(import.meta.env.VITE_BACKEND_API)
    }
    createQuiz = async quiz => {
        try {
            let res = await axios.post(`${this.api}/quiz/createquiz`, quiz, {
                headers: {
                    Authorization: `Quizzicular ${getToken()}`
                }
            })
            console.log(res)
            return { status: true, data: res.data }
        } catch (error) {
            console.log(error)
            return { status: false, message: error?.response?.data?.message }
        }
    }
    participateQuiz = async credentials => {
        try {
            let res = await axios.post(`${this.api}/quiz/takequiz`, credentials, {
                headers: {
                    Authorization: `Quizzicular ${getToken()}`
                }
            })
            // console.log(res)
            return { status: true, data: res.data }
        } catch (error) {
            console.log(error.message)
            return { status: false, message: error?.response?.data?.message }
        }
    }
    submitQuiz = async data => {
        try {
            // console.log("Submitting quiz with data:", data)
            const submissionData = { 
                data: {
                    qid: data.qid, selectedOptions: data.selectedOptions
                },
                email: data.email
            }
            let res = await axios.post(`${this.api}/quiz/submitquiz`, submissionData, {
                headers: {
                    Authorization: `Quizzicular ${getToken()}`
                }
            })             
            return { status: true, data: res.data }
        } catch (error) {
            console.log("Error in submitQuiz:", error)
            return { status: false, message: error?.response?.data?.message }
        }
    }
    addResult = async data => {
        let result = {
            quizId: data.qid,
            userEmail: data.email,
            correct: data.correct,
            total: data.total,
            title: data.title
        }
        let resultResponse = await axios.post(`${this.api}/result/addresult`, result, {
            headers: {
                Authorization: `Quizzicular ${getToken()}`
            }
        })
        console.log("Result added successfully:", resultResponse)
    }
}
const quizApis = new QuizApis()
export default quizApis