import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import "./UsersRegistered.css"

export function SignedUsers(){
    const { userList } = useContext(UserContext)
    const navigate = useNavigate()
    const backToLogin=()=>{
        navigate('/')
    }

    return (
        <div className="container usersListContainer"> 
            <h2>Usuários Cadastrados</h2>

            {/* <div className="userRegistered">
                <p><strong>Nome:</strong> {userData.name}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Senha:</strong> {userData.password}</p>
            </div> */}

            <div className="usersList">
                {userList.map((user)=>{
                    return (
                        <div className="userData" key={user.email}>
                            <p><strong>Nome:</strong> {user.name}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Senha:</strong> {user.password}</p>
                        </div>
                    )
                })}
            </div>
            <Button 
                type="button"
                onClick={backToLogin}
                label={"Voltar"}
            />
        </div>
    )
}