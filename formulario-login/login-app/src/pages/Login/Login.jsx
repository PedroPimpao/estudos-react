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
    const { userData, setUserData } = useContext(UserContext)
    const navigate = useNavigate()

    const handleNameChange = (event) =>{
        const newName = event.target.value
        setUserData((previousData)=>{
            const updated = { ...previousData, name: newName}
            return updated
        })
    }

    const handleEmailChange = (event) =>{
        const newEmail = event.target.value
        setUserData((previousData)=>{
            const updated = { ...previousData, email: newEmail}
            return updated
        })
    }

    const handlePasswordChange = (event) =>{
        const newPassword = event.target.value
        setUserData((previousData)=>{
            const updated = { ...previousData, password: newPassword}
            return updated
        })
    }

    const sign=(evt)=>{
        evt.preventDefault()
        console.log('Login realizado com sucesso!')
        navigate('/signedusers')
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
                    placeholder="Usuário"
                    id={"usernameInput"}
                    label={"Usuário"}
                    value={userData.name}
                    onChange={handleNameChange}
                    />

                    <InputBox 
                    type="text" 
                    placeholder="Email"
                    id={"emailInput"}
                    label={"Email"} 
                    value={userData.email}
                    onChange={handleEmailChange}
                    />

                    <InputBox 
                    type={isVisible? "text" : "password"} 
                    placeholder="Senha"
                    id={"passwordInput"}
                    label={"Senha"} 
                    eye={isVisible? <EyeOff/> : <Eye/>}
                    onClickEye={toggleVisibility}
                    value={userData.password}
                    onChange={handlePasswordChange}
                    />

                    <Button 
                    type="submit"
                    onClick={sign}
                    label="Entrar"
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