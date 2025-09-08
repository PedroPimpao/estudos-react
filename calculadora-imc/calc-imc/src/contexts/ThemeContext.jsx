import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({children}){
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    const body = document.body

    useEffect(()=>{
        document.body.className = theme
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () =>{
        setTheme((prevTheme)=>{
            const newTheme = prevTheme === 'light' ? 'dark' : 'light'
            body.className = newTheme
            return newTheme
        })
        // localStorage.setItem('theme', theme)
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext}