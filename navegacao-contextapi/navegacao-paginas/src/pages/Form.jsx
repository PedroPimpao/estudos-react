import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { useNavigate } from "react-router-dom"

export function Form(){
    const { userData, setUserData } = useContext(UserContext)

    const navigate = useNavigate()

    const handleNameChange = (event) =>{
        const newName = event.target.value
        setUserData((previousData) =>{
            const updated = { ...previousData, name: newName }
            return updated
        })
    } 

    const handleEmailChange = (event) =>{
        const newEmail = event.target.value
        setUserData((previousData) =>{
            const updated = { ...previousData, email: newEmail }
            return updated
        })
    }

    const handleSubmit=()=>{
        navigate('/result')
    }

    return (
        <>
            <h2>Cadastro de Usuarios</h2>

            <input
                type="text"
                name="name"
                placeholder="Digite seu nome"
                value={userData.name}
                onChange={handleNameChange}
            />

            <input
                type="email"
                name="email"
                placeholder="Digite seu email"
                value={userData.email}
                onChange={handleEmailChange}
            />

            <button onClick={handleSubmit}>Cadastrar</button>
        </>
  )
}