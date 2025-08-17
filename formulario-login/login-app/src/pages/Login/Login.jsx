import './Login.css'

import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import { ThemeContext } from "../../contexts/ThemeContext"
import { UserContext } from "../../contexts/UserContext"

import Switch from "../../components/Switch"
import InputBox from "../../components/InputBox"
import Button from '../../components/Button'

import { Eye, EyeOff } from "lucide-react"

export function Login(){
    const { toggleTheme, theme } = useContext(ThemeContext)
    const [isVisible, setVisibility] = useState(false)
    // const { userData, setUserData } = useContext(UserContext)
    const navigate = useNavigate()

    const sign=(evt)=>{
        evt.preventDefault()
        console.log('Login realizado com sucesso!')
        navigate('/signedusers')
    }

    const toSignUp=()=>{
        navigate('/signup')
    }

    const toggleVisibility=()=>{
        setVisibility(prev => !prev)
    }

    return (
        <>
            <div className="container login-container">
                <h2>Login</h2>

                <div className="form"> 

                    <InputBox 
                    type="text" 
                    placeholder="Usuário ou Email"
                    id={"usernameInput"}
                    label={"Usuário / Email"}
                    // value={userData.name}
                    // onChange={handleNameChange}
                    />

                    <InputBox 
                    type={isVisible? "text" : "password"} 
                    placeholder="Senha"
                    id={"passwordInput"}
                    label={"Senha"} 
                    eye={isVisible? <EyeOff/> : <Eye/>}
                    onClickEye={toggleVisibility}
                    // value={userData.password}
                    // onChange={handlePasswordChange}
                    />

                    <Button 
                        type="submit"
                        onClick={sign}
                        label="Entrar"
                        className={"button"}
                    />

                    <Button 
                        type="button"
                        onClick={toSignUp}
                        label="Cadastrar-se"
                        className={"button transparent"}
                    />

                </div>

                <Switch  
                    id="themeToggle" 
                    onChange={toggleTheme}
                    checked={theme === 'dark'}
                />
            </div>
        </>
    )
}