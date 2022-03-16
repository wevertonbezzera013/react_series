import React, { useState } from 'react'

const Header = () => {

    const [nome, setNome] = useState('')
    const [carro, setCarro] = useState('carro1')

    return (
        <div>

            <>
            
                <form>
                    <label>Digite seu nome: </label>
                    <input type="text" name="form" value={nome} onChange={(e) => {setNome(e.target.value)}}/>
                    <p>Nome digitado: {nome}</p>
                    
                    <label>Selecione um carro: </label>
                    <select values={carro} onChange={(e) => setCarro(e.target.value)}>
                        <option value="carro1">carro1</option>
                        <option value="carro2">carro2</option>
                        <option value="carro3">carro3</option>
                        <option value="carro4">carro4</option>
                    </select>
                    <p>Carro selecionado: {carro}</p>
                </form>
            
            </>

        </div>
    )
}

export default Header