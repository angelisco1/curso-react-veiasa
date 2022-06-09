const KEY = 'lang'

export const getLang = () => localStorage.getItem(KEY)
export const setLang = (lang) => localStorage.setItem(KEY, lang)