import React from 'react'

const Data = (props) => {

    let n1 = Number(prompt())
    let n2 = Number(prompt())

    return (
        <section>
            <p>Canal:{props.canal()}</p>
            <p>Youtube:{props.youtube}</p>
            <p>Curso:{props.curso}</p>
            <p>{`A soma de ${n1} com ${n2} é igual ${props.somar(n1, n2)}`}</p>
        </section>
    )
}

export default Data