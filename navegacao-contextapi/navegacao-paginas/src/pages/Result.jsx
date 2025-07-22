import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { useNavigate } from "react-router-dom"

export function Result(){
    const {userData} = useContext(UserContext)

    const navigate = useNavigate()
    
    const backToForm =()=>{
        navigate(-1)
    }

    return (
        <>
            <h1>Usuário Cadastrado: </h1>
            <p>Nome: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <button onClick={backToForm}>Voltar</button>
        </>
    )
}