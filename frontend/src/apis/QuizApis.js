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
    // registerUser = async user => {
    //     try {
    //         const res = await axios.post(`${this.api}/user/signup`, user)
    //         // console.log('Registering user' + res.data)
    //         return { status: true, data: res.data }
    //     } catch (error) {
    //         console.log(error)
    //         return { status: false, message: error?.response?.data?.message }
    //     }
    // }
    // loginUser = async user => {
    //     try {
    //         const res = await axios.post(`${this.api}/user/login`, user)
    //         // console.log(res.data)
    //         return { status: true, data: res.data }
    //     } catch (error) {
    //         console.log(error)
    //         return { status: false, message: error?.response?.data?.message }
    //     }
    // }
}
const quizApis = new QuizApis()
export default quizApis