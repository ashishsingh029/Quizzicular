import { decodeToken } from 'react-jwt'
import { useState, useEffect, useContext, createContext } from 'react'
import { getToken, getTokenName } from '../utils/helpers'
export const AuthContext = createContext(null)
export const AuthProvider = props => {
    const [ token, setToken ] = useState(null)
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)
    const [ user, setUser ] =  useState(null)
    useEffect(() => {
        const jwttoken = getToken()
        if(jwttoken){
            setToken(jwttoken)
            setIsLoggedIn(true)
            const decodedData = decodeToken(jwttoken)
            // console.log(decodedData)
            setUser(decodedData.user)
        }
    }, [token])
    const login = token => {
        localStorage.setItem(getTokenName(), token)
        setToken(token)
        setUser(user)
        setIsLoggedIn(true)
    }
    const logout = () => { 
        console.log('Logout called')
        // console.log('Token before removing is -> ', localStorage.getItem('pptoken'))
        setToken(null)
        setUser(null)
        setIsLoggedIn(false)
        localStorage.removeItem(getTokenName())
        // console.log('Token after removing is -> ', localStorage.getItem('pptoken'))
    }
    return(
        <AuthContext.Provider value = {{ token, isLoggedIn, login, logout, user }}>
            { props.children }
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    const authContext = useContext(AuthContext)
    return authContext
}