import { ThemeContext } from "../contexts/ThemeContext"
import { useContext } from "react"
import Input from "../components/Input"
import Button from "../components/Button"
import Switch from "../components/Switch"
import { useState } from "react"

export default function Calculator(){
    const {toggleTheme, theme} = useContext(ThemeContext)
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [imc, setImc] = useState(0)

    const handlePeso=(evt)=>{
        setPeso(evt.target.value)
    }

    const handleAltura=(evt)=>{
        setAltura(evt.target.value)
    }

    const calcularIMC=()=>{
        if(altura>0){
            const alturaM = altura/100
            const imcValue = peso/(alturaM*alturaM)
            setImc(imcValue.toFixed(2))
        }
    }

    return(
        <div className="calculator-container">
            <header>
                <h1>Calculadora de IMC</h1>
                <Switch id='themeChange' label='Dark mode' checked={theme==='dark'} onChange={toggleTheme}/>
            </header>
            <main>
                <section>
                    <div className="form">
                        <Input id='input-peso' label='Peso: ' placeholder='Insira seu peso...' onChange={handlePeso}/>
                        <Input id='input-altura' label='Altura: ' placeholder='Insira sua altura...' onChange={handleAltura}/>
                        <Button id='calcular-imc' className='button' value='Calcular' onClick={calcularIMC}/>
                    </div>
                </section>
                <section>
                    <div className="resultado">
                        <h3>Seu IMC é: {imc}</h3>
                    </div>
                </section>
            </main>
        </div>
    ) 

}