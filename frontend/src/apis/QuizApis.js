import axios from 'axios'
class QuizApis {
    constructor() {
        this.api = String(import.meta.env.VITE_BACKEND_API)
    }
    createQuiz = async quiz => {
        try {
            let res = await axios.post(`${this.api}/quiz/createquiz`, quiz)
            console.log(res)
            return { status: true, data: res.data }
        } catch (error) {
            console.log(error)
            return { status: false, message: error?.response?.data?.message }
        }
    }
    participateQuiz = async credentials => {
        try {
            let res = await axios.post(`${this.api}/quiz/takequiz`, credentials)
            // console.log(res)
            return { status: true, data: res.data }
        } catch (error) {
            console.log(error.message)
            return { status: false, message: error?.response?.data?.message }
        }
    }
    submitQuiz = async data => {
        try {
            // console.log(data)
            const submissionData = { qid:data.qid, selectedOptions: data.selectedOptions }
            let res = await axios.post(`${this.api}/quiz/submitquiz`, submissionData) 
            await axios.put(`${this.api}/result/addref`, { quizId: data.qid, userEmail: data.email })
            let result = {
                quizId: data.qid,
                userEmail: data.email,
                correct: res.data.correct,
                total: res.data.total
            }
            console.log(result)
            let res1 = await axios.post(`${this.api}/result/addresult`, result)
            return { status: true, data: res1.data }
        } catch (error) {
            console.log(error.message)
            return { status: false, message: error?.response?.data?.message }
        }
    }
}
const quizApis = new QuizApis()
export default quizApis