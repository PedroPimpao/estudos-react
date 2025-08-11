import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

export function SignedUsers(){
    const { userData } = useContext(UserContext)
    const navigate = useNavigate()
    const backToLogin=()=>{
        navigate('/')
    }

    return (
        <>
            <h1>Usuários Cadastrados</h1>

            <div className="userRegistered">
                <p><strong>Nome:</strong> {userData.name}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Senha:</strong> {userData.password}</p>
            </div>

            <Button 
                type="button"
                onClick={backToLogin}
                label={"Voltar"}
            />
        </>
    )
}