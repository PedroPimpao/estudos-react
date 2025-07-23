import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import './Login.css'
import Switch from "../../components/Switch"

export function Login(){
    const { toggleTheme, theme } = useContext(ThemeContext)

    return (
        <>
            <h1>Olá, Mundo</h1>
			<Switch  
                id="themeToggle" 
                onClick={toggleTheme}
                checked={theme === 'dark'}
            />
        </>
    )
}