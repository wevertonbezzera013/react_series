import React, { useState } from 'react'
import botaoVerde from '../../imgs/verde.png'
import botaoVermelho from '../../imgs/vermelho.png'

const Numero = (props) => {

    const [num, setNum] = useState(0)

    const [ligado, setLigado] = useState(false)

    return (
        <p>
            <p>Valor do state num em numero: {props.num}</p>
            <button onClick={() =>(props.setNum(props.num + 10))}>Soma 10</button>

            <img src={ligado ? botaoVerde : botaoVermelho} alt="botaoVermelho" style={{width: '50px'}}/>
            <button onClick={() => {setLigado(!ligado)}}>{ligado ? "ligado" : "desligado"}</button>
        </p>

    )
}

export default Numero