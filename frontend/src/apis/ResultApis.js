import axios from 'axios'
import { getToken } from '../utils/helpers'
class ResultApis {
    constructor() {
        this.api = String(import.meta.env.VITE_BACKEND_API)
    }
    getAppearedQuizzes = async email => {
        try {
            let res = await axios.get(`${this.api}/result/getappeared/${email}`, {
                headers: {
                    Authorization: `Quizzicular ${getToken()}`
                }
            })
            return { status: true, data: res.data }
        } catch (error) {
            console.log(error.message)
            return { status: false, message: error?.response?.data?.message }
        }
    }
}
const resultApis = new ResultApis()
export default resultApis