const KEY = 'token'

export const getToken = () => localStorage.getItem(KEY)
export const setToken = (token) => localStorage.setItem(KEY, token)
export const delToken = () => localStorage.removeItem(KEY)