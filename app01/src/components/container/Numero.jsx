import React, { useState } from 'react'
import botaoVerde from '../../imgs/verde.png'
import botaoVermelho from '../../imgs/vermelho.png'

const Numero = (props) => {


    const [ligado, setLigado] = useState(false)

    const [log, setLog] = useState(false)

    const msglogin = () => {
        return "Usuário logado!"
    }

    const msglogoff = () => {
        return "Usuário Desconectado!"
    }

    const cumprimento = () => {
        const hora = new Date().getHours()
        if(hora >= 0 && hora < 13){
            return <p>Bom Dia!</p>
        } else if (hora >= 13 && hora < 18){
            return <p>Boa Tarde!</p>
        } else {
            return <p>Boa Noite!</p>
        }
    }

    const [cor, setCor] = useState(1)

    const vermelho = {color: "red"}
    const verde = {color: "green"}
    const azul = {color: "blue"}

    const retCor = (c) => {
        if(c==1){
            return vermelho
        } else if(c==2){
            return verde
        } else{
            return azul
        }
    }

    const mudaCor = () => {
        setCor(cor + 1)
        if(cor > 2){
            setCor(1)
        }
    }

    /* setInterval(mudaCor, 1000) */

    const carros = ['carro1', 'carro2', 'carro3', 'carro4', 'carro5', 'carro6']
    const listaCarros = carros.map(
        (elemento, indice) => 
            <li key={indice}>{indice} - {elemento}</li>
        
    )

    return (
        <>
            <p>Valor do state num em numero: {props.num}</p>
            <button onClick={() =>(props.setNum(props.num + 10))}>Soma 10</button>
            <br />
            <img src={ligado ? botaoVerde : botaoVermelho} alt="botaoVermelho" style={{width: '50px'}}/>
            <button onClick={() => {setLigado(!ligado)}}>{ligado ? "ligado" : "desligado"}</button>
            <br />
            {cumprimento()}
            <p>{log? msglogin() : msglogoff()}</p>
            <button onClick={() => {setLog(!log)}}>{log? 'Logoff' : 'Login'}</button>
            <br />
            <h1 style={retCor(cor)}>Wev_Dev</h1>
            <button onClick={() => mudaCor()}>Muda cor</button>

            <p>
                <h1>CARROS</h1>
                <ul>{listaCarros}</ul>
            </p>
        </>
        

    )
}

export default Numero