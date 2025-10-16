'use client'

import { useState } from "react"

export function Button(){
    const [nome, setNome] = useState('PimpsDev')

    const handleChangeName = () => {
        setNome('Pedro')
    }

    return(
        <>
            <button onClick={handleChangeName}>Alterar nome</button><br/>
            <h3>Nome: {nome}</h3>
        </>
    )
}