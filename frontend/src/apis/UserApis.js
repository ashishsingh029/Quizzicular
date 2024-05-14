import axios from 'axios'
class UserApis {
    constructor() {
        this.api = String(import.meta.env.VITE_BACKEND_API)
    }
    registerUser = async user => {
        try {
            const res = await axios.post(`${this.api}/user/signup`, user)
            // console.log('Registering user' + res.data)
            return { status: true, data: res.data }
        } catch (error) {
            console.log(error)
            return { status: false, message: error?.response?.data?.message }
        }
    }
    loginUser = async user => {
        try {
            const res = await axios.post(`${this.api}/user/login`, user)
            // console.log(res.data)
            return { status: true, data: res.data }
        } catch (error) {
            console.log(error)
            return { status: false, message: error?.response?.data?.message }
        }
    }
}
const userApis = new UserApis()
export default userApis