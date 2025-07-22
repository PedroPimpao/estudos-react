import { useState } from "react"
import InputBox from "../components/InputBox.jsx"
import { Eye, EyeOff } from "lucide-react"
import "../styles/App.css"
import { useNavigate } from "react-router-dom"

export default function Login(){
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [isVisible, setIsVisible] = useState(false)

    const navigate = useNavigate()

	const captureInputs = () =>{
		console.log(name)
		console.log(email)
		console.log(password)

        return {
            name,
            email,
            password
        }
	}
    
    const captureInputsAndGoToHome = () =>{
        const userData = captureInputs()
        goToHome(userData)
    }

    const goToHome = (userData) =>{
        navigate("/home", {state: { userData }})
    }
    
	const toggleEyeVisibility=()=>{
		setIsVisible(prev => !prev)
	}

	return (
		<div className="main">
			<header className="header">
				<h1>Cadastre - se</h1>
			</header>
			<div className="container">
				<InputBox
					value={name}
					label="Nome: "
					placeholder="Nome..." 
					id="input-nome" 
					className="input-field"
					type="text" 
					onChange={(event) => setName(event.target.value)}
				/>

				<InputBox
					value={email}
					label="Email: "
					placeholder="Email..." 
					id="input-email" 
					className="input-field"
					type="text" 
					onChange={(event) => setEmail(event.target.value)}
				/>

				<InputBox
					value={password}
					label="Senha: "
					placeholder="Senha..." 
					id="input-senha" 
					className="input-field"
					type={isVisible ? "text" : "password"}
					onChange={(event) => setPassword(event.target.value)}
					eye={isVisible ? <EyeOff/> : <Eye/>}
					onClick={toggleEyeVisibility}
				/>

				<button className="submitButton" onClick={captureInputsAndGoToHome}>Cadastrar</button>
			</div>
		</div>
	)
}


