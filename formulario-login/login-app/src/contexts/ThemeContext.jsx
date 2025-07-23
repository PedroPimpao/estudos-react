import { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(()=> localStorage.getItem('theme') || 'light')
    const body = document.querySelector('body')

    useEffect(()=>{
        document.body.className = theme
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme((prevTheme) =>{
            // const prevTheme = localStorage.getItem('theme')
            const newTheme = prevTheme === 'light'? 'dark' : 'light'
            body.className = newTheme
            return newTheme
        })
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }