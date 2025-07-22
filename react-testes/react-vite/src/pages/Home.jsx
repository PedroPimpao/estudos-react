import "../styles/Home.css"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

export default function Home(){
    const navigate = useNavigate()
    const location = useLocation()
    const {name} = location.state?.userData || {}

    const backToLogin =()=>{
        navigate("/")
    }

    return (
        <div className="main-home">
            <h1>Olá, {()=>name? name : "Mundo"}</h1>
            <button 
            className="backButton"
            onClick={backToLogin}>
            Voltar</button>
        </div>
    )
}