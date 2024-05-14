const getTokenName = () => 'token108'
const getToken = () => {
    return localStorage.getItem(getTokenName())
}
export { getTokenName, getToken }